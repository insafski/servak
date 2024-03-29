const { Loft } = require("../database/models");
const { responseMaker, telegramBot } = require("../utils");

module.exports = {
    /**
     * POST запрос, заказ звонка
     * @param {*} req
     * @param {*} res
     */
    async loft_call(req, res) {
        const { name = null, phone = null } = req.body;

        if (!name || !phone) {
            return responseMaker(res, 204);
        }

        const newLoftOrder = await Loft.create({
            name,
            phone,
        });

        telegramBot(`Имя: <b>${name}</b>\nТелефон: <b>${phone}</b>`);

        if (newLoftOrder.id) {
            return responseMaker(
                res,
                200,
                "Success",
                "Заявка отправлена. Ожидайте звонка."
            );
        } else {
            return responseMaker(res, 400, "Error", "Ошибка сервера.");
        }
    },
};
