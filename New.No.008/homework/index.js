let firstNum = 0;
let secondNum = 0;

// firstNum = parseInt(firstNum);
// secondNum = parseInt(secondNum);

function plus1(){ // 함수 괄호 안에 firstNum을 집어넣지 않아도 된다. 넣으면 다른 새로운 변수로 생각하게 된다.
    firstNum = firstNum + 1; // 매개변수는 위의 선언된 변수와 다른 변수가 된다.
    // firstNum++; // firstNum을 하나 증가시킨다.
    console.log(firstNum); // firstNum을 콘솔창에 하나 출력시킨다.
    return firstNum; 
}

function plus2(){
    secondNum = secondNum + 1;
    // secondNum++;
    console.log(secondNum);
    return secondNum;
}

function result(){
    result = firstNum + secondNum;
    console.log(result);
    return result;
}

const sum = () =>{
    console.log(firstNum+secondNum);
}


function examAddFN(firsrNum){ 
    console.log(firstNum);
    firstNum++;
    firstNum += 1;
    firstNum = firstNum+1;
    console.log(firstNum);
}
examAddFN(); // 매개변수가 없어서 undefined.. 괄호안에 받은값이 없어서 매개변수인 firsrNum안에 값이 안들어가 아무것도 처리할수 없고 undefined가 뜬다.