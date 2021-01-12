/**
 *
 * @param {*} res
 * @param {*} status
 * @param {*} title
 * @param {*} message
 * @param {*} params
 */
const responseMaker = (res, status = 200, title = "", message = "", params) => {
    return res.status(status).json({
        title,
        message,
        params,
    });
};

module.exports = responseMaker;
