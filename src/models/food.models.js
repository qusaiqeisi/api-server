'use strict';

const food = (sequelize, DataTypes) => sequelize.define('food', {
  namefood: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  customerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  namedrink: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = food;