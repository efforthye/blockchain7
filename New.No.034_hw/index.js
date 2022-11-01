const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");

// 라우트
const user = require("./routes/user.js");
// const router = require("./routes/index.js");

dotenv.config();

const app = express();

app.set("port", 8080);

app.use((req,res,next)=>{
    if(process.env.NODE_ENV === "production"){
        morgan("combined")(req,res,next);
    }else{
        morgan("dev")(req,res,next);
    }
});

app.use("/", express.static(path.join(__dirname, "web")));

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(
    session({
        resave:false,
        saveUninitialized:false,
        secret:process.env.COOKIE_SECRET,
        cookie:{
            httpOnly:true,
            secure:false
        },
        name:"session-cookie"
    })
);

// /api로 라우팅
// app.use("/api", router);
// /user로 라우팅
app.use("/user", user);

app.listen(app.get("port"), ()=>{
    console.log("시작");
});