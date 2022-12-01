import styled from "styled-components";

const BoardComponent = ({board}) =>{
    console.log(board);
    
    // if(!board){
    //     return;
    // }

    return (
        <BoardBox>
            <h1>{board.title}</h1>
            <h3>userName : {board.userName} - {board.createdAt}</h3>
            <p>{board.text}</p>
        </BoardBox>
    )
}

export default BoardComponent;

const BoardBox = styled.div`

`;