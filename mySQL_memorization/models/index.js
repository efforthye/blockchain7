"use strict";

const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];

const Table = require("./table.js");
const db = { Table };

let sequelize = new Sequelize(
  // config.json에서 DB이름과 비밀번호 등을 가져와 새로운 Sequelize에 담음
  config.database,
  config.username,
  config.password,
  config
);

// 소문자는 뭐하는 놈이고 대문자는 뭐하는 놈임? : 
db.sequelize = sequelize;
db.Sequelize = Sequelize;

Table.init(sequelize);

Table.associate(sequelize);

module.exports = db;
