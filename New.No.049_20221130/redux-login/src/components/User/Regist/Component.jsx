import { useState } from "react";
import styled from "styled-components";
import store from "../../../modules/store";

const RegistComponent = ({onClick}) => {

    const [userId, setId] = useState("");
    const [userPw, setPw] = useState("");
    const [userName, setName] = useState("");

    console.log("---등록 컴포넌트---", onClick);

    return (
        <RegistBox>
            <input type={'text'} value={userId} placeholder={'아이디'} onInput={(e)=>{
                setId(e.target.value);
            }}></input>
            <input type={'password'} value={userPw} placeholder={'비밀번호'} onInput={(e)=>{
                setPw(e.target.value);
            }}></input>
            <input type={'text'} value={userName} placeholder={'이름'} onInput={(e)=>{
                setName(e.target.value);
            }}></input>
            <button onClick={()=>{
                console.log("버튼 온클릭");

                // onClick() : 부모한테서 props로 받아옴
                onClick(userId, userPw, userName);
            }}>회원가입</button>
        </RegistBox>
    );
}
export default RegistComponent;

const RegistBox = styled.div`
    input{
        padding : 5px;
    }
`;