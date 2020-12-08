const {
    CI_DB_USERNAME,
    CI_DB_PASSWORD,
    CI_DB_NAME,
    CI_DB_HOST,
} = require("../../configs/envs");

require("dotenv").config();

module.exports = {
    development: {
        username: process.env.CI_DB_USERNAME,
        password: process.env.CI_DB_PASSWORD,
        database: process.env.CI_DB_NAME,
        host: process.env.CI_DB_HOST,
        dialect: "postgres",
        dialectOptions: {
            ssl: { rejectUnauthorized: false },
        },
    },
    test: {
        username: CI_DB_USERNAME,
        password: CI_DB_PASSWORD,
        database: CI_DB_NAME,
        host: CI_DB_HOST,
        dialect: "postgres",
        dialectOptions: {
            ssl: { rejectUnauthorized: false },
        },
    },
    production: {
        username: CI_DB_USERNAME,
        password: CI_DB_PASSWORD,
        database: CI_DB_NAME,
        host: CI_DB_HOST,
        dialect: "postgres",
        dialectOptions: {
            ssl: { rejectUnauthorized: false },
        },
    },
};
