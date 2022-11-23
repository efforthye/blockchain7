import styled from "styled-components";

export default function AddBoard(){
    return (
        <AddBoardStyled>
            <input type={"text"} placeholder="제목"></input>
            <input type={"text"} placeholder="냐옹"></input>
            <button>등록</button>
        </AddBoardStyled>
    );
}

const AddBoardStyled = styled.div``;