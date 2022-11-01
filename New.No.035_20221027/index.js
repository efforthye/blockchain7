
const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const dotenv = require("dotenv");
const path = require("path");
const cookieParser = require("cookie-parser");

// DB 연결
// const mysql = require("mysql2");
// const sequelize = require("sequelize");
const db = require("./models/index.js");
db.sequelize
    // force를 false에서 true로 바꿔준다.(임시)
    .sync({force:true}) //.sync() : DB서버와 연결하는놈, force : 설정 테이블 강제생성(중요)
    .then(()=>{
        console.log("DB 연결됨");
    })
    .catch((err)=>{
       console.log(err); 
    });

// 테이블에 실제 데이터 추가(같은 인덱스이면 중복불가하기때문에 일단 주석처리한다.)
// db.NewTable1.create({
//     idx : 16, 
//     name : "asdfsdf", 
//     password : "sfdsdfs", 
//     id : "sdfsdfsdf"
// });

// db에서 값을 가져온다. (값이 없으면 못뽑아오므로 일단 주석처리한다.)
// db.NewTable1.findOne({
//     where : {
//         idx : 1,
//         // name : "박예성"
//     }
// }).then((data) => {
//     console.log(data);
//     console.log(data.name);
// }).catch((err)=>{
//     console.error(err);
// });



dotenv.config();

const app = express();
app.set("port", process.env.PORT || 8080);

app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});

app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "session-cookie",
  })
);


app.listen(app.get("port"), () => {
  console.log(`${app.get("port")} 서버를 열였습니다.`);
});