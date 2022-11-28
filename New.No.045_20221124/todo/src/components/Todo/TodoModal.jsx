import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { TodoBtn } from '../setting';

import { STATUSLIST, STATUS } from '../setting';

// Todo/index.jsx 에서 ~~~를 위해 받아옴
export default function TodoModal({ setList, func }) {

    // 입력/수정할때 필요, state.index로 접근하기 위해 Todo/Item.jsx에서 state를 객체로 보냈었음
    // Todo/Item.jsx에서 state에 index와 item이 있을 수 있었던 이유는 
    // 이미 작성된 투두리스트의 값은 Todo/List/List.jsx로 가는데,
    // 거기에서 이미 입력되어 있는 값(할일, 번호 등등)을 읽어와
    // item의 taskName을 띄우거나 index번호를 띄우는 데 사용하였기 때문이다.
    // useLocation() 메서드는 현재 라우터 주소를 가져올 때 사용하는 것인데, 
    // 이렇게 현재주소 뒤에 .을 붙여 현재 주소의 저장된 state값을 읽어 가져오고 싶은 값을 가져올 수 있다.
    // state는 언제 저장했냐면, Todo/Item.jsx에서 Link to를 사용해 수정버튼 클릭시 edit 라우터로 보낼 때 
    // Todo/index.jsx에 설정된 edit라우터인(func을 Edit으로 보내 구분하였음) 
    // TodoModal.jsx에게 state의 값을 객체로 보내주었기 때문에 
    // state의 값이 현재 컴포넌트에 저장된 것이며, 객체로 index와 item(할일)을
    // 보내 주었기 때문에 여기서도 값을 가져올 수 있는 것이다.
    // 그럼 이제 아래에서도 입력/수정시에 가져와서 사용 가능하다.
    // 만약 편집 버튼을 클릭했다면 위처럼 state에 값들을 보내줘서 값이 있을 것이고, 아니면 없을 것이다.
    const index = useLocation().state?.index;
    const item = useLocation().state?.item;

    // 수정사항이 이미 들어있도록 함 만약 없으면 빈값 혹은 기본값(오~~) ㄴㄴㄴ
    // 기존값이 없으면(추가버튼클릭) 처음만드는설정, 이미 있으면 수정창띄우기임
    // 위에서 가져온 아이템(편집하려고클릭한투두리스트내용)의 값이 있으면 해당 값을 띄운다
    // 없으면(null혹은 undifined) 편집이 아니기 때문에 비운 상태인 값을 띄워준다.(첫입력)
    // status(현재상태)도 마찬가지로 값을 저장하고, 수정시 변경할 수 있도록 useState()를 사용해준다.
    const [taskName, setTaskName] = useState(item?item.taskName:""); 
    const [status, setStatus] = useState(item?item.status:STATUS.ToDo);

    return (
        // TodoModalBox : 모달창의 배경을 전체적으로 불투명하게 띄우기 위한 div
        <TodoModalBox>
            {/* TodoModalInnerBox : 모달창 자체의 css가 담긴 div */}
            <TodoModalInnerBox>
                <div>
                    <input
                        type="text"
                        placeholder='Task Name'
                        // value={taskName} : 현재 할 일을 띄워준다.(데이터 동기화)
                        // 넣어줘야 나중에 아래처럼 예외처리도 가능하다고함(중요)
                        value={taskName} 
                        onInput={(e) => {
                            // 인풋의 값을 30자까지만 입력할 수 있게 처리하였다.
                            setTaskName(e.target.value.slice(0, 30));
                        }}
                    ></input>
                </div>
                <div>
                    {/* 모달창에서 상태 버튼 클릭시 on클래스를 붙인다. */}
                    {/* setting.jsx에서 export해주었던 현재 상태가 담긴 배열인 STATUSLIST를 가져와서 */}
                    {/* 버튼에 상태들을 나열해 쭈르륵 띄우기 위해 각각을 map으로 돌려주었다. */}
                    {STATUSLIST.map((statusItem, index) => (
                        // Item에서 className 복붙해와서 STATUSLIST[index]로 바꿈
                        <TodoBtn
                            // 클래스 이름은 해당 리스트를 소문자로 바꾸고 빈공백을 없애 -를 넣어준 값으로 하였다
                            // 왜냐면 setting.jsx에서 클래스 변경시 적용될 코드의 클래스 이름을(todo, in-progress, complete)으로 하였기 때문..
                            className={STATUSLIST[index].toLowerCase().replace(" ", "-")
                            // 그리고 만약 status(클릭한 현재 상태가 map돌릴 떄 해당 인덱스와 마주치면 on클래스를 추가로 적어 css를 적용해 준다.)
                            // on 앞을 띄운 이유는 클래스를 여러개 적용해주기 위해서이다.
                                + (status === index ? " on" : "")
                            } onClick={() => {
                                // 모달창의 해당 상태 버튼을 클릭시 상태를 index로 
                                setStatus(index);
                            }}
                            key={`TodoBtn-${index}`}
                        >
                            {statusItem}
                        </TodoBtn>
                    ))}
                </div>
                <div>
                    {/* 만약 입력/편집 완료 버튼을 누르면 Link를 통해 root로 이동시킨다. */}
                    {/* Link는 react-router-dom 라이브러리를 통해 import해 가져와 사용했다. */}
                    <Link to={"/"}>
                        {/* 추가일 땐 Add, 편집일 땐 Edit으로 처리해야 함 */}
                        {/* 추가 버튼 클릭 */}
                        <TodoBtn onClick={() => {
                            // 만약 Todo/index.jsx에서 받아온 func의 라우터 값이 Add이면
                            // 인풋의 값과 선택한 값을 투두리스트 배열에 추가해준다.
                            if (func === "Add") {
                                setList((state) => [...state, { taskName, status }]);
                            // 만약 라우터 값이 Edit(편집)이라면
                            } else if (func === "Edit") {
                                // 투두 리스트를 바꿔준다.
                                setList((list, index) => {
                                    // 0부터 현재 값까지 자르고, 현재 값+1부터 끝까지 자르면
                                    // 자기 자신만 빼고 나머지를 잘라낸 것이 되는데,
                                    // 유저가 입력한 값인 taskName과 상태를 가져와 
                                    // 중앙에 추가하고 나머지 사이에 현재 입력한 값을 끼워넣어 수정해 준다.
                                    // taskName과 status는 위(편집클릭시보내준값)에서 가져왔다.
                                    const before = list.slice(0, index);
                                    const after = list.slice(index + 1);
                                    // 수정 사항을 새로 추가해 준다.!!!!(오호~~)
                                    return [...before, {taskName, status}, ...after];
                                });
                            }
                        // 모달창의 입력완료 버튼은 편집이냐, 첫 입력이냐에 따라서 달라지기 때문에
                        // Todo/index.jsx에서 받아온 라우터(입력/수정) 값인 func를 가져와서 띄워준다.
                        }}>{func}</TodoBtn>
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