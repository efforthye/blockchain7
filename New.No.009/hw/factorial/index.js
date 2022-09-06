alert(':: 팩토리얼 ::');

// 사용자가 3을 입력하면 3부터 1씩 작아지는(3*2*1) 값을 곱해 결과값을 출력한다.
// https://namu.wiki/w/%EA%B3%84%EC%8A%B9(%EC%88%98%ED%95%99)

// 사용자에게 팩토리얼을 실행할 값을 받는다.
let num = prompt('팩토리얼을 실행할 수를 적어주세요.');
num = parseInt(num);

// 재귀함수 호출
factorial(num);

// 함수에 팩토리얼을 실행할 수를 넣어준다.
function factorial(num){
    // 만약 0이면 그냥 1을 출력한다. 
    // 그대로 0을 출력하면 1을 집어넣어도 1*1이 아니라 1*0으로 0이되기 때문
    // 만약 0이 되었을 시 return을 설정하지 않으면 0이 되었을 때 빠져나가지 못해
    // 무한 루프에 빠지게 된다.
    if(num<1){
        return 1;
    }
    // 만약 1이면 1*1이 출력된다. 
    // 만약 2이면 2*1*1이 출력된다.
    return num * factorial(num-1);
}

// factorial 함수를 출력시킬 때 그냥 n을 넣으면 안되고 사용자가 입력한 그 num을 넣어야 한다.
console.log(factorial(num));










// // 팩토리얼 (입력한 값이 3이라면 * -1인 2 * -2인 1을 곱해준다.)
// // 사용자가 입력한 값이 함수의 n 값으로 들어온다.
// function factorial(n){
//     if(n==0){
//         return 1;
//     }else{
//         return n*factorial(n-1);
//     }
// }
// console.log(factorial(num));
// // n 값은 정상적으로 잘 줄어드는데 결과값이 뭔가 제대로 안 나오는 이유는?

// // 팩토리얼 함수에 n이라는 변수(숫자)를 집어 넣음
// function factorial(n) {
//     // result라는 변수에 1을 집어넣음
//     var result = 1;
//     // for문을 i가 2에서부터 n번째 미만까지 갈때까지 계속 돌린다.
//     // 결과값에 i를 곱한 값을 다시 result에 저장해준다.
//     for(var i=2; i<=n; i++) result *= i;
//     // result를 출력함
//     console.log(`result = ${result}`);
//     return result;
// }
// console.log( factorial(num) );

setTimeout("location.reload()", 15000);