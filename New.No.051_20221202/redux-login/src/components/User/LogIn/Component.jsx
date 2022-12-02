import { useState } from "react";
import styled from "styled-components";

const LogInComponent = ({onClick}) =>{

    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');

    return (
        <LoginBox>
            <input type={'text'} placeholder={'아이디'} value={userId} onInput={(e)=>{setUserId(e.target.value);}} />
            <input type={'password'} placeholder={'비밀번호'} value={userPw} onInput={(e)=>{setUserPw(e.target.value);}} />
            <button onClick={()=>{onClick(userId, userPw)}}>로그인</button>
        </LoginBox>
    );
}
export default LogInComponent;

const LoginBox = styled.div`
    input{
        padding : 5px;
    }
`;