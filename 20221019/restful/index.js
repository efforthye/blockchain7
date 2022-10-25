const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const path = require("path"); // 내장모듈, 라이브러리, 남이 만들어놓은 코드를 가져와 씀

dotenv.config(); // 환경설정(이후에 서버 생성해야 함)
const app = express(); // 서버 생성하는 놈

// .env에 PORT = 1234를 설정해주면 그놈 먼저 나오고 없으면 8080된다.
app.set("port", process.env.PORT || 8080);

// 
app.use((req, res, next)=>{
    if(process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
    else morgan("dev")(req,res,next);
})
app.use("/", express.static("./public")); // 여기에 연결하고 싶은 폴더명 입력해도됨(중요)
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
    session({
        resave : false,
        saveUninitialized : false,
        secret : process.env.COOKIE_SECRET,
        cookie : {
            httpOnly : true,
            secure : false,
        },
        name : "session-cookie",
    })
);

app.use((req, res, next)=>{
    console.log(req,body);
    // next : 다음 걸로 넘어가라.
    next();
});


// 받는 역할
app.post("/*", (req, res, next)=>{
    // 쿠키를 추가한다.
    res.cookie("name", req.body.name);
    next();
});
app.post("/api/user", (req, res)=>{
    // 쿠키를 추가한다.
    console.log("name : ", req.body.name);
    res.end("정보를 추가했다.");
});


app.use((err, req, res, next)=>{
    console.log(err);
    res.status(500).send(err.massage);
});

app.listen(app.get("port"), () => {
    console.log(app.get("port")+ "서버 오픈");

})

// npm start



