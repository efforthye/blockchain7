// 강사님이 깃허브에 routes/board.js에 sql구문과 함께 설명 올려놓음 -> 다 옮겨적음
// routes/board.js에서 User 클래스를 models/index.js에서 가져온 이유는 
// 게시글을 추가할 때 쿠키에 저장된 jwt내용을 가져와 인증해서 그 안의 id를 뽑아와
// 그 아이디를 어떻게어떻게 사용하려는 이유인 것 같다.
const { User, Board } = require("../models/index.js");

const router = require("express").Router();

const jwt = require("jsonwebtoken");

// use : 뭘 받든지 다 처리
router.use("/", (req, res, next) => {

    // 전역변수로 선언
    global.userId = "";

    try {
        // routes/board.js 에서 가져옴, 무엇을 위해? : 
        // 유저정보(id)
        // const tempUserInfo = jwt.verify(req.cookies.happy, process.env.JWT_KEY).id;
        const tempUserInfo = jwt.verify(req.cookies.happy, process.env.JWT_KEY);

        global.userId = tempUserInfo.id;

        // 쿠키
        res.cookie("happy", jwt.sign({
            id: tempUserInfo.id,
            name: tempUserInfo.name
        }, process.env.JWT_KEY, {
            algorithm: "HS256",
            expiresIn: "30m",
            issuer: "phr"
        }));
        // next(); 필요한 이유? : 인증한 다음 미들웨어로 보내주기 위해서
        // 다음 미들웨어는 어떤것인지..? : 바로 아래에 있는 get("/")
        // 없으면 어떻게 되는거지? : router.get("/")으로 넘어가지 않음
        next(); 
    } catch (err) {
        res.send(err);
    }
});


// web에서 get으로 /api/board 에 요청을 보내면 여기로 온다.
router.get("/", async (req, res) => {

    const tempBoard = await Board.findAll({
        // attributes << 나중에 찾아봐
        order: [["id", "DESC"]],       //정렬
        limit: 5,                      //몇개까지 받아올 것인가?(최대개수)
        // offset: 3,                     //시작 위치(앞에서3부터5개)
    });

    res.send({ list: tempBoard });

    // 웹에 123 출력해줌
    // res.end("123");
});

// 게시글 추가 다음시간까지 하기(게시글 추가 : DB에 들어감)
// 유저 아이디 컬럼은 랜덤 숫자로
// req.body.id는 아마 web에서 입력받은 친구인 것 같다.
router.post("/add", async (req, res) => {
    console.log(`req.body : ${req.body}`);
    console.log(`id : ${req.body.id}`);
    console.log(`pw : ${req.body.pw}`);

    // 유저 아이디를 쿠키에서 가져옴
    // findOne : 하나 찾기(나머지도 검색해보기)
    const tempUser = await User.findOne({
        where: {
            // routes/index.js
            id: global.userId
        }
    });

    // DB에 값들을 넣음
    const tempBoard = await Board.create(req.body);
    tempUser.addBoard(tempBoard);

    res.end();

});


// 게시글 수정(put)
// UPDATE TableName SET text=${req.body.text} WHERE id=${req.body.id}
router.put("/update", async (req, res) => {

    // 데이터베이스에서 수정(업데이터)
    // 위에 있는 첫번째 인자 : 어떤 컬럼에 어떤 값을 넣을 것인지
    await Board.update({ text: req.body.text }, {
        // 바꿀 위치 찾기
        where: {
            id: req.body.id
        }
    });

    res.end();
});

// 게시글 삭제
router.delete("/delete", async (req, res) => {

    // 삭제할 게시물 찾기(id가 요청 온 id인 놈)
    const tempBoard = await Board.findOne({
        where : {
            id : req.query.id
        }
    });

    // tempBoard.user_Id에서 user_Id는 models/board.js에서 
    // 유저랑 연결한 foreignKey와 같아야 한다. (중요, 외우기)
    // DELETE TableName WHERE id=${req.body.id}
    if(tempBoard.user_Id === global.userId){
        // 데이터베이스에서 삭제
        await Board.destroy({
            where: {
                id: req.query.id,

            }
        });
    }

    // 응답을 끝내줘야 한다. 이걸 하지 않으면 어떻게 되는거지?
    res.end();
});



module.exports = router;