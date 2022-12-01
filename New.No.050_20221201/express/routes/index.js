// 라우터 연결을 위한 라이브러리
import {Router} from "express";
// 라우터 연결할 곳
import userApi from "./user.js";


const router = Router();

// 라우터 연결
router.use("/user", userApi);

export default router;