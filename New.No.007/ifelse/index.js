console.log('이것은 개발자 도구 콘솔창에 로그를 남기는 것이다.');
console.log('fabicon 어쩌구 하는 오류는 지금은 무시해라.');

console.log('1 === "1" : 1 ' + (1 === "1")); // 거짓

// 1교시 : 조건문, if && else if && else (중요)
if(1>2){
    // 만약에 ()안이 참이면 {}안의 코드를 실행한다.
    console.log("1<2는 true이다.");
}else{
    // if의 ()안에 있는 조건이 거짓이면 {}안의 해당 코드를 실행한다.
    console.log("1>2는 false이다.");
}

if(1<2) console.log("1<2는 true이다.");
// if에서 조건이 참이어서 해당 코드가 실행되면 
// else if, else등 아래의 코드를 건너뛴다.
// 즉 아래의 코드는 실행되지 않는다.
else console.log("1>2는 false이다.");
// 위의 if, else if의 조건이 모두 충족되지 않았을 때 최후의 보류로 실행되는 코드다.
// 한 줄의 코드면 {}가 없어도 된다.

// if(1<2) console.log("1<2는 true이다.");
// console.log('hi');
// else console.log("1>2는 false이다.");
// if와 else if, else는 함께 붙어 다녀야 한다.

// else if는 else와 if가 합쳐진 것이다.
if(1<2){
    console.log('여기 조건이 거짓이면서'); // 참, 실행된다.
}else if(2<3){
    console.log('여기 조건이 참이면 else if의 {}코드가 실행된다.'); //참
}else{
    console.log('위의 if, else if의 모든 조건이 거짓일 때 실행된다.'); 
}

console.log(1<2 ? '이건 참이야':'이건 거짓이야'); //참
// 삼항연산자(조건 ? 참일때 : 거짓일때) (중요)
// if문을 한 줄에 넣은 거라고 생각하면 편하다.
// 나중에 참일때 참에대한 조건이 2, 3개 막 생기면 힘들다고 한다.

let test1 = 10;
let test2 = 7;

if(test1 < test2){ //거짓
    console.log('꼴은 좀 보자.');
}else{
    console.log('꼴도 보기 싫다.');
}



//const inputData = prompt('넣고 싶은 값을 입력해보세요.');
let inputData; // 잠깐 위에것을 꺼놨다.
// inputData = prompt('넣고 싶은 값을 입력해보세요.'); //이 부분 살리기. 여기에 형변환해주면됨
// prompt로 받은 값들은 전부 string으로 들어오기 때문에 형변환을 해줘야 한다!!!(중요)
// 숫자로의 형변환 : Number(***) or +*** or parseInt(***) or parseFloat(***)
// 우리의 적 NaN ? 뭔지 모른다... 이거 들어가는 순간 답이 없어진다고 한다. 이더리움 쪽에서
// prompt는 브라우저에 입력할수 있는 알림창을 띄우는 것이다.
// switch는 여러 조건을 한번에 확인한다.
switch(inputData){
    // switch의 ()안에 있는 변수의 값을 확인한다.
case "1" : 
    // case는 ()안에 있는 변수의 값이 같은지 확인한다.
    console.log('1을 넣었어.');
    break; // 만약 break가 없으면 코드가 멈추지 않아 2까지 넘어간다..(중요) 3이상인 놈들 나오게 쓸 수도 있기는 하다.
    // break는 해당 명령어가 있는 지점에서 코드를 정지한다.
    // 오늘 반복문에서 다시 1공부하면 더 확실하게 알 수 있다.
case "2" : 
    console.log('2를 넣었어.');
    break;
case "3" : 
    console.log('3을 넣었어.');
    break;
case "4" : 
    console.log('4를 넣었어.');
    break;
case "5" : 
    console.log('5를 넣었어.');
    break;
default:
    // default는 if else에서 else와 같은 놈이다.
    // case에서 걸리지 않으면 실행되는 마지막 보류이다.
    console.log('1에서 5까지만 넣어라.');
    
}