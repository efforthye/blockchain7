import { useState } from "react";
import styled from "styled-components";

const CommentComponent = ({onClick}) =>{

    const [addText, setAddText] = useState("");

    return (
        <CommentBox>
            <CommentAddBox>
                <input type={"text"} value={addText} placeholder={"Comment"} onInput={(e)=>{
                    setAddText(e.target.value);
                }} />
                <button onClick={()=>{
                    onClick();
                }}>Add Comment</button>
            </CommentAddBox>
        </CommentBox>
    );
}

export default CommentComponent;


const CommentBox = styled.div`

`;

const CommentAddBox = styled.div`

`;