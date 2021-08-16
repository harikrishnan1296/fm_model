require("dotenv").config();

const development = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST || "localhost",
  dialect: process.env.DIALECT || "mysql",
};

const testing = {
  database: "databasename",
  username: "username",
  password: "password",
  host: "localhost",
  dialect: "mysql",
};

const production = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST || "localhost",
  dialect: "mysql",
};

require("dotenv").config();

let db;
switch (process.env.NODE_ENV) {
  case "development":
    db = development;
    break;
}

module.exports = {
  db,
};
