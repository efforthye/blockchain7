const express = require("express");
const session = require("express-session");
const path = require("path");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const {sequelize} = require('./models/index.js');
const routes = require("./routes/index.js");

dotenv.config();

const app = express();
app.set("port", process.env.PORT || 8080);

// 뭔갈 처리하는 놈(next하면 다음줄로 감)
app.use((req,res,next)=>{
    if(process.env.NODE_ENV === "production"){
        morgan("combined")(req,res,next);
    }else{
        morgan("dev")(req,res,next);
    }
});

// 그냥 불러오는 애들이라서?
// 기본적으로 넣는것임
app.use("/", express.static(path.join(__dirname, "public")));

app.use(express.json());

app.use(express.urlencoded({extended:false}));

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
        // 세션에 저장댐
        name : "session-cookie"
    })
)

sequelize
    // .sync({force : true})
    .sync({force : false})
    .then(()=>{
        console.log("db connected")
    }).catch((err)=>{
        console.error(err);
    });



app.use("/api", routes);

app.listen(app.get("port"), () =>{
    console.log("서버를 염");
});

