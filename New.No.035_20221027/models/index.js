'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
// const db = {};

let sequelize = new Sequelize(
  config.database, config.username, config.password, config
);

const NewTable1 = require("./table1.js");
const db = {NewTable1};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

NewTable1.init(sequelize);
NewTable1.associate(db);

module.exports = db;
