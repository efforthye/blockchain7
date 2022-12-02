import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { action } from "../../../modules/reducer/board";
import EditComponent from "./Component";

const EditContainer = () =>{

    // 몇 번째 게시물인지 받아온다.(주소의 맨 뒷부분 잘라옴)
    const {id} = useParams(useLocation());
    // id를 토대로 게시물을 찾아온다.
    const board = useSelector(state=>state.board.find((item)=>item.id == id));

    const dispatch = useDispatch();
    const navigate =  useNavigate();

    // 편집 버튼 클릭시 dispatch를 통해 action.edit으로 접근해 reducer로 상태값을 변경한다.
    // 편집 완료시 해당 보드 상세페이지로 이동
    const onClick = (title, text) =>{
        dispatch(action.edit(id, title, text));
        navigate(`/board/${id}`);
    }


    return (
        // 게시물도 넘겨준다.
        <EditComponent onClick={onClick} board={board} />
    )
}

export default EditContainer;