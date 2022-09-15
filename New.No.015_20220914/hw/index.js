// 내용과 짝지을 템플릿을 미리 타입과 네임으로 만들어준다.
const headList = [
    { type: "number", name: "번호" },
    { type: "check", name: "확인" },
    { type: "content", name: "내용" },
    { type: "time", name: "시간" },
    { type: "delete", name: "추가/삭제" },
];

// {아이템}이 4개 들어있고, 펼치면 중괄호의 내용이 보인다.
console.log(headList);


// 제목들을 띄워준다.
// tableHeader에 th값들을 innerHTML foreach로 넣어준다.
const tableHeaderElem = document.getElementById("tableHeader");
// 값은 headList에서 가져온다.
headList.forEach(item => {
    // 각각의 항목 안에있는 name값을 가져온다.
    tableHeaderElem.innerHTML += `<th>${item.name}</th>`;
});




// forEach문을 돌려 값을 집어넣기 위해 미리 배열을 만들어 준다.
let toDoList = [];


// 내용과 시간을 배열에 넣어주는 함수를 만들어 준다.
// 함수는 반드시 바깥에 적어준다.
function createList(content, time) {
    toDoList.push({
        content,
        time
    });
}

// 내용을 입력하고 추가 버튼을 누르면
document.getElementById("addBtn").onclick = () => {

    // 내용이 들어갈 변수를 선언한다.
    // 각각의 값을 변수에 저장한다.
    let content = document.getElementById("content").value;
    let time = document.getElementById("time").value;

    // 내용과 시간의 값을 일단 가져온다. (잘 나옴)
    // console.log(document.getElementById("content").value);
    // console.log(document.getElementById("time").value);
    if (!content) {
        alert("내용을 입력해 주세요.");
        console.log("추가하려면 내용을 입력해 주세요.");
        return;
    }

    console.log(content, time);

    // 내용을 추가하는 함수를 호출해 매개변수에 값을 넣어 보내준다.
    // createList('김재일',29,'용인','ENFP','AB');
    createList(content, time);

    // 내용을 추가하기 위해 tbody 엘리먼트를 가져온다.
    const tableItemElem = document.getElementById("tableItem");

    // let index = 0;

    // 배열에 값을 집어넣는다.
    toDoList.forEach((item, index) => {
        // tbody에 넣을 임시 배열을 생성한다.
        let tempArr = '<tr>';
        console.log(tempArr);

        //headListforEach문(switch로..?)
        headList.forEach(({type}) => {
            console.log(type);
            if (type == "number") {
                // tempArr에 td를 추가해 준다.
                tempArr += `<td>${index+1}</td>`;
                console.log(tempArr);
            } else if (type == "check") {
                tempArr += `<td><input type="checkbox" class="checkbox"></td>`;
                console.log(tempArr);
            } else if (type == "content") {
                tempArr += `<td>${item[type]}</td>`;
                console.log(tempArr);
            } else if (type == "time") {
                tempArr += `<td>${item[type]}</td>`;
                console.log(tempArr);
            } else if (type == "delete") {
                // tempArr += `<td><button class="delete${index}">삭제</button></td>`;
                tempArr += `<td><button class="delete">삭제</button></td>`;
                console.log(tempArr);
            }
        });

        // tr 태그를 닫아준다.
        tempArr += '</tr>';

        // tempArr의 내용을 tbody에 넣어준다.
        tableItemElem.innerHTML += tempArr;
        // tempArr = 0;
        
        console.log(tableItemElem.innerHTML);

        // 배열을 초기화 해준다.
        toDoList = [];

    });

};




// id가 여러개라서 체크박스와 삭제버튼이 안됐던 것이다.
// 각각의 id에 번호를 주면서 추가하고 onclick을했을때 id를 제대로 찾아야한다..
// 삭제 버튼을 누르면 해당 부모의 부모 요소를 삭제시킨다.
// document.getElementById("delete").onclick = () => {
//     document.getElementById("delete").parentElement.parentElement.remove();
// };
document.getElementsByClassName("delete").onclick = () =>{
    document.getElementsByClassName("delete").parentElement.parentElement.remove();
};




// 체크박스 짝대기
const checkbox = document.getElementById("checkbox");
// console.log((checkbox.getAttribute("checked")));
// 체크박스를 클릭하면 
// document.getElementById("checkbox").onclick = () => {
//     //null이 아니면 checked이다.
//     if (!(checkbox.getAttribute("checked") == null)) {
//         // 내용의 값에 짝대기를 그어준다.
//         // 체크된놈의 부모의 다음 형제의 속성에 클래스를 붙여준다.
//         checkbox.parentElement.nextElementSibling.classList.toggle("checked");
//         // toggle("checked");
//     } else {
//         checkbox.parentElement.nextElementSibling.classList.toggle("checked");
//     }
// };

// console.log((checkbox.getAttribute("checked")));
// //체크박스를 클릭하면 
// document.getElementById("checkbox").onclick = () => {
//     //null이 아니면 checked이다.
//     if (!(checkbox.getAttribute("checked") == null)) {
//         // 내용의 값에 짝대기를 그어준다.
//         // 체크된놈의 부모의 다음 형제의 속성에 클래스를 붙여준다.
//         checkbox.parentElement.nextElementSibling.classList.toggle("checked");
//         // toggle("checked");
//     } else {
//         checkbox.parentElement.nextElementSibling.classList.toggle("checked");
//     }
// };





// document.getElementById("addBtn").onclick = () =>{

// };

// // 내용을 추가하기 위해 tbody 엘리먼트를 가져온다.
// const tableItemElem = document.getElementById("tableItem");

// // 배열에 값을 집어넣는다.
// toDoList.forEach((item, index)=>{
//     // tbody에 넣을 임시 배열을 생성한다.
//     let tempArr = '<tr>';
//     console.log(tempArr);

//     //headListforEach문(switch로..?)
//     headList.forEach((headItem)=>{
//         if(type=="number"){
//             // tempArr에 td를 추가해 준다.
//             tempArr += `<td>${index+1}</td>`;
//             console.log(tempArr);
//         }else if(type =="check"){
//             tempArr += `<td><input type="checkbox"></td>`;
//             console.log(tempArr);
//         }else if(type =="content"){
//             tempArr += `<td>${item[headItem.type]}</td>`;
//             console.log(tempArr);
//         }else if(type=="time"){
//             tempArr += `<td>${item[headItem.type]}</td>`;
//             console.log(tempArr);
//         }else if(type=="delete"){
//             tempArr += `<td><button id="delete">삭제</button></td>`;
//             console.log(tempArr);
//         }
//     });

//     // tr 태그를 닫아준다.
//     tempArr += '</tr>';

//     // tempArr의 내용을 tbody에 넣어준다.
//     tableItemElem.innerHTML += tempArr;

// });








// // studentsList라는 배열에 forEach문을 돌린다.
// studentsList.forEach((item,index)=>{
//     // 그냥 tr부터 집어넣으면 html이 인식하고 닫아버려서 변수로 만들고 필요할때 집어넣는다.
//     // studentListElem.innerHTML += '<tr>'; //이러면 세로한줄로 내용들이 쭈르륵 뜬다.
//     // 임시로 쓸 string을 초기화한다.
//     let tempStr = '<tr>';

//     // 아이템 td를 하나하나 추가해 준다. 맨위 배열의 type들을 추가해준다.
//     headList.forEach((headitem)=>{
//         // 아이템의 타입은 항상 string이기 때문에 number이 차례차례 걸리면 순서를 th에 출력한다.
//         if(headitem.type === "number"){
//             tempStr += `<th>${index+1}</th>`;
//         }else{
//             // 아이템 각각의 타입을 가져와 td에 넣고 tempStr에 추가해준다.
//             tempStr += `<td>${item[headitem.type]}</td>`;
//         }
//     });
//     tempStr += '</tr>';
//     console.log(tempStr);

//     // 마지막으로 완성된 놈을 tbody 안에 넣어준다.
//     studentListElem.innerHTML += tempStr;
// });






//
// const tableItem = document.getElementById("tableItem");
// // 값을 tbody(#tableItem)의 맨 뒤에다 새로운 tr td를 추가해 준다.
// tableItem.innerHTML += ``;

// 삭제 버튼을 누르면
// 해당 부모 요소를 삭제시킨다.
// 수정 버튼은 나중에 추가..








// const list = document.getElementById("list");

// console.log("hi");

// // 추가 버튼을 누르면 #content의 내용을 가져와 이너html에 추가해준다.
// // css

// let add = document.getElementById("add");
// console.log(add);

// // document.getElementById("btn").onclick = () =>{
// //     // #btn이라는 버튼 클릭 시 실행된다.
// //     console.log(document.getElementById("BTS").value);
// //     // #BTS에 입력된 값을 로그로 출력한다.
// //     document.getElementById("btn").style.backgroundColor = "#ff0000";
// //     // #btn의 배경색을 빨간 색으로 바꾼다.
// // }

// document.getElementById("add").onclick = () =>{
//     console.log(document.getElementById("content").value);
//     // document.style.color="#ff0000";