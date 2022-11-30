import { connect } from "react-redux";
import ListComponent from "./Component";

// 여기에서 컴포넌트에 데이터 값을 보내주면 될듯
const ListContainer = ({boardDB}) =>{

    return <ListComponent boardDB={boardDB} />;
}

// 리스트에 보내줄 state값(boardDB)
const mapStateToProps = (state, props) => {
    return {
        boardDB : state.boardDB
    };
}

export default connect(mapStateToProps)(ListContainer);