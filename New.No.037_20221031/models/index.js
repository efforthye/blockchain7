// models/index.js는 DB의 Table에 대해서 전부 관리한다.

// MVC : Model View Controller, 프로그래밍의 기초이다.
// 자바스크립트에서는 그렇게 안 따진다.
// 디자인 패턴 중의 하나라고 한다. 보통의 프로그래밍에서 많이 사용된다.
// View : 보이는 것, Controller : 조작/통제, Model : 저장하는 것

// 엄격 모드 : ES6 안됨, var or import 안되고 빡세게 코드를 작성하겠다는 뜻.
'use strict';

const Sequelize = require('sequelize');
const Table1 = require("./table1.js");

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {Table1};

let sequelize = new Sequelize(config.database, config.username, config.password, config);

Table1.init(sequelize);

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;









// 테스트
// class A{
//   constructor(){
//       this.a = 1;
//   }
//   test(num){
//     console.log(num);
//   }
//   // 클래스 자체에서 사용하는 함수
//   static testStatic(num){
//     console.log(num);
//   }
// }
// const testA = new A();
// A.testStatic(2); : 이건 됨
// testA.
// // static으로 적은건 안나옴
// console.log(new A()) //A { a: 1 }

// 원래는 new를 해서 사용해야 하는데 그냥 static하면 A.어쩌구저쩌구 할수있음

// class B extends A{
//   constructor(){
//     super(); // 상속을 받을 때는 부모의 생성자를 super();으로 한번 불러와야 한다.
//     this.b = 2;
//   }
// }
// console.log(new B()); //B { a: 1, b: 2 }