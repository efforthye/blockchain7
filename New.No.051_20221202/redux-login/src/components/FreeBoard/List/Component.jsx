import styled from "styled-components";
import { Link } from 'react-router-dom';

const ListComponent = ({ list }) => {

    console.log(list);

    return (
        <ListBox>
            {/* col : table의 크기 맞춰줌 (좋다) */}
            <colgroup>
                <col width={'10%'} />
                <col width={'50%'} />
                <col width={'20%'} />
                <col width={'20%'} />
            </colgroup>
            <thead>
                <tr>
                    <th>index</th>
                    <th>Title</th>
                    {/* <th>Text</th> */}
                    <th>UserName</th>
                    <th>createAt</th>
                </tr>
            </thead >
            <tbody>
                {list.map((board, idx) => <tr key={`tr-${idx}`}>
                    <td key={`id-${idx}`}>{board.id}</td>
                    {/* 중요 */}
                    <td key={`title-${idx}`}>
                        {/* 중요 index.jsx의 Router와 상호작용한다. */}
                        <Link to={`/board/${board.id}`}>{board.title}</Link>
                    </td>
                    <td key={`userName-${idx}`}>{board.userName}</td>
                    <td key={`createdAt-${idx}`}>{board.createdAt}</td>
                </tr>)}
            </tbody>
        </ListBox >
    )
}

export default ListComponent;

const ListBox = styled.table`
    width: 100%;
    border-collapse: collapse;

    th{
        border-bottom: 1px solid black;
        border-right: 1px dashed black;
    }
    td{
        text-align: center;
        border-bottom: 1px dashed black;
        height: 50px;
        /* cursor: pointer; */
        a{
            /* text-decoration: none;
            color: black; */
        }
    }
`;