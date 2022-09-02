// 함수란 기능을 실행하는 코드에 이름을 지은 것이다. (중요)
// 변수는 데이터에 이름을 짓는다.
// button의 속성에 onclick="test()"를 해주어 함수를 불러올 수 있다.

let num = 0;

function test(){
    // function 이름 () {}
    // () 안에 함수를 사용할 때 함수에게 줄 정보를 입력한다.(매개변수)
    // {} 안에 실행할 코드가 들어간다.

    if(num>8){
        console.log(`대왕 귀요미 ${++num}`);
    }else{
        console.log(`귀요미 ${++num}`);
    }
}

function test1(){
    console.log('함수 선언문은 함수를 초기화합니다.');
    console.log('function 이름(){} ');
    console.log('해당 형식으로 함수를 초기화하는 방식을 "함수 선언문" 이라고 한다.');
    // 즉 function 이름(){}     <- 함수 선언문이다.
}

let test2 = function(){
    console.log('함수 표현식은 함수를 초기화합니다.');
    console.log('let 이름 = function(){}');
    console.log('해당 형식으로 함수를 초기화하는 방식을 "함수 표현식" 이라고 한다.');
    // const/let 이름 = function(){}    <- 함수 표현식이다.
}

const test3 = () => {
    console.log('화살표 함수는 함수를 초기화합니다.');
    console.log('let 이름 = () => {}');
    console.log('해당 형식으로 함수를 초기화하는 방식을 "화살표 함수" 이라고 한다.');
    // const/let 이름 = () => {}    <- 화살표 함수
}

test1();
test2();
test3();
// 함수를 호출합니다. 즉 함수에 있는 코드를 실행합니다.

// 매개변수란, 함수에게 데이터를 전달한다.
// 함수가 사용해야 할 데이터를 호출할 때 전해준다.

function addFunc(firsrNum, secondNum){
    // firstNu, secounNum이 매개변수이다.

    console.log(firsrNum+secondNum);
    // return '리턴값을 입력해준다.';
}
addFunc(2,3);
// 2가 firstNum이고, 3이 secoundNum이다.

function addFunc2(firsrNum, secondNum){
    return firsrNum+secondNum;
    // return(되돌린다) : 반환값!, addFunc2가 끝났을 때 함수가 내뱉는 값이다.
}
let answer = addFunc2(6, 13);
console.log(answer);
//addFunc2 함수는 return이 있기 때문에 answer변수에 addFunc2의 return값이 정의된다.

const comSel = parseInt(Math.random() * 99 + 1); 
//우리는 지금까지 원래 있던 함수를 가져다 썼다. 이미 어딘가에 만들어져서 저장되어있다.

answer = addFunc(56, 3); //addFunc함수 내의 콘솔로그 출력 덕분에 콘솔에 59가 뜨는 것이다.(중요)
console.log(answer); //answer이 부르는 함수안에 리턴값이 없기 때문에 undefined가 뜬다.(중요)
// 여기서 addFunc 함수는 return값이 없기 때문에 answer변수에 정의되지 않았다를 뜻하는 undefined가 정의된다.

// 4교시
console.log(Math.random()); //0.9316430692287234 이런 랜덤값을 리턴을 해준다.
console.log(console.log("asdf")); //안에 들어간 놈 자체가 하나의 매개변수가 된 것이다.
//안에 있는 콘솔로그 먼저 뜨고, 겉의 콘솔로그는 리턴이 없어 undefined가 떴다.

console.log(addFunc2(1,2)); //위의 함수선언에 가보면 계산 리턴값이 있기 떄문에 3이 출력된다.


function sel(num){
    switch(num){
        case 1 :
            return "검"
            // 함수는 return해서 값이 반환이 되면 그 자리에서 끝나버린다.(중요)
            console.log('검을 선택하였습니다.'); //return되면 아래의 console.log3는 실행되지 않는다.
            break; //return되면 아래의 break는 실행되지 않는다.
        case 2 :
            return "활"
            break;
        case 3 :
            return "지팡이"
            break;
        case 4 :
            return "도끼"
            break;
        default:
            return false;
    }
    console.log(`default에서 return false를 전부 해버렸고, 
    return을 해버리면 함수 자체를 빠져나가버리기 때문에 출력되지 않는다.`);
}

let playerSel;
// 플레이어 선택을 받는다. 선언만 했기 때문에 아직은 undefined이다.

do{
    playerSel = prompt('무기를 선택하세요.\n 1 : 검        3 : 활\n 2 : 지팡이  4 : 도끼');
    // 플레이어의 선택을 받는다.
    playerSel = sel(parseInt(playerSel));
    // sel함수를 호출해 위에서 받은 플레이어의 선택을 정수(숫자)로 바꾸어 전달한다.
    // sel은 받은 정수(매개변수/플레이어가 선택한 수)를 사용해서 값을 반환한다.
    // sel이 반환한 값을 playerSel에 다시 정의한다.(재정의한다, 중요)


}while(!playerSel); //playerSel이 false라면 계속 반복한다. 
// sel함수에서 1~4를 선택하지 않아서 default return false가 되어 계속 반복하도록 했다.
console.log(playerSel);
