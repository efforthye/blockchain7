import styled from "styled-components";
import AddBoard from "./AddBoard";
import List from "./List";

// export default function BoardBox(){
//     return <div></div>;
// }

export default function BoardBox(){
    return (
        <BoardStyled>
            <AddBoard />
            <List />
        </BoardStyled>
    );
}

const BoardStyled = styled.div``;