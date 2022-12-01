import { useState } from "react";
import styled from "styled-components";

const AddComponent = ({onClick}) =>{

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    return (
        <AddBox>
            <input type={'text'} placeholder={'Title'} value={title} onInput={(e)=>{
                setTitle(e.target.value);
            }} />
            <textarea placeholder={"Text"} value={text} onInput={(e)=>{
                setText(e.target.value);
            }} />
            <button onClick={()=>{
                console.log(`title : ${title}, text : ${text}`);
                onClick(title, text);
            }}>Add Board</button>
        </AddBox>
    )
}

export default AddComponent;

const AddBox = styled.div`

`;