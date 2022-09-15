console.log(document.body.children);
// children은 엘리먼트의 자식 엘리먼트들을 가져온다. 호출한다.(많이 쓰임)

console.log(document.body.childNodes);
// childNodes는 자식 노드들을 모두 가져온다.(덜 쓰임)
// 리액트 등에서 코드를 컴파일(빌드)하게되면 코드들이 압축된다.
// 용량이 줄어들고 사람들이 못 알아봄(가시성이 떨어짐).

console.log(document.getElementById("parent").childNodes);
// #parent의 자식 노드들을 가져온다.
// 엘리먼트 또한 노드의 한 종류라고 생각하면 됨..
// 엘리먼트를 제외하고 다른 입력값들을 dom에서 노드라고 하기도 한다.
// div parent 자체를 엘리먼트라고 하면 그 엘리먼트들을 제외한 모든것을 노드라고 하는거 같다.
// 크게 보면 엘리먼트 또한 노드에 포함되어 있다.
// #parent 안의 텍스트로된 parent는 text node라고 할 수 있다.
// id는 한 놈에게만 부여되어야 한다.(중요)

console.log(document.getElementById("parent").parentElement);
// #parent의 부모 엘리먼트가 무엇인지 찾아서 가져온다.

console.log(document.getElementById("child1").parentElement);
// #child1의 부모인 div#parent가 출력된다.

console.log(document.getElementById("parent").firstElementChild);
// div#child1 첫번째 자식 엘리먼트를 가져온다.

console.log(document.getElementById("parent").lastElementChild);
// div#child2 마지막 자식 엘리먼트를 가져온다.
// 이 놈들을 사용하기에는 to do list를 만들면 좋다고 한다.
// 오늘 과제로 나갈 듯. 현재 상태에 따라 그냥 값을 가져올 뿐..
// 라스트 차일드 접근해서 누구누구 삭제 이런 식으로 써먹음

console.log(document.getElementById("child1").nextElementSibling);
// div#child2 #child1 요소의 다음 형제 엘리먼트를 가져온다.

console.log(document.getElementById("child1").previousElementSibling);
// null 이전 요소 형제 : #child1 요소의 이전 형제 엘리먼트를 가져온다. 첫번째 요소라서..
// Sibling : 형제/자매, previous : 이전

let children = [...document.getElementById("parent").children];
console.log(children);
// #parent의 자식 엘리먼트들을 children변수에 담는다.
// 얘는 배열이 아니라 컬렉션이라고 한다. HTMLCollection 이라고 뜬다.
// ...을 하면 하나하나 풀어서 나열되고, []대괄호를 통해 배열이 된다.(중요)
// 결과적으로 parent의 자식인 div#child1~3이 children 배열에 담긴다.
// ...뒤의 연속적인 데이터를 하나하나 펼쳐서 배열에 넣은거임
// 얘는 배열이 아니라 컬렉션이라고 합니다.
// forEach를 쓰고 싶으면 배열로 변환해야 한다.
// 변환 방법 : [...변환할 변수]

children.forEach(elem => {
    console.log(elem);
});
// forEach() 메서드는 주어진 함수를 배열(children) 요소 각각에 대해 실행합니다.

console.log(document.getElementsByClassName("child"));
// HTMLCollection(유사배열) 내부에 있는 3개의 .child들을 가져온다.

children = document.getElementsByClassName("child");
// 칠드런 변수에 클래스명으로 가져온 .child 요소들을 집어넣는다.
// 컬렉션(유사배열)으로 ehildren이라는 변수에 들어갔다.

console.log(children[0]);
// 유사배열의 첫번째 놈을 가져올수는 있지만 이거 외에는 다른 배열처럼 사용하지 못한다.

children[0].onclick = ()=>{
    alert("온클릭");
};
// 첫번째 놈을 누르면 (화살표 함수를 사용했다.)
// 리액트가면 또 html에서 써야 하나봄 onClick을..

function onClick(num){
    console.log(num+'번째 자식을 클릭했어!');
};

[...children].forEach(function (elem, index){

    elem.onmouseover=()=>{ //마우스를 올렸을 때
        elem.classList.toggle("hover");
    }
    // 왜 여기에 적어야 하는지 다시 공부하기... 
    // onclick안에 들어가면 클릭을 해야만 실행되고,
    // elem 각각 엘리먼트들을 가져와야 하기 때문에 배열안에서 해야한다..... ㅠㅠ

    elem.onmouseleave=()=>{ 
        elem.classList.toggle("hover");
        // elem.classList.entries(); //일단은 안배움
    }
    // 마우스를 내렸을 때 hover클래스를 토글해준다.(있으면 없애고, 없으면 추가하고)
    // 최종적으로 이 두 개를 사용하면 hover처럼 사용된다.

    elem.onclick = function(){
        // onClick(index); // 0번째 자식
        onClick(index+1);
        console.log(elem.innerHTML);
        /*{
            if(elem.classList.contains('on')){
                elem.classList.remove('on');
            }else{
                elem.classList.add('on');
            }
            // 엘리먼트의 꽃!!!(중요)
            // 클래스 리스트는 엘리먼트의 클래스를 관리하는 객체이다.(중요중요)
            // add 메서드는 클래스를 추가한다.(중요중요)
            // contains() 메서드는 매개변수로 전달된 문자열이 클래스에 포함되어있는지 확인한다.
            // remove() 메서드는 클래스를 삭제한다.
            // add() 메서드는 클래스를 추가한다.
            // display none으로 해놨다가 display block으로 바꾸면 
            // 없앴다 추가했다 함으로서 페이지를 바꿀 수 있다.
        }*/
        elem.classList.toggle("on");
        // toggle() 메서드는 클래스가 있으면 없애고 없으면 추가하는 것이다. 위의 if문 대신 사용한다.(중요)

    };
})
// 이거 잘 모르겠는데 잘 알아보기..(중요)
// forEach 매개변수 함수에 매개변수로 (item, index) 형식으로 받을 수 있으며
// item은 배열의 아이템 하나하나, index는 해당 아이템의 인덱스 번호(0~몇번째 아이템)를 받아오게 된다.
// innerHTML은 그 요소의 내용물을 가져오는 놈이다.
// forEach를 사용한 이유는 각각의 배열에 onclick을 주고 싶어서라고 한다.
// forEach는 배열의 아이템을 하나하나 가져와서 매개변수로 함수로 전달된
// 함수에 매개변수로 전달해서 함수를 호출한다.

const tempArr = ['a','b','c'];

tempArr.forEach((item, index)=>{
    console.log(`${item} : ${index+1}번째 아이템`);
    // break; return;이 안 되는 것이 forEach의 유일한 단점이다.(멈출 수 없다.)
});
// // 결과
// a : 0번째 아이템
// index.js:93 b : 1번째 아이템
// index.js:93 c : 2번째 아이템
// for each : for과 비슷한(each)이라는 뜻이다.
// (item, index)에서 item:값, index:배열의위치라고 이해

for(let index=0; index<tempArr.length; ++index){
    const item = tempArr[index];
    console.log(`${item} : ${index+1}번째 아이템`);
}
// 결과는 forEach로 돌렸을 때와 같다.
// forEach에서 사용하는 item이랑 변수 통일하기 위해서 초기화(??)

console.log(document.getElementById("parent").innerHTML);
// #parent 요소의 안에 들어있는 html 전체를 출력한다.

console.log(document.getElementById("parent").innerText);
// #parent 요소의 안에 들어있는 text만 출력한다.


// 이게 
//elem.classList.add('on');


document.getElementById("btn").onclick = () =>{
    // #btn이라는 버튼 클릭 시 실행된다.
    console.log(document.getElementById("BTS").value);
    // #BTS에 입력된 값을 로그로 출력한다.
    document.getElementById("btn").style.backgroundColor = "#ff0000";
    // #btn의 배경색을 빨간 색으로 바꾼다.
}
// 자바스크립트로 추가한 스타일은 css쪽에서 아무리 넣어놔도 무조건 js쪽 스타일이 들어간다.
// (js가 마지막이기 때문에)

























































// console.log(document);
// console.log(document);
// console.log(document);


// [
//     1,23,4,34,5,325,23,4,324
// ].forEach(item=>{
    
// }) // 이놈은 된다.


// document.querySelector 나중에 배운다고 함..(중요할듯?)