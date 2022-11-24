import styled from 'styled-components';
import { Link, Route, Routes } from 'react-router-dom';
// import { TodoBtn } from "./components/setting"; // 주소를 바꿔줘야 함
// export시 default를 쓰지 않으면 {}를 사용해 구조분해할당 형식으로 가져와야 한다.
import { TodoBtn } from '../setting'; // 자동으로 생성시킴
import List from './List/List'; //(중요)
import TodoModal from './TodoModal';
import { useState } from 'react';

export default function Todo() {

    const [list, setList] = useState([]);


    return (
        <div>
            <h1>Todo List</h1>
            <TodoModalBtnBox>
                <Link to={"add"}>
                    <TodoBtn className='sky'>Add Task</TodoBtn>

                </Link>
            </TodoModalBtnBox>
            <List list={list}>

            </List>
            <Routes>
                <Route path={'add'} element={<TodoModal/>}/>
                <Route path={'edit'} element={<TodoModal/>}/>
            </Routes>
        </div>
    );
}

const TodoModalBtnBox = styled.div`
  text-align : right;
`;