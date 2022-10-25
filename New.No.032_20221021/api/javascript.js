// javascript는 prototype이다.
// # 변수(const, let, var로 선언)는 저장할 데이터의 이름이다.
// var는 hoisting(호이스팅)이 가능하다.
// 저장한 데이터의 이름이기 때문에 호출하면 저장된 데이터를 가져온다. 출력(사용)한다. 
// const는 변경 불가능하다. << 재정의가 불가능하다.
// let은 같은 이름을 사용하지 못한다. << 재선언이 불가능하다.
// let은 다른 데이터를 다시 저장할 수 있다. << 변경이 가능하다(재정의가 가능하다.)
// var는 마음대로 마구잡이로 사용 가능하다.
// var << 같은 이름을 사용할 수 있다.(재선언이 가능하다. 단, 덮어쓴다.)

// console.log(constA); // 호이스팅(위에서 불러오기) 불가능
// console.log(letA); // 호이스팅 불가능
console.log(varA); // 호이스팅 가능

const constA = 1;
// constA = 2; // 재정의 불가능
// const constA = 3; // 재선언 불가능
let letA = 1;
letA = 2;
// let letA = 3; // 재선언 불가능
var varA = 1;
varA = 2;
var varA = 3;

// 자료형
// string, number, boolean, Array, null, Object, Function?, undefined, Symbol<<찾아봐
// string : 문자열
// number : 숫자
// boolean : 참거짓
// array : 배열
// null : 비어있는값(비어있다고 정의한값)
// Function : 함수
// Object : 객체
// undefined : 선언은했는데 입력하지않은값(그냥빈값,정의하지않았다.)
// Symbol : 절대적으로 같지 않은 값? << 'asdf'를 2개를 선언헀다. 두 값은 같은 값일까?
console.log("asdf"==="asdf"); // true
console.log(Symbol("asdf")==Symbol("asdf")); //false

const constB = 1;
console.log(constA == constB); // true

"constTest" // << string / const
1; // <<number , const(이름이 없어 수정 불가능함)
console.log(typeof(constA)); //number
console.log(typeof(constA.toString())); //string
console.log(typeof(1)); //number
console.log(typeof(1).toString()); //string
console.log("asdf".toUpperCase()); //ASDF
console.log(typeof '123'); //string
console.log(typeof +'123'); //number
console.log(typeof parseInt('123')); //number
console.log(typeof Math.floor('123')); //number
console.log(typeof parseFloat('123')); //number
console.log(typeof Number('123')); //string
console.log(typeof '123'); //string

console.log((132).toString()); //132
console.log(Boolean(123)); //true
console.log(!!123); //true(부정의 부정이라서)

console.log([].push(1)); // <<왜 1이 나올까? push는 length를 리턴하기 때문이다.
console.log([1,2,3,5,4].pop()); //왜 4? : pop은 맨 뒤의 아이템을 제거한다. 뭘 제거했는지 반환한다.

console.log([1].unshift(4)); //2 : 제일 앞에 아이템을 추가한다.
console.log([1, 10].shift()); //1 : 제일 앞 아이템을 제거한다., pop과 마찬가지로 제거한 것 반환

// 배열에서 사용하는 메서드들, 각자 알아서 찾아보고 연습해보기~
// [].join();       << 아이템을 string으로 연결, 매개변수로 받은 string을 아이템 중간에 삽입
// [].filter();     << 거름막, 내가 원하는 데이터만 배열로 반환한다.
// [].entries();    
// [].find();       << 찾다. 깊이 찾는다. 객체 내의 데이터들을 확인하여 찾을 때 사용한다. 
//                     찾은 아이템을 반환한다. 
// [].findIndex();  << 찾다. 깊이 찾는다. 객체 내의 데이터들을 확인하여 찾을 떄 사용한다.
                    // 찾은 아이템의 index를 반환한다.
// [].indexOf();    << 찾다. 얕게 찾다. 데이터 자체를 찾아 그 아이템의 index를 반환한다.
                    // 객체일 경우에 그 객체 자체로 찾아야 한다.
// [].forEach();    << for문
// [].map();        << 배열의 아이템을 변화시키고 싶을 떄 사용한다. 각 아이템에 대해서 
//                     매개변수 함수를 실행하고 그 반환 값을 배열에 넣어서 반환한다.
// [].slice();      << 자르기
// [].splice();     << 자르기, 원본 훼손!
// [].reduce();     << 합하기(foin메서드는 단순하게 string이지만 reduce는 내맘대로 가능)
//                     모든 학생의 과학 점수를 합할 수 있다. ? : 과학 점수라는 말은 각 학생이
//                     여러 점수를 가지고 있는게 그중 과학점수만을 뜻한다는 것이다.
//                     (점수가 객체로 저장되어 있다.)/ 합할 수 있다는 말은 객체 내의 
//                     프로퍼티(키)를 사용하여 각 값을 더할 수 있다는 것이다.
// [].reverse();    << 순서 뒤집기
// [].sort();       << 정렬
// [].concat();     << 배열 합치기  =대신=> [...A, ...B]


// Object(객체)
// 객체 : 키와 값으로 이루어져 있다. key : value
// 선언은 중괄호로 묶어서 선언한다. {}
const tempObj = {a : 1, b : 2};
let a = 1;
let b = 2;
tempObj.a; //1
tempObj.b; //2
// 사용함에 있어서 다른 점 : 객체의 프로퍼티(즉 key값)이니까 tempObj에 .을 붙여서 찾아 사용한다.
// let a는 재정의 가능하다. tempObj.a도 재정의 가능하다.
a = 3;
tempObj.a = 3;
// 객체의 프로퍼티(key 값)는 간단하게 생각해서 중괄호 안에 있는 변수이다. {}
// 객체 안에 프로퍼티로 객체가 가능? 가능하다.
// JSON은 객체 데이터를 파일로 저장하기 위해서 사용하므로 상관 없다.
// 이런 식으로 넣을수 있다. 어디서 봤을까? : data.data.list 이거 axios로 받아온 데이터..
// node.js에서 express서버를 생성하고 axios로 데이터를 응답 받았을 때 사용했다.
// 즉 객체 안에 프로퍼티로 얼마든지 객체가 들어갈 수 있다. 객체 안 배열도 들어갈 수 있다.
// 객체 안 배열 안 객체가 들어갈 수도 있다. 배열 안 배열 안 배열 안 객체도 가능.. 문제 : 배열for문 오래걸린다
const tempObj1 = {data:{data:{data:{list:1}}}};
tempObj1.data.data.data.list;
tempObj1['data']['data']['list'];

const tempKey = 'data';
console.log(tempObj1[tempKey][tempKey]); // 뭐가 나올까.? { data: { list: 1 } }
console.log(tempObj1[tempKey][tempKey][tempKey][tempKey]); // 뭐가 나올까.? undefined

// Array[Object]
// 깊은 찾기.. 대괄호의 중괄호 안에까지 들어가서 찾음
const tempArr = [{a:1},{a:2},tempObj,{a:3},{a:4}];

console.log(tempArr.findIndex((item) => item.a ===1)); //0
//-1 : 아래의 객체({a:1})는 위의 객체와 완전 다른 새로운 객체이기 때문에 -1(찾을 수 없다)이 출력된다.
console.log(tempArr.indexOf({a:1})); // -1
console.log(tempArr.indexOf(tempObj)); // 2
console.log({a : "asdf"}==={a :"asdf"}); // false : 다른 객체이다. 객체는 무조건 새로만들어짐

const tempObj2 = tempObj;
console.log(tempObj2 === tempObj); // true : 같은 놈으로 객체를 만들었기 때문에

const tempObj3 = {...tempObj, be : 1, a: 6};
console.log(tempObj3.a); //6 : 뒤에서 a를 덮어 씌웠기 때문이다.
console.log(tempObj3===tempObj); // false : 새로운 객체이기 때문, ...은 아이템을 분해함

console.log(...[1,2,4,3]); // 실행됨
// console.log(1, 2, 4, 3); 과 같다. 스프레드는 배열을 분해해 이것처럼 만든다.
// 키와 값이 나오지 않는 이유는 : 애시당초에 키와 값은 객체 안에서만 성립된다.

[1,2,3,4].reduce((prev, curr)=>prev+curr,0);
// 처음 prev : 0, curr : 1, result : 1
// prev : 1, curr : 2, result : 3
// prev : 3, curr : 3, result : 6
// prev : 6, curr : 4, result : 10
// prev : 10, curr : X

[1,2,3,4].reduce((prev, curr)=>{
    return prev+curr;
},0);

console.log([{a:1},{a:2},{a:3},{a:4}].reduce((prev,curr)=>{
    // 여기 뭐가 들어가야 하는가?
    return prev + curr.a; // 10(하나하나 더해줌)
}, 0));
// console.log([{a:1},{a:2},{a:3},{a:4}].reduce((prev,curr)=>{
//     const temptemp = prev.length ? prev[prev.length-1] : {a:0};
//     prev.push({a:temptemp.a+curr.a});
//     return prev;
// }));


// Function(함수)
// 함수 : 기능(코드)을 실행
// 이미 위에서 let a를 해서 재선언 불가능하기 때문에 function a이면 터진다.
function funcA(b){
    console.log(b);
}

// 함수 선언문은 호이스팅이 가능하기 때문에 함수 호출을 정상적으로 진행한다.
funcA(1); //1 (함수를 어디에서 호출하든 1이 출력된다.)

// funcB("asdf"); //에러가 나온다. 이유 : 호이스팅이 안되기 때문에.
// 아까는 함수 선언문이고 이놈은 표현식이기 때문이라고 한다.
// 표현식은 호이스팅이 안된다.
let funcB = function(a){
    console.log(a);
}
funcB("asdf"); //asdf

// var로 해도 에러가 뜬다. 표현식은 호이스팅이 안된다. var이어도.. 어쨋든 표현식이기 때문
// funcC("asdf"); // 에러
var funcC = function(a){
    console.log(a);
}

// 화살표 함수
let funcD = (a) =>{
    console.log(a);
};

let funcE = (a) => console.log(a); // 문제없다.
funcE("sdfsdf"); // 정상 출력

let funcF = (a, b)=>a+b;
let funcG = (a, b)=>{
    // a+b;
    return a+b;
};
console.log(funcF(1,2)); //3
console.log(funcG(1,2)); //undefined, 왜? : return이 없기 때문 ㅠㅠㅠ---(중요)

// let funcF = (a, b)=>a+b;
console.log([1,2,3,4].reduce(funcF,0)); //10

// [].forEach(); //
console.log([1,2,3,4].forEach((item)=>item)); //undefined
// [].map();
console.log([1,2,3,4].map((item)=>item*2)); //[2,4,6,8]
console.log([1,2,3,4].map((item)=>!!(item%2))); //1010->[true,false,true,false]

console.log([1,2,3,4].filter((item)=>item%2-1)); //[2,4]
console.log([1,2,3,4].filter((item)=>!(item%2))); //[2,4]

// [1,2,3,4].forEach();




console.log();
console.log();
console.log();
console.log();
console.log();