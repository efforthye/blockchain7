// /api/board

const router = require("express").Router();

// 응답을 보내는 메서드 : 현재 몇 페이지인지, 총 몇 페이지인지(목록과 페이징)
router.get("/", (req,res)=>{
    // axios.get("/api/board"); 여야 함

    console.log(req.route);
    res.send(req.route+" get으로 받았다.");
    
});

// 추가하는 메서드 : 게시판에 글을 추가한다.
router.post("/add", (req,res)=>{
    // axios.get("/api/board/add"); 여야 함

    res.send(req.route+" post로 받았다.");

    
});

module.exports = router;











// import / export
// require / modele.exprots