// const { post } = require("../routes"); // 이놈 때문에..

// 메뉴의 width를 늘림
document.getElementById("menu-btn").onclick = function(e){
    document.getElementById("user-input-container").classList.toggle("on");
}

// async와 await는 항상 붙어 다닌다. (await 역할 : 실행될 때까지 기다린다.)
document.getElementById("board-add").onsubmit = async function(e){
    e.preventDefault();

    // 입력 값이 비어있으면 리턴
    if(!e.target["board-title"].value){
        e.target["board-title"].focus();
        return;
    }
    if(!e.target["board-text"].value){
        e.target["board-text"].focus();
        return;
    }

    try{
        // 게시판 데이터를 보냄.. 어디로? : 서버쪽으로
        const data = await axios.post("/api/board/add", {
            title : e.target["board-title"].value, // 제목
            text : e.target["board-text"].value, // 내용
            uptime : Date.now() // 시간
    
        });
        console.log(data.data); // 정상 입력 완료인지 확인
        // 게시판 데이터 초기화
        if(data.data.status == 200){
            // 여기
            e.target["board-title"].value = "";
            e.target["board-text"].value = "";
        }

        console.log("제목 : "+e.target["board-title"].value);
        console.log("내용 : "+e.target["board-text"].value);
    }catch(err){
        console.error(err);
    }

    // 바로 입력 사항을 보기 위해 함수를 재호출한다.
    getList();

}

const tempData = [
    [
        { title : "t1", text : "안녕1" },
        { title : "t2", text : "안녕2" },
        { title : "t3", text : "안녕3" },
        { title : "t4", text : "안녕4" },
        { title : "t5", text : "안녕5" },
    ],
    [
        { title : "t6", text : "안녕6" },
        { title : "t7", text : "안녕7" },
        { title : "t8", text : "안녕8" },
        { title : "t9", text : "안녕9" },
        { title : "t10", text : "안녕10" },
    ],
    [
        { title : "t11", text : "안녕" },
        { title : "t12", text : "안녕" },
        { title : "t13", text : "안녕" },
        { title : "t14", text : "안녕" },
    ]
]


let maxCount = 3; // 총 페이지 수 
let count = 0; // 현재 페이지

const listElem = document.getElementById("list");
const pageElem = document.getElementById("page");

async function getList(){
    try{
        // 서버에 요청을 보낼 때 현재 페이지도 같이 보낸다.
        // 만약 count가 0이면 /api/board?count=0
        const data = await axios.get("/api/board?count="+count);
        console.log(data.data.list);

        // 목록 및 페이지 숫자 재생성
        listElem.innerHTML = "";
        pageElem.innerHTML = "";

        // 페이지 초기화
        maxCount = data.data.maxCount;

        for(let i = 0; i<maxCount; ++i){
            const tempLi = document.createElement("li");
            tempLi.innerText = i+1;
            tempLi.onclick = function(e){
                count = i;
        
                pageElem.getElementsByClassName("now")[0].classList.remove("now");
                tempLi.classList.add("now");
        
                getList();
            }
            if(count===i){
                tempLi.classList.add("now");
            }
        
            pageElem.append(tempLi);
            // pageElem.unshift(tempLi);
        }

        // 임시 데이타에서 우리가 입력한 데이타를 돌린다.
        // tempData[count].forEach(data=>{
        data.data.list.forEach((data, index)=>{
            const tempLi = document.createElement("li");
            const tempTitle = document.createElement("div");
            const tempH3 = document.createElement("h3");
            const tempText = document.createElement("div");
            const tempImg = document.createElement("img");
            const tempP = document.createElement("p");

            // 수정
            const tempTextarea = document.createElement("textarea");
            const tempBtnBox = document.createElement("div");
            const tempDelBtn = document.createElement("img");
            const tempEditBtn = document.createElement("img");
            const tempCancelBtn = document.createElement("img");
        
            tempTitle.classList.add("title");
            tempTitle.onclick = function(e){
                tempText.classList.toggle("on");
                tempImg.classList.toggle("on");
                // 수정 취소
                tempText.classList.remove("edit");
            }
        
            tempText.classList.add("text");
            tempImg.src = "./images/angle-up-solid.svg";
            tempImg.alt = "list-item-btn";

        
            tempH3.innerText = data.title;
            tempP.innerText = data.text;

            
            // 수정, 삭제
            tempBtnBox.classList.add("list-btn-box");
            tempEditBtn.src = "./images/face-laugh-wink-regular.svg";
            tempEditBtn.alt = "edit-btn";
            tempDelBtn.src = "./images/face-tired-regular.svg";
            tempDelBtn.alt = "delete-btn";
            tempCancelBtn.src = "./images/minus-solid.svg";
            tempCancelBtn.alt = "delete-btn"; 
            tempCancelBtn.classList.add("cancel");
            tempDelBtn.classList.add("delete");

            // 수정버튼 클릭
            tempEditBtn.onclick = async function(e){
                if(tempText.classList.contains("edit")){
                    try{
                        const data = await axios.post("/api/board/update", {
                            count, 
                            num : index,
                            text : tempTextarea.value,
                            time : Date.now(),
                        });
                        getList();
                        console.log(data.data);
                    }catch(err){
                        console.log(err);
                    }
                }else{
                    tempTextarea.value = data.text;
                    tempText.classList.add("edit");
                }
            }
            // 수정취소버튼 클릭
            tempCancelBtn.onclick = async function(e){
                tempText.classList.remove("edit");

            }
            // 삭제버튼 클릭
            tempDelBtn.onclick = async function(e){
                try{
                    const data = await axios.post("/api/board/delete",{
                        count, 
                        num : index,
                    });
                    getList(); // 데이터를 새로 불러옴
                    console.log(data.data);
                }catch(err){
                    console.log(err);
                }
            }
            tempBtnBox.append(tempCancelBtn);
            tempBtnBox.append(tempEditBtn);
            tempBtnBox.append(tempDelBtn);
            tempTextarea.value = data.text;


            tempTitle.append(tempH3);
            tempTitle.append(tempImg);
            tempText.append(tempP);

            // 수정
            tempText.append(tempTextarea); 
            tempText.append(tempBtnBox);

            tempLi.append(tempTitle);
            tempLi.append(tempText);
            listElem.append(tempLi);
        });

    }catch(err){
        console.error(err);
    }
    
}

getList();


// 로그인
document.getElementById("sign-in").onclick = async function(e){
    e.preventDefault();

    const data = await axios.post("/api/user/login", {
        id : document.forms["user-info"].id.value,
        pw : document.forms["user-info"].pw.value
    });
    console.log(data.data);

    // 이름, payload 토큰을 쿠키에 추가
    // 1. 쿠키를 받아서 자름, 2. 
    // document.cookie가 뭔지
    // atob : base64인 놈을 string으로 바꿔줌
    // 객체의 name을 가져옴
    const tempName = JSON.parse(window.atob(document.cookie.split("=")[1].split(".")[1])).name;

    // 로그인 시 user-name에 로그인 정보를 띄운다.
    if(tempName){
        console.log(tempName);
        document.getElementById("user-name").innerText = 
            tempName +"님 어서오세요.";
        [...document.getElementsByClassName("btn-box")].forEach(elem=>{
            elem.classList.toggle("on");
        });
    }
}
// 로그아웃
document.getElementById("sign-out").onclick = function(e){
    e.preventDefault();

    
    document.getElementById("user-name").innerText = "";

    [...document.getElementsByClassName("btn-box")].forEach(elem=>{
        elem.classList.toggle("on");
    });
    
    [...document.getElementsByClassName("btn-box")].forEach(elem=>{
        elem.classList.toggle("on");
    });
    
}


// 회원가입
document.getElementById("sign-up").onclick = async function(e){
    e.preventDefault();
    // 여기에서 await가 필요한 이유?? : 서버에서 처리 될때까지 기다려야 하기 때문
    const data = await axios.post("/api/user/regist", {
        id : document.forms["user-info"].id.value,
        pw : document.forms["user-info"].pw.value,
        name : document.forms["user-info"].name.value
        // name : "박혜림"
    });
    console.log(data.data);
    
    // 쿠키 확인
    console.log(document.cookie);
}



// 로그인

// axios.get("/api/board").then((data)=>{
//     console.log(data); // {data: '[object Object] get으로 받았다. ~...

// });
// axios.post("/api/board/add").then((data)=>{
//     console.log(data); // {data: '[object Object] post로 받았다. ~...
// });



