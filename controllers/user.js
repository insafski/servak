const { get } = require("lodash");

const { User, sequelize } = require("../database/models");
const { responseMaker, hash, jwt, mailer } = require("../utils");
const { MAILER_INFO, SITE_URL } = require("../configs/envs");

// const transaction = sequelize.transaction();

module.exports = {
    create(req, res) {
        const { login = "", email = "", password: simplePasseord } = req.body;

        if ((login || email) && simplePasseord) {
            if (login) {
                return User.findOne({
                    where: { login },
                })
                    .then(sendMessage)
                    .catch(createUser);
            }

            if (email) {
                return User.findOne({
                    where: { email },
                })
                    .then(sendMessage)
                    .catch(createUser);
            }
        } else {
            responseMaker(
                res,
                400,
                "Регистрация",
                `${
                    (login && "Логин") || (email && "Email")
                } или пароль отсутствует`
            );
        }

        function sendMessage(data) {
            if (data.id) {
                responseMaker(
                    res,
                    400,
                    "Регистрация",
                    `${(login && "Логин") || (email && "Email")} уже существует`
                );
            }
        }

        function createUser() {
            const password = hash.encrypt(simplePasseord);

            const newUser = {
                login: login || null,
                email: email || null,
                password,
                settings: {
                    secret: "",
                },
            };

            //TODO: finish transaction & add secret generating

            User.create(
                newUser
                // transaction
            )
                .then((user) => {
                    const secretCode = "secretcode";
                    const verifyLink = `${SITE_URL}/auth/verification/${user.id}/${password}`;

                    const messageSubject = {
                        from: MAILER_INFO.user,
                        to: email,
                        subject: "Confirm account ✔",
                        text: `Вы зарегистрировались на сайте ХХХ, чтобы закончить регистрацию вам необходимо перейти по ссылке ${verifyLink}`,
                        html: "",
                    };

                    mailer(messageSubject)
                        .then((info) => {
                            // transaction.commit();
                            return responseMaker(
                                res,
                                200,
                                "Регистрация",
                                "Пользователь успешно создан",
                                { user }
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
                    return responseMaker(
                        res,
                        400,
                        "Регистрация",
                        "Ошибка при создании пользователя"
                    );
                });
        }
    },

    auth(req, res) {
        const { login = null, email = null, password } = req.body;

        if (login) {
            return User.findOne({
                where: { login, status: "active" },
            })
                .then(getJwt)
                .catch(() => {
                    responseMaker(
                        res,
                        200,
                        "Авторизация",
                        `Не правильный ${
                            (login && "логин") || (email && "еmail")
                        } или пароль`
                    );
                });
        }

        if (email) {
            return User.findOne({
                where: { email },
            })
                .then(getJwt)
                .catch(() => {
                    responseMaker(
                        res,
                        200,
                        "Авторизация",
                        `Не правильный ${
                            (login && "логин") || (email && "еmail")
                        } или пароль`
                    );
                });
        }

        function getJwt(data) {
            const isPasswordSame = hash.descrypt(data.password) === password;

            if (isPasswordSame) {
                jwt()
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
                            "Ошибка при генерации токена"
                        );
                    });
            } else {
                responseMaker(
                    res,
                    200,
                    "Авторизация",
                    `Не правильный ${
                        (login && "логин") || (email && "еmail")
                    } или пароль`
                );
            }
        }
    },

    restore(req, res) {
        const { email } = req.body;

        User.findOne({
            where: { email },
        })
            .then((data) => {})
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

    update(req, res) {
        const { userId, ...rest } = req.body;

        delete rest.status;
        delete rest.password;

        const params = rest;
        return User.update(
            {
                ...params,
            },
            {
                where: { id: userId },
            }
        )
            .then(() => {
                responseMaker(
                    res,
                    200,
                    "Обновление пользователя",
                    "Обновление прошло успешно"
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

    delete(req, res) {
        const { email } = req.body;

        if (login) {
            return User.update(
                {
                    deletedAt: new Date(),
                    status: "deleted",
                },
                {
                    where: {
                        email,
                    },
                }
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
                        "Ошибка сервера БД"
                    );
                });
        } else {
            responseMaker(
                res,
                400,
                "Удаление пользователя",
                "Не верные параметры запроса",
                { ...req.body }
            );
        }
    },

    confirmEmail(req, res) {
        const { userId, secretCode } = req.params;

        return User.findByPk(userId)
            .then((data) => {
                if (get(data, "password", "") === secretCode) {
                    User.update(
                        { status: "active" },
                        {
                            where: {
                                id: userId,
                            },
                        }
                    )
                        .then((data) => {
                            responseMaker(
                                res,
                                200,
                                "Верификация",
                                "Верификация прошла успешно"
                            );
                        })
                        .catch(() => {
                            responseMaker(
                                res,
                                400,
                                "Верификация",
                                "Ошибка при обновлении данных верификации"
                            );
                        });
                } else {
                    responseMaker(
                        res,
                        400,
                        "Верификация",
                        "Что то пошло не так",
                        { data }
                    );
                }
            })
            .catch(() =>
                responseMaker(res, 400, "Верификация", `Пользователь не найден`)
            );
    },
};
