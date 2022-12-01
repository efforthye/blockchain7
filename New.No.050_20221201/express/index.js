// package.json 내의 "type" : "module"
// import 등의 ES6 문법을 사용하기 위해 추가한다.
import express from "express";
import session from "express-session";
import morgan from "morgan";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// 라우터 설정
import routes from "./routes/index.js"

dotenv.config();

const app = express();

app.set("port", process.env.PORT || 8080);

app.use((req,res,next)=>{
  if(process.env.NODE_ENV=="production"){
    morgan("combined")(req,res,next);
  }else{
    morgan("dev")(req,res,next);
  }
});

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use(cookieParser(process.env.COOKIE_SECRET));

// 이렇게 연결하지 않을 것이기 때문에 설정해주지 않아도 된다.
// app.use("/", express.static(path.join(__dirname, "web")));

app.use(session({
  resave : false,
  saveUninitialized : false,
  cookie : {
    httpOnly : true,
    secure : false,
  },
  name : "session"

}))

// 라우터 설정
app.use("/api", routes);

// 라우터를 사용할 곳에 이 코드를 추가해준다.
// import {Router} from "express";
// const router = Router();
// export default router;


app.listen(app.get("port"), () =>{
  console.log(app.get("port")+" 포트 서버를 열었습니다.");
});




// const express = require("express");
// const session = require("express-session");
// const morgan = require("morgan");
// const dotenv = require("dotenv");
// const path = require("path");
// const cookieParser = require("cookie-parser");

// dotenv.config();

// const app = express();
// app.set("port", process.env.PORT || 8080);

// app.use((req, res, next) => {
//   if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
//   else morgan("dev")(req, res, next);
// });

// app.use("/", express.static(path.join(__dirname, "web")));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser(process.env.COOKIE_SECRET));

// app.use(
//   session({
//     resave: false,
//     saveUninitialized: false,
//     secret: process.env.COOKIE_SECRET,
//     cookie: {
//       httpOnly: true,
//       secure: false,
//     },
//     name: "session-cookie",
//   })
// );

// app.listen(app.get("port"), () => {
//   console.log(app.get("port")+" 서버를 열었습니다.");
// });