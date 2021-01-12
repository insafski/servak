const nodemailer = require("nodemailer");

const { MAILER_INFO } = require("../configs/envs");

const mailer = (mailSubject) => {
    return new Promise((resolve, reject) => {
        const transporter = nodemailer.createTransport({
            pool: true,
            service: "gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: MAILER_INFO,
        });

        transporter.sendMail(
            mailSubject,
            (error, info) => {
                if (error) {
                    reject(error);
                    // return process.exit(1);
                } else {
                    resolve(info);
                    transporter.close();
                }
            },
            () => {}
        );
    });
};

module.exports = mailer;
