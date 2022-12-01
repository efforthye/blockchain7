import {Router} from "express";

const router = Router();


const userArr = [];

router.post("/regist", (req, res)=>{
    console.log(req.body);
    res.end();
});


export default router;