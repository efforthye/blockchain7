// 엄격 모드, 오류가 발생하도록 한다.
'use strict';

// 시퀄라이즈를 불러옴
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
// const config = require(__dirname + '/../config/config.json');
console.log(config);
// {
//   username: 'root',
//   password: 'sena5289',
//   database: 'board_web',
//   host: '127.0.0.1',
//   dialect: 'mysql'
// }

// db
const User = require("./user.js");
const Board = require("./board.js");
const Comment = require("./comment.js");
const db = {User, Board, Comment};

let sequelize = new Sequelize(
  config.database, config.username, config.password, config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// db
User.init(sequelize);
Board.init(sequelize);
Comment.init(sequelize);

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;


