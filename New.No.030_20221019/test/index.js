// 라이브러리/모듈을 선언해 불러옴
const express = require("express"); // 함수로 돌려서 리턴값 받음
const session = require("express-session");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");

// 환경설정 구축
dotenv.config();
const app = express();

// 포트번호 세팅
app.set("port", process.env.PORT || 8080);

// 




