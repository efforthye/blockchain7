import { useEffect, useState } from 'react';
import styled from 'styled-components';
import TodoImg from '../images/todo.png';
import List from './List';

export default function TodolistBox() {

    const [num, setNum] = useState(0);
    const [arr, setArr] = useState([
        { task: '할일1', state: '아직1' },
        { task: '할일2', state: '아직2' },
    ]);
    const [tempArr, setTempArr] = useState({ task: '', state: '' });

    // 인풋의 네임 값을 가져와 새로 저장해주는 함수
    const getValue = e => {
        const { name, value } = e.target;
        setTempArr({
            ...tempArr,
            [name]: value,
            state: "아직",
            number : num
        });
        console.log(tempArr);
        // console.log({ task, value });
    }
    useEffect(()=>{
        // console.log(user);
    }, [num]);

    return (
        <AllWrapStyle>
            <TitleImg><img src={TodoImg} alt="짱구 이미지" /></TitleImg>
            <TitleStyle>To Do List</TitleStyle>
            <input placeholder='내용' id='task' name='task' onChange={getValue}></input>
            <button onClick={() => {
                setNum(num+1);
                setArr([...arr, tempArr]);
            }}>추가</button>
            <List list={arr} />
        </AllWrapStyle>
    );
}

const AllWrapStyle = styled.div`
    margin : 50px auto;
    min-height : 520px;
    max-width : 460px;
    box-shadow: 1px 2px 3px 4px rgba(12,12,12,0.2);
    border-radius : 10px;
    padding : 20px;

    // input{
    //     height : 80px;
    //     background-color : #779101;
    //     border-radius : 15px;
    //     border : none;
    //     padding : 10px;
    //     box-sizing : border-box;
    // }
    // input::placeholder{
    //     color : black;
    // }
    // button{
    //     background-color : #D1884F;
    //     border : none;
    //     cursor : pointer;
    // }
`;

const TitleImg = styled.div`
    background-repeat : no-repeat;
    background-size : contain;
    height : 240px;

    img{
        margin-top : 24px;
    }


`;

const TitleStyle = styled.div`
    font-weight : 700;
    font-size : 18px;
    padding : 5px 0 20px 0;
`;