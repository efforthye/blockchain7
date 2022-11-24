import styled  from 'styled-components';
import Item from './Item';

// Todo/index.js에서 받아옴
export default function List({list, setList}) {
    return (
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
                {/* 할 일을 추가하면 추가됨 */}
                {/* <Item /> */}
                {/* <Item /> */}
                {list.map((item, index)=>(
                    <Item key={`Item-${index}`} item={item} index={index} setList={setList} />
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