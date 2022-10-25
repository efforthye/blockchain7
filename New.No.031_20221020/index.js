// 기본 설정을 하는 서버
import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";
import morgan from "morgan";

// url => 주소, 라우터?, 서버 내에서의 파일 위치 등 
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

import listApi from './routes/index.js';

dotenv.config();
const app = express();

app.set("port", process.env.PORT || 8080);

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use((req, res, next)=>{
    if(process.env.NODE_ENV=="production"){
        morgan("combined")(req,res,next);
    }else{
        morgan("dev")(req,res,next);
    }
})
// app.use("/", express.static(path.join(__dirname, "public")));
app.use("/", express.static(path.join(__dirname, "hw")));
app.use(cookieParser(process.env.COOKIE_SECRET));


app.use(
    session({
        resave : false,
        saveUninitialized : false,
        secret : process.env.COOKIE_SECRET,
        cookie : {
            httpOnly : true,
            secure : false
        },
        name : "session-cookie"
    })
);

app.use("/api", listApi);


// // get방식의 요청
// app.get('/api/list',(req, res)=>{
//     res.send({
//         list : todoList,
//     });
// });

// // app.get('/api/add',(req, res)=>{
// //     console.log(req.query);
// //     todoList.push(req.query["name"]);
// //     const {test} = req.query;
// //     console.log(test);
// //     console.log(todoList);

// //     // res 즉 응답으로, todoList를 보내고 완료한다.
// //     res.end();
// // });

// // post 형식으로 요청을 받을 때
// // (첫 번째 매개변수, 두 번째 매개변수)
// // 첫 번째 매개변수는 라우터 즉 주소의 뒤에 어떻게 붙어서 요청이 들어왔는가?
// // localhost:8080/api/add << 라고 들어왔을 때
// // 두 번째 매개변수는 콜백 함수이며 해당 post 요청에 대해서 실행하는 작업 코드
// app.post('/api/add', (req, res)=>{
//     // req 즉 요청으로, body안에 있는 do-name을 todoList배열에 추가한다.
//     // console.log(req.body);
//     // todoList.push({text : req.body["name"], time : req.body.time});
//     todoList.push(req.body["name"]+" "+req.body["time"]);
//     // const {test} = req.body;
//     // console.log(test);
//     console.log(todoList);

//     // res 즉 응답으로, todoList를 보내고 완료한다.
//     res.end();

// });

app.listen(app.get("port"),()=>{
    console.log("서버 시작");
});




// # Web Server
//   HTTP 통신을 한다. << 요청 / 응답
//   브라우저가 요청을 보낸다. -> 서버 요청을 받는다. -> 
//   서버는 요청에 대해서 응답을 보낸다. -> 브라우저가 자신이 보낸 요청에 대한 응답을 받는다.
//   -> 클라이언트가 요청을 보내야만 서버가 데이터를 응답으로 보내줄 수 있다.
// # 클라이언트(브라우저)는 서버를 어떻게 찾을까?
//   IP / DNS(도메인) 주소를 찾는다. -> 서버에 접속한다.
//   -> 정상적인 포트로 접근했는가, 접속이 허용된 포트인가를 서버가 확인 -> 
//   접속이 되면 서버는 응답한다. 
// # 서버의 응답 방법
//   URL 즉 우리가 기존에 알고있던 주소와 지금 얘기하는 주소가 다르다는 것을 알아야 한다.
//   우리가 기존에 알던 주소는 http://naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1 라고 치면,
//   서버에서 말하는 주소는 search.naver.com << 도메인 주소까지를 말한다.
//   라우터 : search.naver
//   쿼리 스트링 : ?where=nexearch&sm=top_hty&fbm=1
//   우편 번호 : 건물마다 결정됨. -> 주소, 
//   정확한 상세 주소 : 라우터 .. 서버 내에서 주소를 찾는 것이다. 라우터로 구분하는 것이다.
//   도서관 << 주소
//   도서관의 인문학관, 자연학관, 종교관, 철학관 등등은 << 라우터라고 생각
//   각 관의 책들은 << 데이터
//   책들에 붙어있는 라벨들을 찾아서 대여한다. << 데이터를 응답받은 것이다.
