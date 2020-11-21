const { Op } = require("sequelize");

const hash = require("../api/hash");
const jwt = require("../api/jwt");
const { User } = require("../database/models");

const { responseMaker } = require("../utils");

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
            };
            User.create(newUser)
                .then((user) =>
                    responseMaker(
                        res,
                        200,
                        "Регистрация",
                        "Пользователь успешно создан",
                        { user }
                    )
                )
                .catch(() =>
                    responseMaker(
                        res,
                        400,
                        "Регистрация",
                        "Ошибка при создании пользователя"
                    )
                );
        }
    },

    auth(req, res) {
        const { login = null, email = null, password } = req.body;

        if (login) {
            return User.findOne({
                where: { login },
            })
                .then(tt)
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
                .then(tt)
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

        function tt(data) {
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
        const { userId, ...params } = req.body;
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
        const { login } = req.body;

        return User.update(
            {
                deletedAt: new Date(),
                status: "deleted",
            },
            {
                where: {
                    login,
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
    },

    verify(req, res) {
        const { userId, secretCode } = req.params;

        return User.findByPk(userId)
            .then((data) => {
                if (data.secret === secretCode) {
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
                }
            })
            .catch(() =>
                esponseMaker(res, 400, "Верификация", `Пользователь не найден`)
            );
    },
};
