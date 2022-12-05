
// 5. promise 함수를 생성하여 return 한다.
const promiseTime = (type, time) => {
    // Promise 함수를 사용하기 위해 new Promise를 했다.
    return new Promise((resolve, reject) => {

        // 매개변수로 전달된 시간 후에 매개변수로 전달된 type을 반환한다.
        // 만약 서버와의 통신(axios)을 사용할 시, setTimeout이 아니라
        // axios의 then 등을 이용해서 resolve 메서드를 호출하라고 한다.(중요)
        // 6. 위와 마찬가지로 try~catch로 에러를 체크한다.
        // 6-2. setTimeout()을 사용해 전달된 시간(매개변수 time)만큼 기다린 후에
        //   resolve를 사용해 결과(매개변수 type)를 반환한다.
        try {
            setTimeout(() => {
                console.log(`6. setTimeout() to ${type}`);

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






















// // 비동기 처리 : https://www.daleseo.com/js-async-callback/
// // 비동기 처리 : 다른 작업과 함께 진행하는 방식이다.
// // ex) setTimeout과 같이 다음 작업에 대해서 예약해두는 역할을 한다.
// // 동기 처리 : 실제 코드를 읽듯 순서대로 처리한다. 일반 코드와 같다.
// setTimeout(() => {
//     console.log("비동기 확인");
// }, 1000);
// console.log("동기 확인");

// // 비동기 처리를 연속되게 실행할 때
// // 1초마다 한 번씩 실행한다. 이 코드는 콜백 지옥이라고 한다.
// // setTimeout(() => {
// //     console.log("비동기 확인1");
// //     setTimeout(() => {
// //         console.log("비동기 확인2");
// //         setTimeout(() => {
// //             console.log("비동기 확인3");
// //             setTimeout(() => {
// //                 console.log("비동기 확인4");
// //                 setTimeout(() => {
// //                     console.log("비동기 확인5");
// //                 }, 1000);
// //             }, 1000);
// //         }, 1000);
// //     }, 1000);
// // }, 1000);
// // console.log("동기 확인");

// // 이처럼 작성하는 경우가 많기 때문에 콜백지옥이라고 부른다.
// const callbackHell = (text, func) => {
//     setTimeout(() => {
//         console.log(text);
//         if (func) func();
//     }, 1000);
// };

// // Promise는 위와 같은 콜백 지옥을 피하기 위해 사용한다.
// callbackHell("비동기 확인", () => {
//     callbackHell("비동기 확인2", () => {
//         callbackHell("비동기 확인3", () => {
//             callbackHell("비동기 확인4", () => {
//                 callbackHell("비동기 확인5");
//             });
//         });
//     });
// });


// const callbackPromise = (text, time) => {
//     return new Promise((resolve, reject) => {
//         // resolve : 성공 시 결과를 전달한다.
//         // 전달할 데이터 : resolve의 매개변수로 전달해준다.
//         // reject : 실패 시 에러를 전달한다. 사용법은 resolve와 같다.
//         // try 스코프 내의 코드를 실행한다. 도중 에러가 발생하면 catch error로 전달한다.

//         try {
//             if(text === "어싱크 확인3"){
//                 reject("end");
//             }
//             setTimeout(() => {
//                 resolve(text);
//             }, time * 1000);
//         } catch (error) {
//             // 그래서 보통 catch에 reject()를 많이 적는다.
//             reject(error);
//         }
//     });
// }

// // .then()은 promise 작업 성공 시 실행하는 콜백함수를 전달한다.
// // 콜백함수의 매개변수는 76번 줄의 resolve에 전달된 매개변수(text를 result로)를 받는다.
// // .catch()는 promise 작업 도중 reject 발생 시 그 것을 받아 처리한다.
// // reject()가 호출되면 then이 아닌 .catch()에서 그 결과를 받는다.
// callbackPromise("프로미스1", 1)
//     .then((result) => {
//         console.log(result);
//         // 다음 프라미스(작업)는 return으로 반환하며, then으로 아래의 결과를 받아올 수 있따.
//         return callbackPromise("프로미스2", 1);
//     })
//     .then((result)=>{
//         console.log(result);
//         return callbackPromise("프로미스3", 1);
//     })
//     .then((result)=>{
//         console.log(result);
//         return callbackPromise("프로미스4", 1);
//     })
//     .then((result)=>{
//         console.log(result);
//         return callbackPromise("프로미스5", 1);
//     })
//     .catch((error)=>{
//         console.log(error);
//     });


// // 평소에 자주 쓰던 방식
// // async : await를 사용하려면 함수의 앞부분에 써줘야 한다. (synchronise))
// // await : 프로미스 함수가 끝날 때까지 기다리도록 한다. 아래의 줄로 내려가지 않는다.
// // 즉, 비동기 작업을 동기처럼 작성할 수 있게 해준다.
// const asyncFunc = async () =>{

//     // 중요, await를 사용한 프로미스 함수 호출 시,
//     // reject가 발생하면 catch를 통해 error를 받아준다.(평소에 자주 쓰던 방식임)
//     try {
//         console.log(await callbackPromise("어싱크 확인1", 1));
//         console.log(await callbackPromise("어싱크 확인2", 1));
//         console.log(await callbackPromise("어싱크 확인3", 1));
//         console.log(await callbackPromise("어싱크 확인4", 1));
//         console.log(await callbackPromise("어싱크 확인5", 1));
//     } catch (error) {
//         console.log(error);
//     }
// }
// asyncFunc();