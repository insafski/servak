const {
    CI_DB_USERNAME,
    CI_DB_PASSWORD,
    CI_DB_NAME,
    CI_DB_HOST,
} = require("../../configs/envs");

module.exports = {
    development: {
        username: CI_DB_USERNAME,
        password: CI_DB_PASSWORD,
        database: CI_DB_NAME,
        host: CI_DB_HOST,
        dialect: "postgres",
        dialectOptions: {
            ssl: { rejectUnauthorized: false },
        },
    },
    test: {
        username: "root",
        password: null,
        database: "database_test",
        host: "127.0.0.1",
        dialect: "mysql",
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
