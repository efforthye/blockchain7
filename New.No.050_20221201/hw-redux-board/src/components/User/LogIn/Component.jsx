import { useState } from "react";
import styled from "styled-components";

const LogInComponent = ({ onClick }) => {

    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');

    return (
        <LoginBox>
            <ModalContent>
                <div>로그인</div>
                <input type={'text'} placeholder={'아이디'} value={userId} onInput={(e) => { setUserId(e.target.value); }} /><br/>
                <input type={'password'} placeholder={'비밀번호'} value={userPw} onInput={(e) => { setUserPw(e.target.value); }} /><br/>
                <button onClick={() => { onClick(userId, userPw) }}>로그인</button>
            </ModalContent>
        </LoginBox>
    );
}
export default LogInComponent;

const LoginBox = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(000,000,000,0.4);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(1.5px);
    -webkit-backdrop-filter: blur(1.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    input{
        padding : 5px;
    }
`;
const ModalContent = styled.div`
    border-radius: 5px;
    background-color: rgb(245,245,245);
    width: 300px;
    text-align : center;
    padding: 20px 0;
`;