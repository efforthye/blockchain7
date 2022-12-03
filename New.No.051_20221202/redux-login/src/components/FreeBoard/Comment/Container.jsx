import CommentComponent from "./Component"
import { action } from "../../../modules/reducer/comment";
import { useDispatch, useSelector } from "react-redux";

const CommentContainer = ({ userName, userId, boardId }) => {

    // state값을 저장하기 위함(store 연결)
    const dispatch = useDispatch();

    // find() : 배열에서 조건에 맞는 것을 순서대로 찾아보다가 맞는 게 있으면 그것 하나만 가져온다
    // filter() : find()와 같으나, 배열에서 조건에 맞는 아이템들을 전부 배열로 가져온다.
    const list = useSelector(
        (state) => state.comment.filter((item) => item.boardId == boardId)
    );

    const add = (text) => {
        console.log("하이");
        dispatch(action.add(text, userId, userName, boardId));
    }
    const edit = (id, text) => {
        dispatch(action.edit(id, text));
    }
    const remove = (id) => {
        dispatch(action.remove(id));
    }

    return <CommentComponent add={add} list={list} edit={edit} remove={remove} />
}

export default CommentContainer;