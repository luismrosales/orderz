const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
      process.env.DATABASE,
      process.env.USERNAME,
      process.env.DATABASE_PASSWORD,
      {
        host: process.env.HOST,
        port: process.env.DATABASE_PORT,
        dialect: "mysql",
        pool: {
          max: 5,
          min: 0,
          idle: 10000,
        },
      }
    );

module.exports = sequelize;
