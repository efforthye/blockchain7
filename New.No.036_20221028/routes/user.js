const router = require("express").Router();

// 
const {User} = require("../models/index.js");
const jwt = require("jsonwebtoken");

// 암호화는 서버쪽에서 처리해서 전달해준다.
const Cryptojs = require("crypto-js");

router.post("/regist", async (req,res,next)=>{
    console.log("하이");
    // res.end(); // 여기서 끝내고 밑으로 안내려감
    next();
});

// 회원가입
router.post("/regist", async (req,res)=>{
    console.log(req.body);
    try{
        // 입력한 아이디와 같은 아이디가 있는지 db에서 가져와본다.
        const tempUser = await User.findOne({
            where:{userId:req.body.id}
        });

        // 회원가입시 기존에 있는 아이디이면 에러및 리턴
        if(tempUser){
            res.status(500); // 에러코드 찾아서 끼워맞추기
            res.send({message : "exist Id"});
            return;
        }

        // 뭐하는 놈인지 모름
        const {id, pw, name, className} = req.body;
        
        // db에 집어넣는다.(왼쪽이 db컬럼이름, 오른쪽이 web에서 보낼때이름)
        // 여기에서 암호화해야 함
        User.create({
            userId : id,
            // userPw : pw,
            userPw : Cryptojs.SHA256(pw).toString(),
            name,
            class  : className,
        });
        res.end();
    }catch(error){
        res.status(500);
        res.send(error);
    }


});

router.post("/login", async (req,res)=>{
    console.log(req.body);

    try{
        // DB에서 맞는 아이디 가져옴
        const tempUser = await User.findOne({
            where : {userId : req.body.id}
        });
        
        console.log(tempUser);
        console.log(req.body.pw);

        // 아이디 없음 : 리턴
        if(!tempUser){
            res.status(500);
            res.send({message : "no Id"});
            return;
        }

        // 비밀번호 같음
        if(tempUser.userPw == Cryptojs.SHA256(req.body.pw).toString()){
            // 쿠키
            res.cookie("happy", jwt.sign({
                id : tempUser.id, // db에 넣기 위해 쿠키에 아이디 저장
                name : tempUser.name
            }, process.env.JWT_KEY, {
                algorithm : "HS256",
                expiresIn : "30m",
                issuer : "phr"
            }));

            // 호출한 곳(web)에 값을 보냄
            res.send({
                name : tempUser.name
            });
            return;
        }
        res.status(500);
        res.send({message : "wrong password"});

    }catch(error){
        res.status(500);
        res.send(error);

    }



});


router.get("/logout", (req,res)=>{
    req.session.name = "session test";
    res.clearCookie("happy");
    res.end();
});


module.exports = router;