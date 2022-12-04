import styled from "styled-components";
import { Link } from 'react-router-dom';

const ListComponent = ({ boardDB }) => {

    // 현재 보드
    // console.log(boardDB);

    return (
        <ListBox>
            {/* <div>하이</div> */}
            <Table>
                {/* 참고해서 콜그룹 % 만들기 */}
                <colgroup>
                    <col width={'5%'}></col>
                    <col width={'15%'}></col>
                    <col width={'25%'}></col>
                    <col width={'15%'}></col>
                    <col width={'20%'}></col>
                    <col width={'20%'}></col>
                </colgroup>
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
                <tbody>
                    {boardDB.map((board, index) => {
                        return (
                            <tr key={`tr-${index}`}>
                                <th key={`index-${index}`} scope="row">
                                    {board.boardNum}
                                </th>

                                {/* 중요 */}
                                {/* 선생님은 title을 link로 감싸 라우터를 사용했다. */}
                                {/* import { Link } from 'react-router-dom'; */}
                                {/* <Link to={`/board/detail/${board.index}`}>{board.title}</Link> */}
                                <td key={`title-${index}`}>
                                    <Link to={`/board/detail/${board.boardNum}`}>
                                        {board.title}
                                    </Link>
                                </td>

                                <td key={`context-${index}`}>{board.context}</td>
                                <td key={`userId-${index}`}>{board.userId}</td>
                                <td key={`userName-${index}`}>{board.userName}</td>
                                <td key={`time-${index}`}>{board.nowTime}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>

        </ListBox>
    );
}

export default ListComponent;

const ListBox = styled.div`
    
`;
// const TitleBox = styled.div`
//     border-bottom : 1px solid gray;
//     cursor : pointer;
//     margin : 5px;
// `;
const Table = styled.table`
    width : 1100px;
    text-align : center;
`;