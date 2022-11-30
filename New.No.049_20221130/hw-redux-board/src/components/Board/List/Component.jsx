import styled from "styled-components";

const ListComponent = ({ boardDB }) => {
    console.log(boardDB);
    return (
        <ListBox>
            <div>하이</div>
            <Table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">제목</th>
                        <th scope="col">내용</th>
                        <th scope="col">아이디</th>
                        <th scope="col">닉네임</th>
                        <th scope="col">작성시간</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {boardDB.map((board, index) => {
                        return (
                            // <TitleBox>
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{board.title}</td>
                                    <td>{board.context}</td>
                                    <td>{board.userId}</td>
                                    <td>{board.userName}</td>
                                    <td>{board.nowTime}</td>
                                </tr>
                            // </TitleBox>
                        );
                    })}
                </tbody>
            </Table>


            {/* {boardDB.map((board, index) => {
                return (
                    <TitleBox>
                        <div>번호 {index + 1}</div>
                        <div>제목 : {board.title}</div>
                        <div>내용 : {board.context}</div>
                        <div>아이디 : {board.userId}</div>
                        <div>닉네임 : {board.userName}</div>
                        <div>현재시간 : {board.nowTime}</div>
                    </TitleBox>
                );
            })} */}

            
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
const Table = styled.table`
    width : 1100px;
    text-align : center;
`;