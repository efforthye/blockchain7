import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Regist({users, setUsers}) {

    const [userId, setId] = useState('');
    const [userPw, setPw] = useState('');

    const [ableId, setAbleId] = useState(false);
    const [ablePw, setAblePw] = useState(false);

    // userId 변경 감지
    useEffect(() => {
        // console.log(userId);

        // 아이디를 변경시킨다. a~z, A~Z까지만 입력 가능하도록 한다.
        setId(userId.length ? userId.match(/[a-z]/gi)?.join("") : "");

        // id 길이에 대한 예외처리
        if (userId[userId.length >= 5]) {
            setAbleId(true);
        } else {
            setAbleId(false);
        }

    }, [userId]);

    // userPw 변경 감지
    useEffect(() => {
        // console.log(userPw);

        // pw 길이에 대한 예외처리
        if (userPw[userPw.length <= 15]) {
            setAblePw(true);
        } else {
            setAblePw(false);
        }

    }, [userPw]);


    function onRegist(){
        // 유저 아이디가 이미 있으면 리턴, 없으면 유저스 배열에 추가
        if(users.find(item => item.userId === userId)) return;

        // 배열 추가 방법 1. 유저스의 배열에 아이디 비번 추가함
        setUsers([...users, {userId, userPw}]);

        // 배열 추가 방법 2. 조금 어려운 방식? 일단 알아는 놓기
        // setUsers(state =>([...state, {userId, userPw}]));

        // 배열 추가 방법 3. 적용은 되나 절대 권장하지 않는 방식이라고 함. 이유 : 배열이 어쩌고
        // users.push({userId, userPw});
        // setUsers(users);
    }



    return (
        <RegistBox>

            {/* value 있고 없고의 차이 : 있으면 숫자는 써지고 콘솔엔 사라지는데, 없으면 입력할 때 에러가 나게 된다. DOM에도 보여지도록 하기 위해 value를 설정 ?*/}
            {/* <input placeholder="ID" type="text" value={userId} onInput={(e)=>{ */}
            <input placeholder="영문 5글자 이상 아이디" type="text" onInput={(e) => {
                setId(e.target.value);
            }} />
            {/* <input placeholder="PW" type="password" value={userPw} onInput={(e)=>{ */}
            <input placeholder="영문 15글자 이하 비밀번호" type="password" value={userPw} onInput={(e) => {
                setPw(e.target.value);

            }} />
            <button onClick={() => {
                // 만약 둘다 true가 아니면 리턴
                if (!(ableId && ablePw)) {
                    onRegist();
                    // return;
                }
                // console.log(userId, userPw);
            }}>가입</button>
        </RegistBox>
    );
}

const RegistBox = styled.div``;