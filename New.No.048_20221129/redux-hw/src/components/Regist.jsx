import { useState } from "react";
import store from "../store";

// const Regist = () =>{
const Regist = ({user, regist}) =>{
    const [inputName, setInputName] = useState("");
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");

    return (
        <div>
            {/* 회원가입에 필요한 html 적어주기 */}
            <h4>회원가입</h4>
            <input type={'text'} placeholder={'이름'} value={inputName} onInput={(e)=>{
                setInputName(e.target.value);
            }}></input><br/>
            <input type={'text'} placeholder={'아이디'} value={inputId} onInput={(e)=>{
                setInputId(e.target.value);
            }}></input><br/>
            <input type={'password'} placeholder={'비밀번호'} value={inputPw} onInput={(e)=>{
                setInputPw(e.target.value);
            }}></input><br/>

            <button onClick={()=>{
                regist(inputName, inputId, inputPw);
                // store.dispatch({type : 'user/regist', payload : {name : inputName, id : inputId, pw : inputPw}});
                console.log(`name : ${inputName}, id : ${inputId}, pw : ${inputPw}`);
            }}>가입</button>

            <button onClick={()=>{
                console.log(user);
            }}>회원 확인</button>
        </div>
    );
}

export default Regist;