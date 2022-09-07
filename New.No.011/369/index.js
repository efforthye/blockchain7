// alert(':: 369 게임 ::');
// if, for, while을 연습하도록
// 홀수와 짝수를 플레이어가 입력하도록..?
// 홀수와 짝수중 하나를 입력받아 홀수를 고르면 홀수를 출력 짝수면 짝수만 출력?
// 입력창에 숫자와 홀수짝수여부를 입력받음?
// 짝수찍을지 홀수찍을지와 숫자를 같이 출력하도록 나타내기
// 숫자 11을 입력하더라도 짝수든 홀수든 뽑아낼 수 있어야 함
// 10과 홀수라고 적으면 1,3,5,7,9
// 힌트 : 369, %

// 유저에게 숫자와 홀수/짝수 여부를 입력받는다.
let userSel = prompt('숫자와 홀수 짝수 여부를 입력해주세요. ex) 63, 짝수');
userSel = userSel.split(',');

// 홀수/짝수에서 공백을 제거한다.
userSel[1]=userSel[1].trim();

// 유저가 고른 숫자
let userSelNum = userSel[0];
console.log(`유저가 고른 숫자 : ${userSelNum}`);

// 유저가 고른 홀수짝수여부
let userSelOddeven = userSel[1];
console.log(`${userSelOddeven}을(를) 골랐습니다.`);

// 3, 6, 9 판별 및 박수 짝 출력..
// 숫자라는 변수를 하나 선언해준다.
let number = '';
// 유저가 고른 숫자만큼 for문을 돌려준다.
for(let i = 1; i <= userSelNum; i++){
    // 숫자에 유저가 고른 숫자를 문자열로 집어넣는다.
    // 369 게임은 숫자가 아닌 문자 3,6,9가 들어있는 경우를 따지므로 문자열로 처리한다.
    number = i + '';

    // 숫자 변수에서 3,6,9가 하나라도 있으면 or해서 박수 짝을 출력시킨다.
    // 3, 6, 9 중에서 어떤 하나라도 들어있으면 박수 짝을 출력한다.
    // indexOf() 메서드는 특정 문자가 문자열의 어느 위치에 있는지를 찾아주는 것이다.
    // 왜 전부 이 if에 다 걸리는지 모르겠다.
    if(number.indexOf('3')!=-1 || number.indexOf('6')!=-1 || number.indexOf('9')!=-1){
        console.log(`${number} 박수 짝~`);
        // console.log(`number : ${number}`);
        
        // 만약 indexof 369 조합이면 박수를 두번..

    }else{
        // 숫자 변수에서 369가 없으면 홀수인지 짝수인지를 출력시킨다...
        // 유저가 고른 것(짝수/홀수)만 출력시킨다.
        // console.log(number);
            // 홀수 짝수 출력
        // 왜 둘다 출력되는지 모르겠다.
        number = parseInt(number);
        // 숫자 나누기 2의 나머지가 1이면 홀수

        if(userSelOddeven=='홀수'){
            if(number%2 == 1){
                console.log(`${number}은(는) 홀수`);
            }
        }else{
            if(number%2 == 0){
                console.log(`${number}은(는) 짝수`);
            }
        }


        
    }
}


        // //만약 유저가 고른게 홀수면 홀수만 출력되도록 하기..
        // if(number%2 === 1){
        //     console.log(`${number}은(는) 홀수`);
        // }else if(number%2 == 0){
        //     // 아니면 짝수를 콘솔에 찍어준다.
        //     console.log(`${number}은(는) 짝수`);
        // }



// 유저가 고른 숫자에서 3,6,9가 나올 때마다 박수 짝을 출력하기..
// 유저가 고른 숫자만큼 for문 돌리기
// for(let i = 1; i<=userSelNum; i++){

//     // i의 수를 잘라서 배열에 집어넣는다.
//     let num = [];
//     i = String(i); // i를 배열에 넣기 위해 형변환
//     console.log(`num : ${num}`);

//     let j = [];
//     j = i.split('');
//     console.log(`j : ${j}`);

//     num = j[0];
//     num.push(i); //타입에러

//     console.log(`num : ${num}`); //num : 6,3 출력된다.
//     i = parseInt(i);

//     console.log(num);
//     console.log(num[0]);
//     console.log(num[1]);

// }



// 유저가 만약 짝수를 골랐으면 짝수만 나열하고, 홀수를 골랐으면 홀수만 나열하기

// console.log(`userSelOddeven : ${userSelOddeven}`);
// // 코드 줄이기
// switch(userSelOddeven){
//     case "짝수":
//         // 유저가 고른 숫자만큼 for문을 돈다.
//         for(let i = 1 ; i<=userSelNum ; i++){

//             // i의 수를 잘라서 배열에 집어넣는다.
//             let num = [];
//             i = String(i); // i를 배열에 넣기 위해 형변환
//             // num = i.split('');/
//             num.push(i.split(''));
//             // console.log(`num : ${num}`); //num : 6,3 출력된다.

//             // 홀수 짝수 출력
//             // 왜 둘다 출력되는지 모르겠다.
//             i = parseInt(i);
//             if(i%2 === 1){
//                 console.log('홀수');
//             }else{
//                 console.log(`${i}은(는) 짝수`);
//             }
            
//             // 배열의 값에 3이 있으면 박수짝을 출력하도록 한다.
//             // num.length는 12를 입력하면 j는 2가 된다.
//             // for(let j = 0; j<=num.length; j++){

//             //     // num 배열의 i번째 놈이 369이면 박수짝
//             //     // let ii = i;
//             //     // ii = String(ii);
//             //     // console.log("ii:"+ii)
//             //     console.log(`i : ${i}, j : ${j}, num : ${num}, num[j] : ${num[j]}`);
                
//             // }
//             // console.log(i);
//             // if(i==3||6||9){
//             //     console.log(`${i} 박수 짝!`);
//             // }

//             // // num의 길이에 따라..
//             // i = parseInt(i); // i를 계산에 사용하기 위해 형변환
            
//             // for(let i = 0; i<num.length; i++){
//             //     // 배열에 있는 숫자들을 int로 형변환해준다.
//             //     num[i] = parseInt(num[i]);
//             //     if(num[i]==3||6||9){
//             //         console.log('짝');
//             //     }else{
//             //         if(i%2 == 1){
//             //             console.log('홀수');
//             //         }else{
//             //             //console.log(i);
//             //             console.log(`${i}은(는) 짝수`);
//             //         }
//             //     }
//             // }

//         }
//     case "홀수":
//         if(userSelOddeven=='홀수'){
//             for(let i = 1 ; i<=userSelNum ; i++){
//                 if(i%2 == 1){
//                     console.log(`${i}은(는) 홀수`);
//                 }else{
//                     //console.log(i);
//                     //console.log(`${i}는 짝수`);
//                 }
//             }
//         }
//     default:
//         // alert('짝수, 홀수를 제대로 입력해주세요.');

// }


// // userSelNum(유저가 고른 숫자)를 잘라서 새로운 배열에 집어넣는다.
// let num = [];
// num = userSelNum.split('');
// // console.log(num);


// num 배열 번째를 각각 숫자로 변환시키고 새로운 변수에 담고 각각 비교한다..
// 만약 3, 6, 9와 같으면 그 맞은 개수만큼 짝을 출력한다.
// 유저가 고른 숫자에서 하면 안되고 for이 돌아갈 때 그 놈 값으로 해줘야 한다..
// num[i]
// for(let i = 0; i<num.length; i++){
//     // 배열에 있는 숫자들을 int로 형변환해준다.
//     num[i] = parseInt(num[i]);
//     if(num[i]==3||6||9){
//         console.log('짝');
//     }
// }


            // if(i%2 == 1){
            //     // console.log('홀수');
            // }else{
            //     //console.log(i);
            //     console.log(`${i}은(는) 짝수`);
            // }


// 유저가 고른 숫자를 문자에서 숫자로 형변환한다.
// userSelNum = parseInt(userSelNum);
// num = parseInt(num);


// if(userSelOddeven=='짝수'){
//     for(let i = 1 ; i<=userSelNum ; i++){
//         if(i%2 == 1){
//             // console.log('홀수');
//         }else{
//             //console.log(i);
//             console.log(`${i}은(는) 짝수`);
//         }
//     }
// }
// if(userSelOddeven=='홀수'){
//     for(let i = 1 ; i<=userSelNum ; i++){
//         if(i%2 == 1){
//             console.log(`${i}은(는) 홀수`);
//         }else{
//             //console.log(i);
//             //console.log(`${i}는 짝수`);
//         }
//     }
// }


// 입력받은 놈들을 Set 배열에 집어넣고 isNaN(value)해준다.
// let userSelect = new Set();
// userSelect = [...userSel];
// console.log(userSelect);
//  ['1', '2', '3', ',', '짝', '수'] 출력됨..

// 유저가 선택한 것중 숫자만 배열에 집어넣기 위해 배열을 만들어준다.
// let userSelNum = [];

// split으로 , 
// let 

// 만약 userSelect 배열의 i번째가 숫자이면 그 숫자를 새로운 숫자배열에 넣어준다.. ㅠㅠ
// for(let i = 0; i<userSelect.size; i++){
//     if(isNaN(userSelect[i])){
//         userSelNum = userSelNum.push(userSelect[i]);
//         console.log(userSelNum);
//     }
// }
// console.log(userSelNum);


// 만약 유저가 선택한 것중에 숫자가 있으면
// if(isNaN(userSelect)){
//     // 유저가 선택한 것을 배열에 넣어준다.
//     userSelNum = userSelect;
//     console.log();
// }


// // 유저에게 숫자를 입력받는다.
// let num = prompt('숫자를 입력해주세요.');
// console.log(`유저가 입력한 숫자 : ${num}`);

// // 유저에게 입력받은 글자수를 센다.
// let numLength = num.length;
// console.log(`유저가 입력한 숫자는 몇자리인가? ${numLength}자리이다.`);


// 숫자의 자리수를 잘라 만약 3/6/9이면 ..
// 1의자리수 num1에 저장, 2의자리수 num2에 저장, 3...
// let num1 = num.split(0,1);
// let num2 = num.split(1,2);
// let num3 = num.split(2,3);
// let num4 = num.split(3,4);


// for(let i = 1 ; i<=num ; i++){
//     console.log(i);
//     if(i%2 == 1){
//         console.log('홀수');
//     }else{
//         console.log('짝수');
//     }

//     // for문으로 숫자를 십의자리, 백의자리로 나눠 배열에 정의한다.
//     // for(let i = 1; i<=numLength ; i++){

//     //     // 만약 1의자리이면 numName라는 변수에 num1을 집어넣는다.
//     //     let numName = "num"+i; 
//     //     // 
//     //     let numi = $(numName); 

//     //     // 1의자리에 1의자리만큼을 잘라 넣어준다.
//     //     numi = num.split(i-1,i);

//     //     // 만약 3이 아니면 홀수짝수찍기..?
//     //     if(numi==3||6||9){
//     //         console.log('짝');
//     //     }
//     // }


//     // 만약 숫자에 3이 포함되면 포함된 개수만큼 짝을 출력해준다.
//     // if(i%3 == 0){
//     //     console.log('짝');
//     // }


// }

// index.js:14 1은 짝수입니다.
// index.js:9 5
// index.js:12 2은 홀수입니다.
// index.js:9 5
// index.js:14 3은 짝수입니다.
// index.js:9 5
// index.js:14 4은 짝수입니다.

// if(i/2 == 0.5 || 1){
//     console.log(`${i}은 홀수입니다.`);
// }else if(i/2 == 0){
//     console.log(`${i}은 짝수입니다.`);
// }

// 숫자를 2로 나눠서 1이면 홀수 2면 짝수
// 1을 2로 나누면 0.2
// if(num/2 == 1){
//     console.log('홀수');
// }