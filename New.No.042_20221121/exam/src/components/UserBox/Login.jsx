import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Login({ users, setUser }) {

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


    // 로그인 함수
    function onLogin(){
        const tempUser = users.find((item) => item.userId === userId);
        if(tempUser && tempUser.userPw === userPw) setUser(tempUser.userId);
    }


    return (
        <LoginBox>
            <input placeholder="ID" type="text" onInput={(e) => {
                setId(e.target.value);
            }} />
            {/* <input placeholder="PW" type="password" value={userPw} onInput={(e)=>{ */}
            <input placeholder="PW" type="password" value={userPw} onInput={(e) => {
                setPw(e.target.value);

            }} />
            <button onClick={() => {
                // 만약 둘다 true가 아니면 리턴
                if (!(ableId && ablePw)) {
                    onLogin();
                    // return;
                }
                // console.log(userId, userPw);
            }}>로그인</button>
        </LoginBox>
    );
}

const LoginBox = styled.div``;
