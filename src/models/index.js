'use strict';

require('dotenv').config();

const POSTGRES_URI =process.env.NODE_ENV='test' ? 'sqlite:memory ':'postgres://localhost:5432/lab04';
const { Sequelize, DataTypes } = require('sequelize');

const Collection = require('./collection-class');
const foodSchema = require('./food.models');
const customerSchema = require('./customer.models');

let sequelize = new Sequelize(POSTGRES_URI);

const foodModel = foodSchema(sequelize, DataTypes);
const customerModel = customerSchema(sequelize, DataTypes);

customerModel.hasMany(foodModel, { foreignKey: 'customerId', sourceKey: 'id'});
foodModel.belongsTo(customerModel, { foreignKey: 'customerId', targetKey: 'id'});


//export Collections 
const foodCollection = new Collection(foodModel);
const customerCollection = new Collection(customerModel);


module.exports = {
  db: sequelize,
  foodCollection: foodCollection,
  customerCollection: customerCollection
}