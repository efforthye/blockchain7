const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const dotenv = require("dotenv");
const path = require("path");
const cookieParser = require("cookie-parser");

const db = require("./models/index.js");
const socket = require("./socket.js");

dotenv.config();

const app = express();
app.set("port", process.env.PORT || 8080);

app.use((req,res,next)=>{
  if(process.env.NODE_ENV === "production"){
    morgan("combined")(req,res,next);
  }else{
    morgan("dev")(req,res,next);
  }
});

app.use("/", express.static(path.join(__dirname, "front")));

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(
  session({
    resave :false,
    saveUninitialized : false,
    secret : process.env.COOKIE_SECRET,
    cookie : {
      httpOnly : true,
      secure : false
    },
    name : "happy-session-cookie"
  })
);

db.sequelize
    .sync({force:false})
    .then(()=>{
        console.log("DB 연결됨");
    })
    .catch((err)=>{
       console.log(err); 
    });

const server = app.listen(app.get("port"), ()=>{
    console.log(app.get("port")+" 서버를 열었습니다.");
})


socket(server);