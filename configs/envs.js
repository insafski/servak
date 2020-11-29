const MAILER_INFO = {
    user: process.env.MAILER_INFO_USER,
    pass: process.env.MAILER_INFO_PASS,
};

const CI_DB_USERNAME = process.env.CI_DB_USERNAME;
const CI_DB_PASSWORD = process.env.CI_DB_PASSWORD;
const CI_DB_NAME = process.env.CI_DB_NAME;
const CI_DB_HOST = process.env.CI_DB_HOST;

const COOKIES_SECRET = process.env.COOKIES_SECRET;

const HASH_SECRET = process.env.HASH_SECRET;

const SITE_URL = process.env.SITE_URL;

const JWT_SECRET_D = process.env.JWT_SECRET_D;
const JWT_SECRET_X = process.env.JWT_SECRET_X;
const JWT_SECRET_Y = process.env.JWT_SECRET_Y;

module.exports = {
    MAILER_INFO,
    CI_DB_USERNAME,
    CI_DB_PASSWORD,
    CI_DB_NAME,
    CI_DB_HOST,
    COOKIES_SECRET,
    HASH_SECRET,
    SITE_URL,
    JWT_SECRET_D,
    JWT_SECRET_X,
    JWT_SECRET_Y,
};
