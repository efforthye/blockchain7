import { useSelector } from "react-redux";
import ListComponent from "./Component";

const ListContainer = () =>{

    // useSelector()를 통해 보드들을 state에서 가져옴
    const list = useSelector(state=>state.board);

    return (
        <ListComponent list={list}/>
    )
}

export default ListContainer;