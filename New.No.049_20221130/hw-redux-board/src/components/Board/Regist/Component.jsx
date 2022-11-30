import { useState } from "react";

const RegistComponent = ({onClick}) =>{

    const [title, setTitle] = useState("");
    const [context, setContext] = useState("");

    return (
        <div>
            <input type={'text'} placeholder={'제목'} value={title} onInput={(e)=>{
                setTitle(e.target.value);
            }} />
            <input type={'text'} placeholder={'내용'} value={context} onInput={(e)=>{
                setContext(e.target.value);
            }} />
            {/* 현재시간(등록일), 조회수, 추천수, 게시판번호는 ? 일단 컨테이너에 작성했음...*/}
            <button onClick={()=>{
                // 값보내기
                onClick(title, context);
            }}>등록</button>
        </div>
    );
}

export default RegistComponent;