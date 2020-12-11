const { get } = require("lodash");

const { User, sequelize } = require("../database/models");
const { responseMaker, hash, jwt, mailer } = require("../utils");
const { MAILER_INFO, SITE_URL } = require("../configs/envs");

// const transaction = sequelize.transaction();

const getUserFields = ({
    id,
    login,
    email,
    firstName,
    lastName,
    avatar,
    phone,
    settings,
}) => ({
    id,
    login,
    email,
    firstName,
    lastName,
    avatar,
    phone,
    settings,
});

const deleteDangerFields = (params) => {
    delete params.password;
    delete params.role;
    delete params.status;
    delete params.secret;
    delete params.deletedAt;

    return params;
};

module.exports = {
    /**
     * POST запрос, проверка существования пользователя с логином
     * @param {*} req
     * @param {*} res
     */
    async checkSignUpParams(req, res) {
        const { login = null, email = null } = req.body;

        const errorMessages = [];
        const successMessages = [];

        if (login) {
            await User.findOne({
                where: { login },
            })
                .then((user) => {
                    if (user) {
                        errorMessages.push(
                            "Пользователь с таким логином уже существует"
                        );
                    } else {
                        successMessages.push("Логин свободный");
                    }
                })
                .catch(() => errorMessages.push("Не удалось проверить логин"));
        }

        if (email) {
            await User.findOne({
                where: { email },
            })
                .then((user) => {
                    if (user) {
                        errorMessages.push(
                            "Пользователь с таким email уже существует"
                        );
                    } else {
                        successMessages.push("Email свободный");
                    }
                })
                .catch(() => errorMessages.push("Не удалось проверить email"));
        }

        if (errorMessages.length || successMessages.length) {
            responseMaker(res, 200, "Проверка параметров регистрации", null, {
                errorMessages,
                successMessages,
            });
        } else {
            responseMaker(res, 204);
        }
    },

    /**
     * PUT запрос для регистрации нового пользователя
     * @param {*} req
     * @param {*} res
     */
    async create(req, res) {
        const { login, email, password: simplePasseord } = req.body;

        if (login && email && simplePasseord) {
            User.findOne({
                where: { login, email },
            })
                .then(sendMessage)
                .catch(createUser);
        } else {
            responseMaker(res, 204);
        }

        function sendMessage(user) {
            const { email, status } = user;
            if (status === "pending") {
                responseMaker(
                    res,
                    422,
                    "Регистрация",
                    "Пользователь уже существует. Необходимо подтвердить учетную запись"
                );
            } else if (status === "deleted") {
                responseMaker(
                    res,
                    410,
                    "Регистрация",
                    "Пользователь удален. Восстановить раннее созданную учетную запись?",
                    { email }
                );
            } else {
                responseMaker(
                    res,
                    409,
                    "Регистрация",
                    `${(login && "Логин") || (email && "Email")} уже существует`
                );
            }
        }

        async function createUser() {
            const password = hash.encrypt(simplePasseord);
            const secret =
                Math.floor(
                    Math.random() * (Math.floor(59998329) - Math.ceil(1111))
                ) + Math.ceil(2222);

            const newUser = {
                login,
                email,
                password,
                secret,
            };

            //TODO: finish transaction
            const t = await sequelize.transaction();
            const user = await User.create(newUser, { transaction: t });

            try {
                const verifyLink = `${SITE_URL}/auth/confirmEmail/${user.id}/${user.secret}`;

                const messageSubject = {
                    from: MAILER_INFO.user,
                    to: email,
                    subject: "Confirm account ✔",
                    text: `Вы зарегистрировались на сайте ${SITE_URL}, чтобы закончить регистрацию вам необходимо перейти по ссылке ${verifyLink}`,
                    html: "",
                };

                mailer(messageSubject)
                    .then(() => {
                        t.commit();
                        return responseMaker(
                            res,
                            200,
                            "Регистрация",
                            "Пользователь успешно создан",
                            {
                                user: getUserFields(user),
                            }
                        );
                    })
                    .catch(() => {
                        t.rollback();
                        return responseMaker(
                            res,
                            400,
                            "Регистрация",
                            "Ошибка при отравке почты. Пользователь не создан"
                        );
                    });
            } catch (error) {
                t.rollback();
                return responseMaker(
                    res,
                    400,
                    "Регистрация",
                    "Ошибка при создании пользователя"
                );
            }
        }
    },

    /**
     * POST запрос для авторизации, возвращает jwt
     * @param {*} req
     * @param {jwt} res
     */
    auth(req, res) {
        const { login = null, email = null, password } = req.body;

        if ((!password && !login) || (!password && !email)) {
            responseMaker(res, 204);
        } else if (login) {
            return User.findOne({
                where: { login },
            })
                .then(getJwt)
                .catch(() => {
                    responseMaker(
                        res,
                        409,
                        "Авторизация",
                        `Не правильный ${
                            (login && "логин") || (email && "еmail")
                        } или пароль`
                    );
                });
        } else if (email) {
            return User.findOne({
                where: { email },
            })
                .then(getJwt)
                .catch(() => {
                    responseMaker(
                        res,
                        409,
                        "Авторизация",
                        `Не правильный ${
                            (login && "логин") || (email && "еmail")
                        } или пароль`
                    );
                });
        } else {
            responseMaker(res, 204);
        }

        function getJwt(user) {
            const isPasswordSame = hash.descrypt(user.password) === password;

            if (isPasswordSame) {
                jwt(user)
                    .then((token) => {
                        responseMaker(
                            res,
                            200,
                            "Авторизация",
                            "Авторизая прошла успешно",
                            { token }
                        );
                    })
                    .catch(() => {
                        responseMaker(
                            res,
                            400,
                            "Авторизация",
                            "Ошибка сервера"
                        );
                    });
            } else {
                responseMaker(
                    res,
                    409,
                    "Авторизация",
                    `Не правильный ${
                        (login && "логин") || (email && "еmail")
                    } или пароль`
                );
            }
        }
    },

    /**
     * GET запрос для получения ссылки на восстановление пороля
     * @param {*} req
     * @param {*} res
     */
    requestPassword(req, res) {
        const { email } = req.body;

        User.findOne({
            where: { email },
        })
            .then((user) => {
                const verifyLink = `${SITE_URL}/auth/requestPassword/${user.id}/${user.secret}`;

                const messageSubject = {
                    from: MAILER_INFO.user,
                    to: email,
                    subject: "Request passport ✔",
                    text: `Вы запросили пароль на сайте ${SITE_URL}, в течении 10 минут ссылка на восстановление пароля будет активна  ${verifyLink}`,
                    html: "",
                };

                mailer(messageSubject)
                    .then(() => {
                        // transaction.commit();
                        return responseMaker(
                            res,
                            200,
                            "Регистрация",
                            "Пользователь успешно создан",
                            {
                                user: getUserFields(user),
                            }
                        );
                    })
                    .catch((error) => {
                        // transaction.rollback();
                        return responseMaker(
                            res,
                            400,
                            "Регистрация",
                            "Ошибка при создании пользователя",
                            { error }
                        );
                    });
            })
            .catch(() => {
                responseMaker(
                    res,
                    400,
                    "Запрос нового пароля",
                    "Пользователь не найден",
                    { email }
                );
            });
    },

    /**
     * GET запрос для подтверждения восстановления пароля
     * @param {*} req
     * @param {*} res
     */
    confirmPassword(req, res) {
        const { userId: id, secretKey } = req.params;
    },

    /**
     * POST запрос для обновления данных пользователя
     * @param {*} req
     * @param {*} res
     */
    update(req, res) {
        const { id, ...rest } = req.body;

        const params = deleteDangerFields(rest);

        return User.update({ ...params }, { where: { id } })
            .then((user) => {
                responseMaker(
                    res,
                    200,
                    "Обновление пользователя",
                    "Обновление прошло успешно",
                    { user: getUserFields(user) }
                );
            })
            .catch(() => {
                responseMaker(
                    res,
                    400,
                    "Обновление пользователя",
                    "Ошибка сервера БД"
                );
            });
    },

    /**
     * DELETE запрос, помечает пользователя как удаленный, но не удалется его
     * @param {*} req
     * @param {*} res
     */
    delete(req, res) {
        const { email } = req.body;

        if (email) {
            return User.update(
                {
                    deletedAt: new Date(),
                    status: "deleted",
                },
                { where: { email } }
            )
                .then(() => {
                    responseMaker(
                        res,
                        200,
                        "Удаление пользователя",
                        "Удаление прошло успешно"
                    );
                })
                .catch(() => {
                    responseMaker(
                        res,
                        400,
                        "Удаление пользователя",
                        "Ошибка сервера"
                    );
                });
        } else {
            responseMaker(res, 204);
        }
    },

    /**
     * GET запрос для подтверждения почты
     * @param {*} req
     * @param {*} res
     */
    confirmEmail(req, res) {
        const { userId: id, secretKey } = req.params;

        return User.findByPk(id)
            .then((user) => {
                if (get(user, "secret", "") === secretKey) {
                    User.update(
                        { status: "active", secret: null },
                        { where: { id } }
                    )
                        .then((user) => {
                            responseMaker(
                                res,
                                200,
                                "Подтверждение почты",
                                "Подтверждение почты прошла успешно",
                                { user: getUserFields(user) }
                            );
                        })
                        .catch(() => {
                            responseMaker(
                                res,
                                400,
                                "Подтверждение почты",
                                "Ошибка при обновлении данных"
                            );
                        });
                } else {
                    responseMaker(
                        res,
                        400,
                        "Подтверждение почты",
                        "Срок ссылки истек",
                        { data }
                    );
                }
            })
            .catch(() =>
                responseMaker(
                    res,
                    400,
                    "Подтверждение почты",
                    "Пользователь не найден"
                )
            );
    },

    /**
     * POST запрос для восстановления аккаунта
     * @param {*} req
     * @param {*} res
     */
    reestablish(req, res) {
        const { email } = req.body;

        return User.findByPk(id)
            .then(() => {
                User.update(
                    {
                        deletedAt: null,
                        status: "active",
                    },
                    { where: { email } }
                ).then(() => {
                    const messageSubject = {
                        from: MAILER_INFO.user,
                        to: email,
                        subject: "Восстановление учётной записи ✔",
                        text: `Вы восстановили учетную запись на сайте: ${SITE_URL}`,
                        html: "",
                    };

                    mailer(messageSubject)
                        .then((user) => {
                            // transaction.commit();
                            getJwt(user);
                        })
                        .catch((error) => {
                            // transaction.rollback();
                            return responseMaker(
                                res,
                                400,
                                "Восстановление аккаунта",
                                "Ошибка при восстановлении аккаунта, попробуйте еще раз",
                                { error }
                            );
                        });
                });
            })
            .catch(() =>
                responseMaker(
                    res,
                    400,
                    "Восстановление аккаунта",
                    "Пользователь не найден"
                )
            );

        function getJwt(user) {
            jwt(user)
                .then((token) => {
                    responseMaker(
                        res,
                        200,
                        "Восстановление аккаунта",
                        "Восстановление аккаунта",
                        { token }
                    );
                })
                .catch(() => {
                    responseMaker(
                        res,
                        400,
                        "Восстановление аккаунта",
                        "Ошибка сервера"
                    );
                });
        }
    },
};
