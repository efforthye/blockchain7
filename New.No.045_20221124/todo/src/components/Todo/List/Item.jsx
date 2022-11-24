import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { STATUSLIST, TodoBtn } from '../../setting';
// List폴더 안에 이미지 들어있음
// 만약 svg이면 svg filter color검색해보기
// 이미지에 그대로 넣어주면 아이콘 색상 바꿀 수 있음
import penImg from './edit4.png';
import removeImg from './remove.png';

// Todo/List/List.jsx에서 받아옴
export default function Item({ item, index, setList }) {

    return (<ItemTr>
        <td>{index + 1}</td>
        <td>{item.taskName}</td>
        <td>
            <TodoBtn
                className={STATUSLIST[item.status].toLowerCase().replace(" ", "-")}
                style={{ cursor: "default" }}>
                {STATUSLIST[item.status]}
            </TodoBtn>
        </td>
        <td>
            {/* 수정은 수정할 창이 필요하기 때문에 삭제와 다르게 라우터로 보내준다. */}
            {/* state index를 보낸 이유 : TodoModal에서 수정할때 사용하기 위함 */}
            {/* item은 수정할때 이미 입력되어있던 값을 가져오기 위해서이다. */}
            <Link to={"/edit"} state={{index, item}}>
                <TodoBtn className='todo'><img src={penImg} alt="penImg"></img></TodoBtn>
            </Link>
        </td>
        <td>
            {/* 삭제 버튼 */}
            <TodoBtn className='todo' onClick={()=>{
                setList(list=>{
                    const before = list.slice(0, index);
                    const after = list.slice(index+1);
                    return [...before, ...after];
                });
            }}>
                <img src={removeImg} alt="removeImg"></img>
            </TodoBtn>
        </td>
    </ItemTr>);
}

const ItemTr = styled.tr`
    text-align : center;
    height : 50px;

    td {
        border-bottom : 1px solid lightgray;
    }

    img{
        margin-top : 2px;
        width : 18px;
    }
`;