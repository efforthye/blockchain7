import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import store from "../../../modules/store";

// 3. onClick을 부모 컴포넌트(RegistContainer)로부터 props로 받는다.
const RegistComponent = ({ onClick }) => {

    const [userId, setId] = useState("");
    const [userPw, setPw] = useState("");
    const [userName, setName] = useState("");

    console.log("3. 등록 컴포넌트...", onClick);

    return (
        <RegistBox>
            <ModalContent>
                <h4>회원가입</h4>
                <input type={'text'} value={userId} placeholder={'아이디'} onInput={(e) => {
                    setId(e.target.value);
                }}></input>
                <input type={'password'} value={userPw} placeholder={'비밀번호'} onInput={(e) => {
                    setPw(e.target.value);
                }}></input>
                <input type={'text'} value={userName} placeholder={'이름'} onInput={(e) => {
                    setName(e.target.value);
                }}></input><br/>
                <button onClick={() => {
                    // 4. 사용자가 Regist 버튼을 클릭했을 때 부모의 onClick 함수를 호출한다.
                    // 매개변수로 userId, userPw, userName를 전달해준다.
                    console.log("4. 버튼 온클릭");

                    // onClick() : 부모한테서 props로 받아옴
                    onClick(userId, userPw, userName);

                    // <Link to={'/'}>하이</Link>
                    // <Routes>
                    //     <Route path="/board/regist" element={<RegistContainer />}></Route>
                    // </Routes>

                }}>회원가입</button>
            </ModalContent>
        </RegistBox>
    );
}
export default RegistComponent;

const RegistBox = styled.div`
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
    padding-bottom: 20px;
`;