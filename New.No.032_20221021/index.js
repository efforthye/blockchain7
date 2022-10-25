// 오늘 수업 : 게시판 등록/수정/삭제, 목록 페이징, 아이디 생성/삭제/로그인/로그아웃

// 암호화 << 이론만 간단하게 용어정도?
// 입력한 데이터를 다른 사람이 알 수 없도록 변환한다.
// 1234 => 암호화를 통해서 => sdjflksjdkflsjdlfj32r9f23jf89
// 복호화 : 암호화된 데이터를 원상 복구한다.
// 사용자가 입력한 데이터를 알 수 있어야 할까?
// 비밀번호, 개인정보 등 알면 안 되는 것들도 있다.
// 우리가 직접 암호화 로직을 짜지는 않는다.
// crypto-js에 대해서 : https://defineall.tistory.com/701
// 암호화 자체는 원래 느리다.
// 아스키 코드? c언어? c언어가 모든 언어의 기반으로 깔려 있다.
// 단방향 / 양방향 암호화
// # 단방향은 암호화만 가능하다 => 복호화가 불가능하다.
//   Hashing : 일종의 배열? 객체? 이다.
//   해싱은 암호화된 중복되지 않는 키를 사용하여 데이터를 저장한다.
//   배열이 [0, 1, 2, 3, 4, 5] 이렇게 있으면 (내가 원하는 위치값)
//   [sjfkl, sdklfj,iwjof ,xjkcf, sjd,sfdjkl] 이런 식으로 있음 (입력된 데이터)
//   중요한 것은 중복이 최대한 되지 말아야 한다. (그 것이 해싱의 목표이다.)
//   우리는 어떠한 데이터를 반환해서 위치를 잡는다는 것을 알면 된다고 한다.
//   - 종류 : SHA256(가장 많이 쓰인다.), RIPEMD160
// # 양방향은 복호화가 가능하다.
// 양방향에는 대칭키, 비대칭키가 있다.
// 대칭 키 : 암호화와 복호화가 같은 키로 변환되며 키가 하나이다.
//   - 종류 : AES, DES, SEED
// 비대칭 키 : 암호화와 복호화가 다른 키로 변환된다. 보통 퍼블릭, 프라이빗 키로 나뉜다.
//   종류 : RSA, ECC
//   - 비대칭 키에 대해 테스트 해 보려면 openSsl 등을 사용해야 한다. << 알아서 찾아봐

const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const path = require("path");

// 암호화 파일을 가져옴, es6에서는 [import "./api/cryptoTest.js"]하면 된다.
// require("./api/cryptoTest.js");
// require("./api/jwt.js"); // https://jwt.io/

// 자바스크립트 연습 확인
require("./api/javascript.js");

// 라우트
const routes = require("./routes/index.js");

// 게시판
const boardList = [];

const app = express();
dotenv.config();

app.use((req, res, next)=>{
    if(process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
    else morgan("dev")(req, res, next);
});

app.use("/", express.static(path.join(__dirname, "web")));
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
    name: "session",
  })
);


// 여기부터 로그인 처리

// app.use("/", (req, res, next)=>{
//     console.log("url1 : "+req.url); // get : /api/board, post : /api/board/add
//     next();
// });

// app.use("/api", (req, res, next)=>{
//     // 이미 api는 찍혀있고 남은 게 board라는 뜻이라고 한다.
//     console.log("url2 : "+req.url); // get : /board, post : /board/add
//     next();
// });

// 게시판 데이터를 받아 처리함
app.post("/api/board/add", (req,res)=>{
    boardList.unshift(req.body);
    res.send({ status : 200, data : "정상 입력 완료" });
});
app.get("/api/board", (req,res)=>{
    // console.log(req.query.count);
    res.send({ 
        status : 200, 
        list : boardList, 
        // 만약 0이면 0~5, 1이면 5~10
        list : boardList.slice(+req.query.count*5,(+req.query.count+1)*5), 
        // 조건 ? 참 : 거짓
        maxCount: parseInt((boardList.length?boardList.length-1:boardList.length)/5)+1,
    })
});


// 수정
app.post("/api/board/update", (req,res)=>{
    boardList[+req.body.count * 5 + +req.body.num].text = req.body.text;
    boardList[+req.body.count * 5 + +req.body.num].uptime =  req.body.time;

    res.send({ status : 200, data : "Update 테스트중" });
});
// 삭제
app.post("/api/board/delete", (req,res)=>{
    console.log(req.body);
    // 페이지값*5 , 넘버를 가져와 타겟을 정해준다.
    boardList.splice(+req.body.count * 5 + +req.body.num, 1);

    res.send({ status : 200, data : "Delete 테스트중" });
});





// 라우트
app.use("/api", routes);

app.listen(8080, () => {
  console.log("http://localhost:8080");
});

