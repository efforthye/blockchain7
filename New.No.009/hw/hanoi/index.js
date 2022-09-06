alert(':: 하노이의 탑 ::');
// https://www.yalco.kr/11_recursion/

// 원반을 담을 스틱을 만들어 준다.
let aStick = [];
let bStick = [];
let cStick = [];
let minNum;

// 처음에는 사용자가 입력한 n개의 원반에 크기 순서대로 1이 가장 위에 가도록 놓는다.
let discus = prompt('원반의 개수를 입력해주세요.');
discus = parseInt(discus);

function hanoi (num, from, to, other) {
    // num: 원반의 수
    // from: 원반들이 위치한 곳의 번호
    // to: 원반들을 옮길 목적지 번호
    // other: 나머지 한 곳(목적지가 아닌) 곳 번호
  
    // 모두 옮겼으면 종료
    if (num === 0) return;
  
    // 가장 아래 원반을 제외한 원반들을 재귀적으로 목적지가 아닌 곳으로 옮김
    hanoi(num - 1, from, other, to);
    minNum++;
  
    // 가장 아래 원반을 목적지로 옮김
    console.log(`${from}번에서 ${to}로 옮긴다.`);
    minNum++;
  
    // 목적지가 아닌 곳으로 옮겼던 원반들을 재귀적으로 목적지로 옮김
    hanoi(num - 1, other, to, from);
    minNum++;
    
  }
  hanoi(discus, 0, 1, 2);
  
  alert(`${discus}개의 원반은 최소 ${minNum}번에 걸쳐 옮길 수 있습니다.`)






// a막대기에 배열을 만들어 맨 뒤(맨 마지막)에 제일 낮은 숫자를 넣고 -1-1-1-1한것을 쌓는다.
// 배열에 초기 값을 넣는다.
// var arr = ['zero', 'one', 'tow']; 
// n개의 원판을 3번 원판으로 최소로 옮기는 방법을 return



// A 기둥에 있는 n-1 번째 원판을 B 기둥으로 이동시킨다.
// A 기둥에 있는 n번째 원판을 C 기둥으로 이동시킨다.
// B 기둥에 있는 n-1번째 원판을 C 기둥으로 이동시킨다.








// 목표는 모든 n개의 원반을 축 A에서 C로 옮기는 것이다.

// 원반은 한 번에 하나만 옮길 수 있다.
// 자신보다 숫자가 작은 원반이 자신보다 아래에 놓일 수 없다. 
// 만약 원반이 하나라면 옆으로 옮기기만 하면 된다.
// 원반이 두개라면 3단계로 풀수있다.
// 작은 1을 c로 옮기고 2를 b로 옮긴 다음 1을 다시 b로 옮기면 된다.

// 재귀함수 팩토리얼 먼저..
// 원반이 옮겨간 경로 어디서 어디로 갔는지 찾기
// 마지막에 최소 몇 번에 걸쳐서 결과가 나왔는지 결과값 출력
// 오늘까지 전부 다 만들기
// 만약 경로까지 다 만들었다면 실제로 움직이는 것까지 구현하기..






























// const answer = [];

// const hanoi = (n, src, dst, mid) => {
//     if (n === 1) answer.push([src, dst]);
//     else {
//         hanoi(n - 1, src, mid, dst);
//         answer.push([src, dst]);
//         hanoi(n - 1, mid, dst, src);
//     }
// }

// function solution(n) {
//     hanoi(n, 1, 3, 2);
    
//     return answer;
// }