import styled  from 'styled-components';
import Item from './Item';

// Todo/index.js에서 리스트 배열을 수정하기 위해 받아옴
export default function List({list, setList}) {
    return (
        // ListTable : 테이블 css가 적용된 div
        <ListTable>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Task Name</th>
                    <th>Status</th>
                    <th>Edit</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {/* Todo/index.js에서 가져온 투두리스트 배열 아이템들을 돌린다. */}
                {/* 각각의 아이템들을 뿌려줄 Item 컴포넌트에 값들을 보내준다~~ */}
                {/* 생성된 수정/삭제 버튼 기능을 수행하기 위해 setList도 같이 보내준다.. ㅎㅎ */}
                {/* Todo/List/Item.jsx에는 tr과 td가 있다. 아이템 하나하나 돌려서 띄움 ㅎ */}
                {list.map((item, index)=>(
                    <Item key={`Item-${index}`} listItem={item} itemIndex={index} setList={setList} />
                ))}
            </tbody>
        </ListTable>
    );
}

const ListTable = styled.table`
    border-collapse : collapse;
    width : 100%;
    th {
        border-bottom : 1px solid black;
    }
`;