import styled from 'styled-components';
// import TempTd from './TempTd';

export default function List({ number, list }) {

    console.log(number);
    console.log(list);


    return (
        <ListStyle>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th style={{ width: "300px" }}>할일</th>
                        <th style={{ width: "45px" }}>상태</th>
                        <th style={{ width: "45px" }}>수정</th>
                        <th style={{ width: "45px" }}>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {/* <TempTd number={number} list={list} /> */}
                        <td>1</td>
                        <td>ㄴㅇ라ㅓㄴ아ㅣ런어린어란일ㄹㅇㄴ</td>
                        <td>아직</td>
                        <td>🛠</td>
                        <td>❌</td>
                    </tr>
                </tbody>
            </table>
        </ListStyle>
    );
}

const ListStyle = styled.div`
    width : 460px;
`;
