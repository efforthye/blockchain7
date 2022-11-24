import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TodoBtn } from '../../setting';
// List폴더 안에 이미지 들어있음
// 만약 svg이면 svg filter color검색해보기
// 이미지에 그대로 넣어주면 아이콘 색상 바꿀 수 있음
import penImg from './edit4.png';
import removeImg from './remove.png';

export default function Item() {
    return (<ItemTr>
        <td>1</td>
        <td>1</td>
        <td>
            <TodoBtn className='todo' style={{ cursor: "default" }}>Todo</TodoBtn>
        </td>
        <td>
            {/* 수정은 수정할 창이 필요하기 때문에 삭제와 다르게 라우터로 보내준다. */}
            <Link to={"/edit"}>
                <TodoBtn className='todo'><img src={penImg} alt="penImg"></img></TodoBtn>
            </Link>
        </td>
        <td><TodoBtn className='todo'><img src={removeImg} alt="removeImg"></img></TodoBtn></td>
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