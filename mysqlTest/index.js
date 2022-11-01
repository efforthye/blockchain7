const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");

dotenv.config();

const app = express();

app.set("port", process.env.PORT || 8080);

app.use((req,res,next)=>{
    if(process.env.NODE_ENV == "production"){
        morgan("combined")(req,res,next);
    }else{
        morgan("dev")(req,res,next);
    }
});

// root 접근시 web 폴더 내의 index.html파일을 불러옴
app.use("/", express.static(path.join(__dirname, "web")));

app.use()