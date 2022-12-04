import { useState } from "react";
import styled from "styled-components";

const RegistComponent = ({ onClick }) => {

    const [title, setTitle] = useState("");
    const [context, setContext] = useState("");

    return (
        <RegistBox>
            <ModalContent>
                <div>게시글 등록</div>
                <input type={'text'} placeholder={'제목'} value={title} onInput={(e) => {
                    setTitle(e.target.value);
                }} />
                <textarea type={'text'} placeholder={'내용'} value={context} onInput={(e) => {
                    setContext(e.target.value);
                }} /><br/>
                {/* 현재시간(등록일), 조회수, 추천수, 게시판번호는 ? 일단 컨테이너에 작성했음...*/}
                <button onClick={() => {
                    // 값보내기
                    onClick(title, context);
                }}>등록</button>
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
        width: 200px;
    }
    textarea{
        width: 200px;
        height: 160px;
        padding: 5px;
    }
`;
const ModalContent = styled.div`
    border-radius: 5px;
    background-color: rgb(245,245,245);
    width: 300px;
    text-align : center;
    padding: 20px 0;
`;