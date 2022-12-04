import DetailComponent from "./Component";
import { connect, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

const DetailContainer = ({board}) =>{

    const boardNum = useParams(useLocation());

    // 해당 게시글
    // const board = useSelector(state => state.board.find((item)=>item.boardNum == boardNum));
    // const board = useSelector(state => state.board[0]);
    // console.log(board);

    return (
        <DetailComponent board={board.find((item)=>item.boardNum == boardNum) } />
    );
}


const mapStateToProps = (state, props) => {
    return {
        board: state.board
    };
}
export default connect(mapStateToProps)(DetailContainer);