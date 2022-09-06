// 1교시 ~ 2교시

// 오늘의 과제 : 숫자 선택(2개) 1, 2를 누르면 12가 되는거..
// 숫자 2개를 선택하고 + - * / % 중 하나를 누르면 계산된 값이 alert창으로 출력된다.


let firstNum; //굳이 0을 주지 않아도 됨
let secondNum;
let clickCount = 0; 
//카운트를 쓰느냐 안쓰느냐?
// 안쓰면 firstNum가 비어있는지(정의가 되지않았는지)를 undefined로 확인한다.
// 혹은 firstNum에 null을 넣어서 null을 확인할 수도 있는 거고.. 오~~
// count란 몇 번 클릭했는지, 클릭한 횟수를 구하는 것..

// function numSel(){
//     clickCount++; // 클릭했을 때 클릭한 횟수 증가
//     if(clickCount == 1){
//         // 카운트를 증가시키는 코드가 위에 있기 때문에 1이 증가한 상태로 확인을 하게 된다.
//         // console.log(clickCount);
//         firstNum = 7;
//     }else if(clickCount == 2){
//         // 위와 마찬가지로 2번 클릭하면 카운트가 증가 후 확인하기 때문에 2로 확인한다.
//         // console.log("clickCount");
//         // console.log(clickCount);
//         secondNum = 7;
//     }
// }

function numSel(num){
    // let num; 위에 num과 같다
    // 함수 스코프{} 안에서만 사용된다.
    // 함수 밖에서 선언된 전역변수, 지역변수 등 이름이 같은 변수와 다른 변수이다.
    // 밖에서 num = 1;을 했어도 undefined가 뜰 수 있다. 호출시 ()안이 비어있다는 뜻.
    // 이후 HTML 12번 줄에서 ()안에 7을 넣음으로서 num=7 로 정의한다.
    clickCount++;

    if(clickCount == 1){
        firstNum = num;
    }else if(clickCount == 2){
        secondNum = num;
    }
}

function calculate(order){
    // order은 위의 num과 마찬가지로 매개변수이다.

    if(clickCount < 2) return; // 2개 이상 선택하지 않으면 리턴해버림.

    switch(order){
        case "+":
            alert(firstNum+secondNum);
            break;
        case "-":
            alert(firstNum-secondNum);
            break;
        case "*":
            alert(firstNum*secondNum);
            break;
        case "/":
            alert(firstNum/secondNum);
            break;
        case "%":
            alert(firstNum%secondNum);
            break;
    }
}

function check(){
    // check 함수를 이용해서 현재 저장됨 숫자들(변수)을 확인합니다.
    console.log(firstNum);
    console.log(secondNum);
}

