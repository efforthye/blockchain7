// 내용을 추가할 ul을 가져와 준다
// const로 list를 초기화한 이유 : 메서드(함수)를 호출할 때마다
// 자바스크립트는 해당 코드를 실행하기 때문에 실행을 최소화하기 위해서
// 변수에 반환값을 정의하여 이후 다시 찾지 않고 바로 쓸 수 있도록 한다.
const list = document.getElementById("todoList");

// 삭제를 위한 함수
function deleteItem(num){
    // 리스트(ul)의 자식 번째(num)에 delete클래스를 추가하여 짝대기를 긋는다.
    list.children[num].classList.add("delete");
}

// 추가 버튼을 누르면
document.getElementById("todoAdd").onclick = () =>{

    // 입력된 값을 확인하기 위해 엘리먼트(텍스트입력인풋)를 찾아 변수에 초기화한다.
    const input = document.getElementById("todoInput");

    // 만약 인풋에 값이 없으면 리턴하고
    // 입력된 값이 없으면 return, 즉 메서드를 종료한다.
    if(!input.value) return;

    // 인풋의 값을 가져와 HTML에 추가해 주고, 리스트의 자식 길이를 deleteItem(num)에 num으로 넣어준다.
    // list, 할 일 목록에 li 엘리먼트를 추가한다. 엘리먼트의 자식으로 버튼을 추가하여
    // list(ul)의 자식의 길이(현재는 추가되지 않았기 때문에 index처럼 사용 가능)를 매개변수로 전달한다.
    list.innerHTML += `<li>${input.value}<button onclick="deleteItem(${list.children.length})">삭제</button></li>`;

    // 인풋의 값을 비워준다. (입력된 값을 없앤다.)
    input.value = "";
}