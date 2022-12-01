import { useState } from "react";
import styled from "styled-components";

const EditComponent = ({onClick, board}) => {

    // 초기값을 넣어준다. (board : 상위 컴포넌트에서 useSelector으로 해당 보드를 찾아왔음)
    const [title, setTitle] = useState(board.title);
    const [text, setText] = useState(board.text);

    return (
        <EditBox>
            <h1>
                <input type={"text"} placeholder={"Title"} value={title} onInput={(e) => {
                    setTitle(e.target.value);
                }} />
            </h1>
            <h3>userName : {board.userName} - {board.createdAt}</h3>
            <p>
                <textarea type={"text"} placeholder={"Text"} value={text} onInput={(e) => {
                    setText(e.target.value);
                }} />
            </p>
            {/* 컨테이너의 onClick에 편집할 값들을 전달 */}
            <button onClick={()=>{onClick(title, text)}}>편집</button>
        </EditBox>
    )
}

export default EditComponent;

const EditBox = styled.div`

`;