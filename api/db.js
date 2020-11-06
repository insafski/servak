var pgp = require("pg-promise")(/* options */);

const cn = {
    host: process.env.DB_HOST,
    port: 5432,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    max: 30,
    ssl: { rejectUnauthorized: false },
};

var db = pgp(cn);

module.exports = db;
