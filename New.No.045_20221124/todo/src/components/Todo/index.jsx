import styled from 'styled-components';
import { Link, Route, Routes } from 'react-router-dom';
// import { TodoBtn } from "./components/setting"; // 주소를 바꿔줘야 함
// export시 default를 쓰지 않으면 {}를 사용해 구조분해할당 형식으로 가져와야 한다.
import { TodoBtn } from '../setting'; // 자동으로 생성시킴
import List from './List/List'; //(중요)
import TodoModal from './TodoModal';
import { useState } from 'react';

export default function Todo() {
    const [list, setList] = useState([
        {taskName : "공부하기", status : 1},
        {taskName : "놀기", status : 0},
        {taskName : "일요일 미사 할리스", status : 0},
    ]);

    return (
        <div>
            <h1>Todo List</h1>
            {/* TodoModalBtnBox : 가운데 정렬된 div */}
            <TodoModalBtnBox>
                {/* TodoBtn(setting.jsx에서 가져온 스타일 적용 가능한 div)을 클릭하면 */}
                {/* Link to를 통해 /add 라우터로 이동함  */}
                <Link to={"add"}>
                    <TodoBtn className='sky'>Add Task</TodoBtn>
                </Link>
            </TodoModalBtnBox>
            <List list={list} setList={setList}></List>
            <Routes>
                {/* /add 라우터와 /edit 라우터를 설정해줌 */}
                {/* 라우터의 값으로 TodoModal(TodoModal.jsx파일 불러옴)을 설정해줌 */}
                {/* 추가인지 편집인지 구분하기 위해 TodoModal 컴포넌트에 setList와 func의 값을 함께 보내줌 */}
                <Route path={'add'} element={<TodoModal setList={setList} func={"Add"}/>}/>
                <Route path={'edit'} element={<TodoModal setList={setList} func={"Edit"}/>}/>
            </Routes>
        </div>
    );
}

const TodoModalBtnBox = styled.div`
  text-align : right;
`;