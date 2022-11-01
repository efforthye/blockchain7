const router = require("express").Router();

const {Table1} = require("../models/index.js");

// GET / POST / PUT / PATCH / DELETE
// 위 5가지 방식으로 통신을 하는 방식을 REST API라고 한다.
// REST API = RESTFUL API = RESTFUL 다 같은 말이다.
// HTTP 통신, 즉 web 통신을 할 때 기본적으로 사용되는 방식이다.
// REST API VS GraphGL << 이런 놈도 있기는 하다.

// 미들웨어(jwt로 로그인 확인할 때 쓰인다. ust라면 모든 라우터에 적용되게 된다. 미들웨어는 위에 있어야함)
// router.get("/", (req,res,next)=>{
//     // get일 때 쿠키를 추가한다.(expires가 없으면 안 끝남..)
//     res.cookie("happy", "middle", {expires:Date.now()+1000*1});
//     next();
// });
// 여기로 넘어온다.
router.get("/", async (req,res)=>{
    // req 안에 있는 것을 받아올 수 있다.
    // 구조분해할당 흠.. req로 들어온걸 body랑 query로 나누는듯?
    const {body, query} = req;
    const options = {};

    if(query.column2){
        options.where = {
            column2 : query.column2, // column2가 query.column2인 애를 찾겠다.
        }
    }

    // 찾는다.
    // Table1.findOne(); // 이놈은 안에 값을 넣어줘야 함
    // Table1.findAll();
    // 마우스 댔을 때 promise는 await를 해줘야 함
    // const tempTables = await Table1.findAll();
    const tempTables = await Table1.findAll(options);
    // 위 코드와 같다.
    // const tempTables = await Table1.findAll({
        // 어떤 조건으로 찾을 것인가?
    //     where : {
    //         column2 : query.column2
    //     }
    // });
    
    res.send({name : "get", body, query, tempTables});
});


router.post("/", async (req,res)=>{
    const {body, query} = req;

    // 만들어줌(models/table1.js의 컬럼들) 자동증가하는놈은뺌
    // body.column1 : html에서 보내줘야함(그러면 값이 body에 저장됨, 중요중요)
    const tempTable = await Table1.create({
        column1 : body.column1
    });

    res.send({name : "post", body, query, tempTable});
});

router.put("/", (req,res)=>{
    const {body, query} = req;
    res.send({name : "put", body, query});
});

router.patch("/", (req,res)=>{
    const {body, query} = req;
    res.send({name : "patch", body, query});
});

router.delete("/", (req,res)=>{
    const {body, query} = req;
    res.send({name : "delete", body, query});
});


module.exports = router;