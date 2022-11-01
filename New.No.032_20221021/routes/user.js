// /api/user
console.log("/api/user");

const router = require("express").Router();
const crypto = require("crypto-js");
const jwt = require("jsonwebtoken");

// 유저 정보를 담을 객체
const userList = {};

// 회원가입
router.post("/regist", (req,res)=>{

    // // jwt(json web token) 생성
    // const tempJWT = jwt.sign(
    //     {name : "test"}, 
    //     "dsfdsf", 
    //     {algorithm : "HS256", expiresIn : "10m", issuer : "phr"}
    // ); 
    // console.log(tempJWT);

    // // verify : jwt 파싱
    // const tempData = jwt.verify(tempJWT, "dsfdsf");
    // console.log(tempData);


    // // 쿠키는 임시 데이터를 브라우저에 저장한다.
    // // 크롬에서 로그인한 내용 쿠키에 남게 된다.
    // // 파이어 폭스에는 연동되지 않는다고 한다. 
    // // 이유 : 데이터를 브라우저에 저장하는데 브라우저가 다르기 때문(쿠키저장공간다름)

    // const cookie_name = "cookie_name", cookie_data = "now testing";

    // // 응답으로 쿠키 추가
    // // res.cookie("cookie_name", "now testing", {
    // res.cookie(cookie_name, {
    //     // 단위가 ms다, 1ms : 0.001s -> 1000ms = 1s
    //     // 10*60*1000 : 10분.. 일단 30초로 설정해둠
    //     // expires : 시간이 지나면 사라지도록 시간을 제어한다.
    //     // 쿠키가 있는지 없는지 나중에 확인해서 로그인을 어떻게어떻게 처리처리하면 됨
    //     expires : new Date(Date.now() + 30*1000)
    // });
    // // res.clearCookie 쿠키를 지워준다.


    // 중복 아이디 체크를 한 뒤 push 해야한다.
    // console.log(req.body);
    // 이런 식으로 키 값 가져오는 것 매우 중요하다고 한다.(중요)
    if(!userList[req.body.id]){
        userList[req.body.id] = {
            name : req.body.name,
            pw : crypto.SHA256(req.body.pw).toString(),
        };
        // 객체 안의 객체로 저장한다.
        // userList[req.body.id] = {
        //     pw : req.body.pw,
        //     name : req.body.name,
        // };
        // 아이디를 키값으로 비밀번호를 값으로 저장(객체)
        // userlistp['idid'] = 'pwpw'
        res.send({status : 200, data : "regist"});
    }else{
        res.send({status : 402, data : "exist id"});
    }

    // console.log(data.data);
});

// 로그인
// send가 두개 있으면 안된다.
router.post("/login", (req,res)=>{

    // 쿠키 (위에서 정한 이름 cookie_name)
    console.log(req.cookies.cookie_name);

    // if( userList[req.body.id]?.pw === req.body.pw){
    // 로그인 성공(암호화 비밀번호 일치)
    if( userList[req.body.id]?.pw === crypto.SHA256(req.body.pw).toString()){
        // name 추가
        // 쿠키 추가
        res.cookie("log_jwt", 
            jwt.sign({name : userList[req.body.id].name}, "block7testing", {
                algorithm : "HS256", 
                expiresIn : "10m", 
                issuer : "phr"
            })
        );
        // 이름을 찾아서 띄워준다.
        // res.send({status : 200, data : "login", name : userList[req.body.id].name});
        res.send({status : 200, data : "login"});
    }else{
        res.send({status : 401, data : "wrong password"})
    }
});


























// 모듈은 맨 아래
// import / export
// require / modele.exprots
module.exports = router;

const name = "";
const email = "";
const phoneNumber = "";
const address = "";
const id = "";
const pw = "";

const userInfo = {
    name : "a",
    email : "b"
}
// userInfo.name => "a" 출력됨
// userInfo.gender = "g"' 를 하면 뭘 가져올 지 모름
// 정해지지 않고 사용자가 입력한 값을 어떻게 넣을 지가 문제가 된다.
// userInfo.jkh

const userInput = "hi"
userInfo[userInput];