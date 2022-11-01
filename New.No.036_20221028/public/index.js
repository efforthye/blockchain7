// 게시글 목록
async function getList(){
    try{
        // routes/board.js
        const result = (await axios.get("/api/board")).data;

        boardList.innerHTML = "";

        console.log(`result : ${result}`);

        result?.list?.forEach(item =>{
            // 게시글 리스트
            const boardItem = document.createElement("div");
            const boardTitle = document.createElement("div");
            const boardText = document.createElement("div");
            const boardBtnBox = document.createElement("div");
            const boardUpdate = document.createElement("button");
            const boardDelete = document.createElement("button");
            // 댓글 폼 form은 앞에다 form을 붙여줌
            const formCommentAdd = document.createElement("form");
            const formCommentText = document.createElement("input");
            const formCommentAddBtn = document.createElement("button");
            // 댓글 리스트
            const commentList = document.createElement("div");
            const commentText = document.createElement("div");
            const commentBtnBox = document.createElement("div");
            const commentUpdate = document.createElement("button");
            const commentDelete = document.createElement("button");

            // html 구조대로 추가
            boardList.append(boardItem); 

            boardItem.append(boardTitle);
            boardItem.append(boardText);
            boardItem.append(boardBtnBox);
            boardItem.append(formCommentAdd);
            boardItem.append(commentList);

            boardBtnBox.append(boardUpdate);
            boardBtnBox.append(boardDelete);

            formCommentAdd.append(formCommentText);
            formCommentAdd.append(formCommentAddBtn);

            commentList.append(commentText);
            commentList.append(commentBtnBox);

            commentBtnBox.append(commentUpdate);
            commentBtnBox.append(commentDelete);

            // boardList.innerHTML = item.title;

            boardTitle.innerText = item.title;
            boardText.innerText = item.text;

            boardUpdate.innerText = "Update";
            boardDelete.innerText = "Delete";

            // 수정
            boardUpdate.onclick = async function(){
                try{
                    // put이다. (routes/board.js에서 put으로 보냈기 때문)
                    await axios.put("/api/board/update",{
                        id : item.id,
                        text : item.text + "update/"
                    });
                    getList();
                }catch(error){
                    console.log(error);
                }
            }

            // 삭제
            boardDelete.onclick = async function(){
                try{
                    await axios.delete("/api/board/delete?id="+item.id);
                    getList();
                }catch(error){
                    console.log(error);
                }
            }

        });
    }catch(error){
        console.error(error.response.data.message);

    }
}
getList();



// 회원가입
document.forms["sign-up"].onsubmit = async function(e){
    console.log("하이");
    e.preventDefault();

    if(
        !e.target["user-id"].value||
        !e.target["user-pw"].value||
        !e.target["user-name"].value||
        !e.target["user-class"].value
    ) return;
    
    try{
        const result = await axios.post("/api/user/regist", {
            id : e.target["user-id"].value,
            pw : e.target["user-pw"].value,
            // pw : crypto.SHA256(e.target["user-pw"].value).toString(), ㄴㄴ 암호화는 서버에서
            name : e.target["user-name"].value,
            className : e.target["user-class"].value,
        })
        if(result.status !== 200) alert("회원가입 오류");
    } catch(error){
        // console.error(error);
        console.error(error.response.data.message);
    }
}

// 로그인
document.forms["sign-in"].onsubmit = async function(e){
    e.preventDefault();
    if(
        !e.target["user-id"].value||
        !e.target["user-pw"].value
    ) return;

    try{
        await axios.post("/api/user/login", {
            id : e.target["user-id"].value,
            pw : e.target["user-pw"].value
        });
        getList();
    }catch(error){
        // console.error(error);
        console.error(error.response.data.message);

    }



}

// 로그아웃
document.getElementById("sign-out-btn").onclick = async function(e){
    // e.preventDefault();

    try{
        await axios.get("/api/user/logout");
        getList();
    }catch(error){
        console.error(error.response.data.message);
    }

}


const boardList = document.getElementById("board-list");



// 게시글 추가
document.forms["board-add"].onsubmit = async function(e){
    e.preventDefault();

    console.log(e.target["board-title"].value);
    console.log(e.target["board-text"].value);

    if(
        !e.target["board-title"].value||
        !e.target["board-text"].value
    ) return;

    try{
        await axios.post("/api/board/add", {
            title : e.target["board-title"].value,
            text : e.target["board-text"].value
        });
        getList();
    }catch(error){
        console.error(error.response.data.message);

    }


}