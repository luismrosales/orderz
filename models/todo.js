const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

class Todo extends Model {}

Todo.init(
  {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 160],
      },
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 160],
      },
    },
    party_size: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 160],
      },
    },
    table_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 160],
      },
    },
  },
  {
    sequelize,
  }
);

module.exports = Todo;
