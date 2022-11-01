// routes/index.js는 router를 전부 통제하는 root이다.
// 즉 router에 대한 root파일이라고 얘기할 수 있다.

// express 서버에서 사용하는 라우터를 생성한다.
const router = require("express").Router();

// 라우트 파일들을 불러옴
const table1 = require("./table1.js");
// const table2 = require("./table2.js");


// 미들웨어
// next(); 가 중요하다.
// router.use("/", (req,res,next)=>{
//     // 새로고침하면 서버쪽 콘솔에 로그들이 남음
//     console.log(req.body, req.query);

//     // 여기서 끝낸다.
//     // res.end() == res.send() == res.json();
    
//     // 다음으로 넘긴다. 없으면 무한 정지가 될 수도 있다고 한다.
//     // 무슨 뜻이냐면, res.end() 등등이 없을 때 응답을 보내지 않으므로 
//     // next가 없으면 응답하지 않는 상태로 멈춰있다.
//     // 반대로, next()가 있으면, 다음 라우터(흐름)로 넘어간다.
//     next();
// });





// 라우터로 사용해줌
router.use("/table1", table1);
// router.use("/table2", table2);




// express 서버의 root에 연결하기 위해서 생성한 라우터를 외부로 보내준다.
module.exports = router;
// 메인 index.js에서 이렇게 불러와 사용할 수 있다.
// const routes = require("./routes/index.js");
// app.use("/hi", routes); // localhost:8080/hi >> routes에 접근한다.