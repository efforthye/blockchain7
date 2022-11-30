import { useState } from "react";

// 매개변수 받아오는 부분 수정
const Login = ({user, login}) =>{
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");

    return (
        <div>
            {/* 로그인에 필요한 html 적어주기 */}
            <h4>로그인</h4>
            <input type={'text'} placeholder={'아이디'} value={inputId} onInput={(e)=>{
                setInputId(e.target.value);
            }}></input><br/>
            <input type={'password'} placeholder={'비밀번호'} value={inputPw} onInput={(e)=>{
                setInputPw(e.target.value);
            }}></input><br/>

            <button onClick={()=>{
                login(inputId, inputPw);
                // store.dispatch({type : 'user/regist', payload : {name : inputName, id : inputId, pw : inputPw}});
                console.log(`id : ${inputId}, pw : ${inputPw}`);
            }}>로그인</button>

            <button onClick={()=>{
                console.log(user);
            }}>회원 확인</button>

        </div>
    );
}

export default Login;