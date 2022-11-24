import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TodoBtn } from '../setting';

export default function TodoModal() {
    return (
        <TodoModalBox>
            <TodoModalInnerBox>
                <div>
                    <input type="text" placeholder='Task Name'></input>
                </div>
                <div>
                    <TodoBtn className='todo on'>Todo</TodoBtn>
                    <TodoBtn className='in-progress'>In Progress</TodoBtn>
                    <TodoBtn className='complete'>Complete</TodoBtn>
                </div>
                <div>
                    <Link to={"/"}>
                        {/* 추가일 땐 Add, 편집일 땐 Edit으로 처리해야 함 */}
                        <TodoBtn>Add</TodoBtn>
                    </Link>
                    <Link to={"/"}>
                        <TodoBtn>Cancel</TodoBtn>
                    </Link>
                </div>
            </TodoModalInnerBox>
        </TodoModalBox>
    );
}

const TodoModalBox = styled.div`
    width : 100vw;
    height : 100vh;
    background-color : rgba(0,0,0,0.5);
    position : fixed;
    left : 0; top : 0;
    display : flex;
    justify-content : center;
    align-items : center;
`;

const TodoModalInnerBox = styled.div`
    // width : 100px;
    // height : 100px;
    background-color : #fff;
    border-radius : 10px;
    padding : 20px;
    width : 50%;

    input{
        width : 100%;
        padding : 5px 10px;
    }


    // 이건 뭐지? : 어제 배운 거에서 찾아보기
    // & : 현재위치
    & > div{
        margin : 10px 0;
        display : flex;
        justify-content : space-evenly;
        &:last-child{
            justify-content : space-between;
        }
    }
`;