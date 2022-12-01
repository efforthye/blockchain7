import { Router } from "express";
import crypto from "crypto-js";

const router = Router();

// 모든 유저를 담은 배열
const userArr = [];
// 로그인 유저
const user = {};


// 유저 회원가입(userId, userPw, userName})
router.post("/regist", (req, res) => {
    console.log(req.body);

    // 만약 배열에 없으면 배열에 집어넣는다.
    if (!userArr.find((item) => item.userId == req.body.userId)) {
        userArr.push(req.body);
    }

    // 끝낸다.
    res.end();

});


// 유저 로그인
router.post("/login", (req, res) => {

    // 일치하는 아이디의 유저정보를 찾는다.
    const tempUser = userArr.find((item) => item.userId == req.body.userId);

    // 일치하는 아이디가 있고, 그 배열의 비번과 요청의 비번이 같으면, 이미 로그인되어있다면
    if (tempUser && tempUser.userPw == req.body.userPw && !user[tempUser.userId]) {

        // 유저 아이디에 해당하는 유저 배열에 비밀번호를 저장하는듯?(모르겠다?)
        user[tempUser.userId] = crypto.SHA256(tempUser.userId).toString(crypto.Base64);

        // 쿠키에 유저 아이디를 10분간 저장
        res.cookie(
            "user",
            user[tempUser.userId],
            { expires: new Date(Date.now() + 10 * 60 * 1000) }
        );

        // 로그인 유저 정보를 없앤다..(일단 쿠키에서만 없애면 안되기 때문)
        setTimeout(() => {
            user[tempUser.userId] = undefined;
        }, 10 * 60 * 1000);

        // 비밀번호를 지워 확인한다.(?)
        res.send({ ...tempUser, userPw: undefined });
    } else {
        res.send({ text: "아이디가 없습니다." });
    }
});


// 로그아웃
router.post("/logout", (req, res) => {
    // 로그인 쿠키를 삭제해준다.
    res.clearCookie("user");

    // 로그아웃에 성공하면 해당 유저의 비밀번호를 지워 확인한다.
    user[req.body.userId] = undefined;

    res.end();
});



// 로그인을 확인하기 위해 user를 받는다.
// 어떤 데이터가 있는지 확인하기 위한 라우터
router.get("/check", (req, res) => {
    console.log(userArr);
    console.log(user);
    res.send({userArr, user});
});


export default router;