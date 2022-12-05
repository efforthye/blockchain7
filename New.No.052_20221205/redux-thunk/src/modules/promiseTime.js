const promiseTime = (type, time) => {
    // Promise 함수를 사용하기 위해 new Promise를 했다.
    return new Promise((resolve, reject) => {

        // 매개변수로 전달된 시간 후에 매개변수로 전달된 type을 반환한다.
        // 만약 서버와의 통신(axios)을 사용할 시, setTimeout이 아니라
        // axios의 then 등을 이용해서 resolve 메서드를 호출하라고 한다.(중요)
        try {
            setTimeout(() => {
                // resolve() : 성공시 매개변수를 결과로 전달한다.
                resolve(type);
            }, time * 1000);
        } catch (error) {
            // reject() : 실패시 에러를 매개변수로 전달한다.
            reject({ type: 'error', payload: error });
        }
    });
}

export default promiseTime;


// 비동기 처리 : https://www.daleseo.com/js-async-callback/
// 비동기 처리 : 다른 작업과 함께 진행하는 방식이다.
// ex) setTimeout과 같이 다음 작업에 대해서 예약해두는 역할을 한다.
// 동기 처리 : 실제 코드를 읽듯 순서대로 처리한다. 일반 코드와 같다.
setTimeout(() => {
    console.log("비동기 확인");
}, 1000);
console.log("동기 확인");

// 비동기 처리를 연속되게 실행할 때
// 1초마다 한 번씩 실행한다. 이 코드는 콜백 지옥이라고 한다.
// setTimeout(() => {
//     console.log("비동기 확인1");
//     setTimeout(() => {
//         console.log("비동기 확인2");
//         setTimeout(() => {
//             console.log("비동기 확인3");
//             setTimeout(() => {
//                 console.log("비동기 확인4");
//                 setTimeout(() => {
//                     console.log("비동기 확인5");
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);
// console.log("동기 확인");

// 이처럼 작성하는 경우가 많기 때문에 콜백지옥이라고 부른다.
const callbackHell = (text, func) =>{
    setTimeout(()=>{
        console.log(text);
        if(func) func();
    },1000);
};

// Promise는 위와 같은 콜백 지옥을 피하기 위해 사용한다.
callbackHell("비동기 확인", ()=>{
    callbackHell("비동기 확인2", ()=>{
        callbackHell("비동기 확인3", ()=>{
            callbackHell("비동기 확인4", ()=>{
                callbackHell("비동기 확인5");
            });
        });
    });
});