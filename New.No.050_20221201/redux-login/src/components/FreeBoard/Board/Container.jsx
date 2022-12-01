import { useSelector } from "react-redux";
import BoardComponent from "./Component";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";

const BoardContainer = () =>{

    // 라우터이동
    const navigate = useNavigate();

    // 이렇게 해서 위의 쿼리값을 가져올 수 있다.(라우터에 사용)
    // useParams의 결과는 {id : ***} 으로 나온다.
    const {id} = useParams(useLocation());

    // const board = useSelector(state => state.board[0]);
    // 쿼리값과 같은 아이디를 가진 보드를 출력한다.(라우터에서 가져옴)
    const board = useSelector(state => state.board.find((item)=> item.id == id));

    // useEffect(()=>{
    //     if(!board){
    //         navigate("/");
    //     }
    // }, [board]);

    return (
        <BoardComponent board={board}/>
    )
}

export default BoardContainer;