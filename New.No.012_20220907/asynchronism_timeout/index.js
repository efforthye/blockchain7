
// 매개변수 함수에 원하는 코드를 입력한다.
// setTimeout() : 아래에 두번째 매개변수(시간, ms) 후에 실행된다.
// 일정 시간 후에 코드가 실행된다. ms:1/1000초, 즉 1000ms = 1s초, 2000:2초
setTimeout(()=>{
    console.log("setTimeout");
},2000);

// setInterval() : 아래에 두번째 매개변수(시간, ms)마다 실행된다.
// 일정 시간마다 코드가 계속 실행된다. //3000:3초
// setInterval(()=>{
//     console.log("setInterval");
// }, 3000);
// 무한반복되는데, 만약 꺼야 할 때는 해당 인터벌을 변수에 정의한다.

const interval = setInterval(()=>{
    console.log("setInterval");
}, 3000);
// 무한반복을 종료시키기 위해 clearInterval() 메서드를 활용해 종료한다.
// clearInterval(interval);

// 카드를 뒤집는 동안 클릭을 막아야 하니까..? 이 놈을 사용해주면 된다.
// 애니메이션 돌아가는 동안 다음 클릭 못하게 해주세요.