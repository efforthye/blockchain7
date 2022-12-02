import { useState } from "react";
import styled from "styled-components";
import store from "../../../modules/store";

// 3. onClick을 부모 컴포넌트(RegistContainer)로부터 props로 받는다.
const RegistComponent = ({onClick}) => {

    const [userId, setId] = useState("");
    const [userPw, setPw] = useState("");
    const [userName, setName] = useState("");

    console.log("3. 등록 컴포넌트...", onClick);

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
                // 4. 사용자가 Regist 버튼을 클릭했을 때 부모의 onClick 함수를 호출한다.
                // 매개변수로 userId, userPw, userName를 전달해준다.
                console.log("4. 버튼 온클릭");

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