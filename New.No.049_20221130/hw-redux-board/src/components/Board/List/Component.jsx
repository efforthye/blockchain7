import styled from "styled-components";

const ListComponent = ({ boardDB }) => {
    console.log(boardDB);
    return (
        <ListBox>
            {boardDB.map((board, index) => {
                return (
                    <TitleBox>
                        <div>번호 {index+1}</div>
                        <div>제목 : {board.title}</div>
                        <div>내용 : {board.context}</div>
                        <div>아이디 : {board.userId}</div>
                        <div>닉네임 : {board.userName}</div>
                        <div>현재시간 : {board.nowTime}</div>
                    </TitleBox>
                );
            })}
        </ListBox>
    );
}

export default ListComponent;

const ListBox = styled.div`
    
`;
const TitleBox = styled.div`
    border-bottom : 1px solid gray;
    cursor : pointer;
    margin : 5px;
`;