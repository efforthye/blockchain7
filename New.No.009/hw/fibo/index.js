////////// 피보나치 수열 //////////
// 피보나치 수열의 이해 유튜브 : https://www.youtube.com/watch?v=V9d7wrMPzHE
// 피보나치 수열(재귀함수) : fibo(n) = fibo(n - 1) + fibo(n - 2) 
// 앞의 두 수를 더하면 다음 수가 나온다는 공식을 가지고 있다.
// 만약 사용자가 1, 2를 입력하면
// 1과 2를 더한 숫자가 다음 수열이 되고
// 2와 다음 수열을 더한 숫자가 그 다음 수열이 된다.
// 그냥 결과값만 나오도록 재귀함수를 이용해 만들어라.
// 재귀함수는 종료조건이 꼭 있어야 한다.

// 피보나치 수열 for 버전
alert(':: 피보나치 수열 ::');
let num = prompt('피보나치 수열을 계산할 숫자를 입력해주세요.');
num = parseInt(num);

// let num1 = 1;
// let num2 = 2;
// let fiboNum;
// for(let i = 1; i<num ; i++){
//     fiboNum = num1 + num2;
//     num1 = num2;
//     num2 = fiboNum;
// }
// alert(`${num}의 결과는 ${fiboNum}입니다.`);
// // 정확한 결과값이 나오는 것인지는 잘 모르겠다.



// 피보나치 수열 function(재귀함수) 버전
// 피보나치 수열을 호출한다.
fibonacci(num);

// // 피보나치 함수에 num값을 집어넣는다.
// function fibonacci(num){
//     // 1보다 작으면 1을 리턴해 종료시킨다.
//     if(num<1){
//         return 1;
//     }else{
//         // num에 fibonacci num-1을 더한다.
//         // 1과 2를 더한 숫자가 다음 수열이 되고 2와 다음 수열을 더한 숫자가 그 다음 수열이 된다.
//         num + fibonacci(num+1);
//     }
// }
// 왜 무한루프

function fibonacci(n, lastlast = 0, last = 1) {
    // base case
     if (n == 0) {
       return lastlast;
   } else if (n == 1) {
     return last;
   }
     return fibonacci(n-1, last, lastlast+last);
   }
   













// alert('피보나치 수열은 보통 n개의 계단으로 된 계단을 \n한 걸음에 1걸음 또는 2계단씩 오른다고 할 때,\n이 계단을 오를 수 있는 경우의 수를 구할 때 등에 쓰입니다.');

// let num = prompt('당신은 총 몇 개의 계단을 오르시겠습니까? ex) 8');
// num = parseInt(num);

// let upperNum = prompt(`${num}개의 계단을 몇 칸에서 몇 걸음 걸쳐 오르시겠습니까?\nex) 1칸에서 2칸 => [1,2] 혹은 [1, 2]라고 입력한다.`);
// upperNum = upperNum.replace(/ /g, '');
// upperNum = upperNum.split(',');
// let upperNum1 = upperNum[0];
// let upperNum2 = upperNum[1];
// upperNum1 = parseInt(upperNum1);
// upperNum2 = parseInt(upperNum2);
// console.log(upperNum1,upperNum2);

// let fiboNum;
// let originalNum1 = upperNum1; 
// let originalNum2 = upperNum2; 

// for(let i = 1; i<num ; i++){
//     fiboNum = upperNum1 + upperNum2;
//     upperNum1 = upperNum2;
//     upperNum2 = fiboNum;
// }

// alert(`${num}계단을 ${originalNum1}에서 ${originalNum2}걸음에 걸쳐 오를 수 있는 경우의 수는 ${fiboNum}입니다.`);







// 피보나치 수열을 호출한다.
// fibonacci(num);

// // 피보나치 함수에 num값을 집어넣는다.
// function fibonacci(num){
//     // 1보다 작으면 1을 리턴해 종료시킨다.
//     if(num<1){
//         return 1;
//     }else{
//         // num에 fibonacci num-1을 더한다.
//         num + fibonacci(num-1);
//     }
// }
// // 왜 무한루프에 빠졌는지?











