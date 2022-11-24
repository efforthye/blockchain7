import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TodoBtn } from '../setting';

import { STATUSLIST, STATUS } from '../setting';

export default function TodoModal({setList}) {

    const [taskName, setTaskName] = useState("");
    const [status, setStatus] = useState(STATUS.ToDo);

    return (
        <TodoModalBox>
            <TodoModalInnerBox>
                <div>
                    <input
                        type="text"
                        placeholder='Task Name'
                        value={taskName} //데이터 동기화, 넣어줘야 나중에 예외처리도 가능하다고함(중요)
                        onInput={(e) => {
                            setTaskName(e.target.value.slice(0, 30));
                        }}
                    >

                    </input>
                </div>
                <div>
                    {/* 모달창 버튼 클릭시 on클래스를 붙인다. */}
                    {STATUSLIST.map((item, index) => (
                        // Item에서 className 복붙해와서 STATUSLIST[index]로 바꿈
                        <TodoBtn
                            className={STATUSLIST[index].toLowerCase().replace(" ", "-")
                                + (status === index ? " on" : "")
                            } onClick={() => {
                                setStatus(index);
                            }}
                            key={`TodoBtn-${index}`}
                        >
                            {item}
                        </TodoBtn>
                    ))}
                </div>
                <div>
                    <Link to={"/"}>
                        {/* 추가일 땐 Add, 편집일 땐 Edit으로 처리해야 함 */}
                        {/* 추가 버튼 클릭 */}
                        <TodoBtn onClick={()=>{
                            setList((state)=>[...state, {taskName, status}]);
                        }}>Add</TodoBtn>
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