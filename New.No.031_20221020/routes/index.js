// 서버, 클라이언트에서 데이터를 받아 처리한다.

// 이걸 왜 객체로 선언했지? -> 구조분해할당
// express(), app.뭐시기와 똑같은 것 같다.
import {Router} from "express";
const router = Router();

// todoList의 내용을 담을 배열을 선언한다.
const todoList = [];

// routing : 어떤 네트워크 안에서 통신 데이터를 보낼 경로를 선택하는 과정
// # console.log(router);
//   function router(req, res, next) {
//     router.handle(req, res, next);
//   }
// # console.log(router.route("/list"));
// Route { path: '/list', stack: [], methods: {} }
router.route("/list").get((req,res)=>{
    res.send({
        list : todoList
    });
}).post((req,res)=>{
    todoList.push(req.body["name"]+" "+req.body["time"]);
    res.end();
}).put((req, res)=>{
    // 수정


}).delete((req, res)=>{
    // 삭제

    
});

// module.exports = router;
export default router;