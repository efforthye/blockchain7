// ## 변수 : const, let, var 명령어로 이름짓는 것이 변수이다.
// # 선언 : 변수의 이름을 정하는 것을 선언이라고 한다.
// # 정의 : 변수에 데이터(값)를 저장하는 것을 정의라고 한다.
// # 초기화 : 선언과 정의를 한 번에 하는 것을 초기화라고 한다.
// const는 재정의가 불가능하기 때문에 초기화를 해야만 한다.
// 재정의 불가능한 변수 divs를 선언하여 div라는 태그 이름을
// HTML 구조(DOM, document) 내에서 검색하여 가져와서 정의한다.
// 즉, 상수 divs에 div 엘리먼트들을 초기화한다.
const divs = document.getElementsByTagName("div");

// # 유사 배열 : HTMLCollection으로, div가 4개 들어있다.
console.log(divs);

// # 스프레드, 전개 연산자 : ...은 배열 등 데이터의 모음을 풀어서 반환한다.
// 보통 [...***]을 사용하여 유사 배열 ***을 배열로 변환한다.
// 해당 방법 사용시 직전 코드 마지막에 세미콜론(;)이 없으면 
// 한 줄(하나의 같은 코드)로 인식해 오류가 발생하는 경우가 있다.
// # forEach : 배열의 각 아이템을 매개변수 함수에 매개변수로 전달해 함수를 실행한다.
// # elem은 선생님이 자주 사용하는 element의 약어라고 한다.
// # 이벤트 함수 실행 시 캡쳐링이 진행된 후 버블링이 진행된다고 한다.(각자 찾아서 해보기..)
// # 캡쳐링 : 버블링과 반대로 상위 부모에서부터 내려와 이벤트 함수가 실행되는 것을 말한다.
// 캡쳐링은 addEventListener를 사용해서 확인할 수 있다고 한다.
// # 버블링 : 클릭 등의 이벤트 함수에 대해서 자식의 이벤트 함수 실행 후
// 그 부모의 함수도 같이 실행하는 것을 말한다.
// 이 코드는 버블링 기능을 볼 수 있다고 한다. 버블링을 막아야 한다.
[...divs].forEach((elem)=>{
    // # onclick : 클릭 시 실행되는 이벤트 함수이다.
    elem.onclick = (e) =>{
        // # classList : 엘리먼트의 class(클래스)를 관리하는 프로퍼티 객체이다.
        console.log(elem.classList.toString());
        // # console : 개발자 도구(F12)에 출력하기 위한 객체이다.
        // console.log는 개발자 도구에 전달된 매개변수를 단순 출력한다.
        console.log("버블링~");

        // 버블링(번식)을 막는 메서드(중요) //부모 휠이 있을 때 자식 휠만 돌아가도록 할 때 사용..
        e.stopPropagation();
        // 기본 기능을 막는 메서드(중요)
        // e.preventDefault();
    };
});


// # hoisting(호이스팅) : 선언 및 초기화를 하기 전에 호출해 가져와 사용하는 현상(기능).
// 공식적으로는 hoisting은 var를 사용 시 javascript가 최상단에서 미리 선언하는 것을 말한다.
// var, function으로 사용 가능하다. 하지만 좋은 기능이 아니기 때문에 사용하지 말아야 한다.
// hoisting을 막는 방법 : var를 사용하지 않고 let과 const를 사용한다. 
console.log(a); // undefined
hoisting(); // NaN
console.log(a); // undefined -> NaN

var a = 1;
console.log(a);

// console.log(b); // ReferenceError
// let b = 23;
hoisting(); 

// hoisting() 함수
function hoisting(){
    console.log(++a); //1 //2(호출을 2번 했기 때문에)
};

// expressiongHoisting() 함수
// expressiongHoisting(); // RefenenceError
let expressiongHoisting = function(){
    // 함수 표현식을 사용하자.
    console.log(++a);
};
expressiongHoisting(); //3

// arrowHoisting() 함수
// arrowHoisting(); //ReferenceError
const arrowHoisting = () =>{
    console.log(++a);
};
arrowHoisting(); //4

// 이론 시험에 나올 수 있다고 한다.



// ============================
// # 구조 분해 할당 : 구조를 분해해서 각각의 변수에 할당한다. (중요중요, 진짜 많이 쓰임)
// a는 1, b는 2, 나머지는 c로 할당하겠다는 뜻이다.
// 배열의 구조 분해 할당(배열의 아이템을 변수로 가져온다.)
const tempArr = [1,2,3,4,5];
const [aa,bb, ...cc] = tempArr;
console.log(aa); //1
console.log(bb); //2
console.log(cc); //[3,4,5]

// 객체의 구조 분해 할당(객체의 아이템이 각각의 변수에 할당된다. 중요)
const tempObj = {
    aaa:11,
    bbb:22,
    ccc:33,
};
const {aaa, bbb, ccc} = tempObj;
console.log(aaa); //11
console.log(bbb); //22
console.log(ccc); //33

// 구조 분해 할당...
const students = {
    김성진 : {},
    정재훈 : ['정재훈', 30, '강남']
}
const {김성진, 정재훈} = students;
console.log(김성진); // {} 출력
console.log(정재훈); // {'정재훈',30,'강남'} 출력
// 같은 이름으로 해야 하는 것 같다.
// const {kk, dd} = students; 
// console.log(kk); // undefined
// console.log(dd); // undefined
