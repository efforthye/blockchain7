// package.json 내의 "type" : "module"
// import 등의 ES6 문법을 사용하기 위해 추가한다.
import express from "express";
import session from "express-session";
import morgan from "morgan";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// 크로스오리진 해결
import cors from 'cors';

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


// 크로스오리진 해결
// 단, 현재는 단점이 있다고 함(모든 주소에 대해서 응답해준다.)
// 우리는 응답하도록 3000포트만 해주고 싶은데..
// app.use(cors());
// 그래서 이렇게 이 주소만 원본이라고 설정해 3000포트만 응답하도록 했다.
// origin : 원본 주소이며, 해당 원본 주소에 대해서만 요청을 응답하도록 한다.
// 원본 주소에는 http와 같은 프로토콜, localhost와 같은 도메인 주소, :3000와 같은 포트까지 포함한다.
// /api와 같은 라우터는 포함하지 않는다.
// 어떤 서버로 요청보낼 것인지 지정해준다.
app.use(cors({origin : "http://localhost:3000"}));


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


// 크로스 오리진에 대해서..
// CORS policy(정책)
// Cross Origin Resource Sharing
// 교차 원본 자원 공유 << 한국말
// 보안상의 문제로, 같은 주소가 아닌 다른 주소에서 
// API 요청 혹은 이미지 요청 등의 자료를 구해올 수 없다.
// GET에서는 발생하는 경우가 거의 없지만
// POST에서는 거의 대부분 발생한다고 한다.
// # 크로스 오리진 해결 방법
// - 보통은 proxy라는 개념을 사용한다.
// # Proxy란 ? 간단히 말하면 중간 서버이다.
// - 다른 서버에 자료를 요청해서 자기 것인 것 마냥 응답으로 보낸다.
// (자세한 사항은 각자 알아서 공부해볼 것(중요))
// # 다른 해결 방법
// - HTTP 통신의 Header에서 설정을 추가하여 웹 페이지의 주소에 대해서 인증해준다.
// header 확인 : 콘솔의 네트워크의 아래쪽 헤더에 어세스 컨트롤 같은 곳에 추가추가해주면되는듯
// ##### 제일 쉬운 해결방법
// - node.js에서는 cors라는 라이브러리가 있다고 한다.(중요중요)
// express쪽에 core설치 : npm i cors




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