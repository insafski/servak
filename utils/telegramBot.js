const http = require("request");

const token = "1511672828:AAF5lqARqNp7REtsnopoUeOnsbIG5Ee-Esg";
const chat = "-406973470";

const telegram = (msg) => {
    const message = encodeURI(msg);
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat}&parse_mode=html&text=${message}`;

    http.post(url);
};
module.exports = telegram;
