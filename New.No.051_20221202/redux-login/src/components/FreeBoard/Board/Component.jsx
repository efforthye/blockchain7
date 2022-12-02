import { Link } from "react-router-dom";
import styled from "styled-components";

const BoardComponent = ({ board, remove, isCreator }) => {
    console.log(board);

    return (
        <BoardBox>
            <h1>{board.title}</h1>
            <h3>userName : {board.userName} - {board.createdAt}</h3>

            {/* 보드에 해당하는 유저이름이 같은지 확인해서 편집 삭제 버튼을 띄운다.(중요) */}
            {!isCreator || (
                <span>
                    {/* <button onClick={()=>{edit()}}>Edit</button> */}
                    <Link to={`/edit/${board.id}`}>
                        <button>Edit</button>
                    </Link>
                    <button onClick={() => { remove() }}>Delete</button>
                </span>
            )}
            <p>{board.text}</p>
        </BoardBox>
    )
}

export default BoardComponent;

const BoardBox = styled.div`

`;