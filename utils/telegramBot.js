const http = require("request");

const token = "1511672828:AAF5lqARqNp7REtsnopoUeOnsbIG5Ee-Esg";
const chat = "-406973470";

const telegram = (msg) => {
    const message = encodeURI(msg);
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat}&parse_mode=html&text=${message}`;

    http.post(url, (error, response, body) => {
        console.error("error:", error);
        console.log("statusCode:", response && response.statusCode);
        console.log("body:", body);
    });
};
module.exports = telegram;
