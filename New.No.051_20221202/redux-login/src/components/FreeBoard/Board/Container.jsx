import { useDispatch, useSelector } from "react-redux";
import BoardComponent from "./Component";
import { useNavigate, useLocation, useParams } from "react-router-dom";
// import { useEffect } from "react";
import { action } from "../../../modules/reducer/board";
import CommentContainer from "../Comment/Container";

const BoardContainer = () => {

    // 스토어에 전달해주는놈
    const dispatch = useDispatch();

    // 라우터이동
    const navigate = useNavigate();

    // 이렇게 해서 위의 쿼리값을 가져올 수 있다.(라우터에 사용)
    // useParams의 결과는 {id : ***} 으로 나온다.
    const { id } = useParams(useLocation());

    // const board = useSelector(state => state.board[0]);
    // 쿼리값과 같은 아이디를 가진 보드를 출력한다.(라우터에서 가져옴)
    const board = useSelector(state => state.board.find((item) => item.id == id));

    // 삭제버튼 클릭
    const remove = () => {
        dispatch(action.remove(board.id));
        navigate("/");
    }

    // 해당 유저만 삭제버튼 띄우려고 유저이름 가져옴
    const userName = useSelector(state => state.userInfo.userName);
    const userId = useSelector(state => state.userInfo.userId);

    return (
        <>
            {/* isCreator로 해당 유저가 맞는지 여부를 보내는듯? */}
            <BoardComponent board={board} remove={remove} isCreator={userName == board.userName} />
            {/* 위에서 가져온 id */}
            <CommentContainer userName={userName} userId={userId} boardId={id} />
        </>
    )

}

export default BoardContainer;