// /api는 여기로 들어옴

const router = require("express").Router();

// const board = require("./board.js");
const user = require("./user.js");

router.use("/", (req,res,next)=>{
    console.log("routes/index.js : "+req.url); // /board/add
    next(); //(중요)
});

// router.use("/board", board);
router.use("/user", user);


module.exports = router;

// import / export
// require / modele.exprots