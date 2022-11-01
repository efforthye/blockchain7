// localhost:8080/api/user
// 이 놈이 있어야 라우터 기능을 사용할 수 있다.
const router = require("express").Router();

// 암호화
const crypto = require("crypto-js");

// 토큰
const jwt = require("jsonwebtoken");


router.use("/", (req,res,next)=>{
    console.log("routes/user.js : "+req.url); // /board/add
    next(); //(중요)
});

// 유저 정보
const userList = {};

// 회원가입
router.post("/regist", (req,res)=>{
    console.log("회원가입 - 서버");

    console.log(userList);
    console.log(req.body.id);
    console.log(req.body.name);
    console.log(crypto.SHA256(req.body.pw).toString());

    // 미리 암호화를 해서 저장해야함
    if(!userList[req.body.id]){
        userList[req.body.id] = {
            pw : crypto.SHA256(req.body.pw).toString(),
            name : req.body.name,
            nickname : req.body.nickname,
            gender : req.body.gender,
            age : req.body.age
        };

        console.log(userList);
        // console.log(userList[req.body.id]);

        // 이 놈을 보내야 클라이언트 쪽에 전달됨
        res.send({status : 200, data : "regist"});
    }else{
        res.send({status : 402, data : "exist id"});
    }

    // userList.push(req.body);
    // console.log(userList);

});


// 로그인
router.post("/login", (req, res)=>{
    // 그러면 서버쪽 login js에서 아이디에 해당하는 
    // 비밀번호(회원가입할때 저장한 암호화된 비번)가 암호화한 새로 입력한 비번과 같으면
    // 쿠키를 응답(res.cookie())에 추가해준다.

    // 유저 리스트에 아이디에 해당하는 비밀번호가 새로 입력한 비밀번호(암호화)와 같으면
    // 쿠키를 추가하고 res.send로 결과를 보내준다.

    if(userList[req.body.id]?.pw === crypto.SHA256(req.body.pw).toString()){
        // 쿠키 추가(응답)
        // res.cookie("log_in", {})
        res.cookie("log_in", 
            // 쿠키의 값으로 토큰을 보냄(토큰 생성)
            jwt.sign({name : userList[req.body.id].name}, "happyworld", {
                // 토큰에 대한 정보
                algorithm : "HS256", 
                expiresIn : "10m", 
                issuer : "phr"
            }),
            {
                expires : new Date(Date.now()+10000)
            }
        );


        res.send({status : 200, data: "로그인 성공"});
        console.log("로그인 성공");
    }else{
        res.send({status : 401, data : "잘못된 비밀번호"});
    }


});







// 라우터를 맨 마지막에 내보내줘야 다른 곳에서 연결시킬 수 있다.
module.exports = router;
