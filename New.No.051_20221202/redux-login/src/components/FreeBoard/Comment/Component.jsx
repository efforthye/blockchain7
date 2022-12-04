/* eslint-disable eqeqeq */
import { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const CommentComponent = ({ add, list, edit, remove }) => {

    const [addText, setAddText] = useState("");

    return (
        <CommentBox>
            <CommentAddBox>
                <input type={"text"} value={addText} placeholder={"Comment"} onInput={(e) => {
                    setAddText(e.target.value);
                }} />
                <button onClick={() => {
                    add(addText);
                }}>Add Comment</button>
            </CommentAddBox>
            {list.map((comment, idx) => (
                // 파일을 나누지 않고 아래에 새로운 컴포넌트를 만들었다.
                <CommentItemComponent
                    key={`comment-${idx}`}
                    comment={comment}
                    edit={edit}
                    remove={remove}
                />
            ))}
        </CommentBox>
    );
}

export default CommentComponent;


const CommentBox = styled.div`

`;

const CommentAddBox = styled.div`

`;


const CommentItemComponent = ({ comment, edit, remove }) => {

    // 현재가 수정 상태인지 아닌지(true : 수정 가능, false : 수정 불가)
    const [isEdit, setIsEdit] = useState(false);
    // 수정할 텍스트
    const [editText, setEditText] = useState(comment.text);

    // 댓글 작성 유저 아이디
    const commentUser = comment.userId;
    // 로그인 유저 아이디
    const loginUser = useSelector((state) => state.userInfo.userId);

    // 로그인 유저와 댓글 유저 같은지 여부
    const isCommentUser = commentUser == loginUser;

    return (
        <div>

            {/* 댓글 */}
            {comment.userName} -- {" "}
            {
                // 편집 상태인지 확인해 인풋을 띄운다.
                isEdit ? (
                    <input type={"text"} value={editText} onInput={(e) => {
                        setEditText(e.target.value);
                    }} />
                ) : (
                    comment.text
                )
            }{" "}


            {/* 댓글 단 유저만 편집/삭제 버튼을 보이게 한다. */}
            {
                isCommentUser ? (
                    <>
                        [
                        <button onClick={() => {
                            if (isEdit) {
                                edit(comment.id, editText);
                                setIsEdit(false);
                            } else {
                                setIsEdit(true);
                                setEditText(comment.text);
                            }
                        }}>
                            Edit
                        </button>
                        <button button onClick={() => {
                            isEdit ? setIsEdit(false) : remove(comment.id)
                        }}>
                            {isEdit ? "Cancel" : "Remove"}
                        </button >


                        {/* 아래 대괄호는 그냥 편집/삭제를 감싼 텍스트임 */}
                        ]</>
                ) : <></>
            }

        </div >
    );
}

