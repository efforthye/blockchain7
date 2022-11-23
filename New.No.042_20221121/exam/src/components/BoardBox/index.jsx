import styled from "styled-components";
import AddBoard from "./AddBoard";
import List from "./List";

// export default function BoardBox(){
//     return <div></div>;
// }

export default function BoardBox(){
    return (
        <BoardStyled>
            {/* 추가하는데 필요한 것들 보내기 */}
            <AddBoard />

            {/* 리스트에 나타낼 값 등등 보내기 */}
            <List />
        </BoardStyled>
    );
}

const BoardStyled = styled.div``;