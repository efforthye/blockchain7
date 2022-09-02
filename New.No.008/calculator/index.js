// 버튼 클릭 횟수
let count = 0;

// 1~2번째 선택 값
let num1 = 0;
let num2 = 0;

// 결과 값
let calculNum = 0;
let type = '';

// 계산
function calculate(calculate){
    if(count == 0){
        console.log('숫자를 먼저 선택해주세요.');
    }else if(count == 1){
        console.log('두 번째 숫자를 선택해주세요.');
    }else{
        switch(calculate){
            case 'plus':
                type = 'plus';
                calculNum = num1 + num2;
                console.log('덧셈을 선택하셨습니다.');
                count++;
                break;
        
            case 'minus':
                type = 'minus';
                calculNum = num1 - num2;
                console.log('뺄셈을 선택하셨습니다.');
                count++;
                break;
            case 'multi':
                type = 'multi';
                calculNum = num1 * num2;
                console.log('곱셈을 선택하셨습니다.');
                count++;
                break;
            case 'division':
                type = 'division';
                calculNum = num1 / num2;
                console.log('나눗셈을 선택하셨습니다.');
                count++;
                break;
            case 'percent':
                type = 'percent';
                calculNum = num1 % num2;
                console.log('나머지를 선택하셨습니다.');
                count++;
                break;
            default:
                console.log('어떻게 이런일이..?');
        }
    }
}

// 결과 출력
function result(){
    if(type == ''){
        console.log('숫자와 계산 방식을 먼저 입력해주세요.');
    }else{
        if(type == 'plus'){
            type = "더하기";
        }else if(type == 'minus'){
            type = "빼기";
        }else if(type == 'multi'){
            type = "곱하기";
        }else if(type == 'division'){
            type = "나누기";
        }else if(type == 'percent'){
            type = "나머지";
        }else{
            console.log('세상에 이런일이..');
        }
        console.log(`${num1}과(와) ${num2}의 ${type} 결과값은 ${calculNum}입니다.`);
        alert(`${num1}과(와) ${num2}의 ${type} 결과값은 ${calculNum}입니다.`);
        count = 0;
    }
}

// 순서
function num(i){
    if(count == 0){
        num1 = i;
        count++;
        // console.log("첫 번째 숫자는 "+num1+"을(를) 선택하셨습니다.");
        console.log(`첫 번째 숫자는 ${num1}을(를) 선택하셨습니다.`);
    }else if(count == 1){
        num2 = i;
        count++
        console.log(`두 번째 숫자는 ${num2}을(를) 선택하셨습니다.`);
    }
}





// 피보나치?

///////////// = 추가 전 코드 /////////////
// function num(i){
//     if(count == 0){
//         num1 = i;
//         count++;
//         console.log("첫 번째 숫자는 "+num1+"을(를) 선택하셨습니다.");
//     }else if(count == 1){
//         num2 = i;
//         count++
//         console.log("두 번째 숫자는 "+num2+"을(를) 선택하셨습니다.");
//     }else{
//         count = 0;
//         num1 = 0; num2 = 0;
//         console.log("다시 입력해 주세요.");
//     }
// }

// let calculNum = 0;
// function calculate(calculate){
//     if(count == 0){
//         console.log('숫자를 먼저 선택해주세요.');
//     }else if(count == 1){
//         console.log('두 번째 숫자를 선택해주세요.');
//     }else{
//         switch(calculate){
//             case 'plus':
//                 calculNum = num1 + num2;
//                 console.log(`${num1} 더하기 ${num2}은(는) ${calculNum}입니다.`);
//                 alert(`${num1} 더하기 ${num2}은(는) ${calculNum}입니다.`);
//                 break;
            
//             case 'minus':
//                 calculNum = num1 - num2;
//                 console.log(`${num1} 빼기 ${num2}은(는) ${calculNum}입니다.`);
//                 alert(`${num1} 빼기 ${num2}은(는) ${calculNum}입니다.`);
//                 break;

//             case 'multi':
//                 calculNum = num1 * num2;
//                 console.log(`${num1} 곱하기 ${num2}은(는) ${calculNum}입니다.`);
//                 alert(`${num1} 곱하기 ${num2}은(는) ${calculNum}입니다.`);
//                 break;

//             case 'division':
//                 calculNum = num1 / num2;
//                 console.log(`${num1} 나누기 ${num2}은(는) ${calculNum}입니다.`);
//                 alert(`${num1} 나누기 ${num2}은(는) ${calculNum}입니다.`);
//                 break;

//             case 'percent':
//                 calculNum = num1 % num2;
//                 console.log(`${num1}와 ${num2} 의 나머지는 ${calculNum}입니다.`);
//                 alert(`${num1}와 ${num2} 의 나머지는 ${calculNum}입니다.`);
//                 break;

//             default:
//                 console.log('어떻게 이런일이..?');
//         }
//         count = 0;
//     }
// }
///////////// = 추가 전 코드 /////////////



// 순서
// function num(i){
//     if(count == 0){
//         num1 = i;
//         count++;
//         // console.log("첫 번째 숫자는 "+num1+"을(를) 선택하셨습니다.");
//         console.log(`첫 번째 숫자는 ${num1}을(를) 선택하셨습니다.`);
//     }else if(count == 1){
//         num2 = i;
//         count++
//         console.log(`두 번째 숫자는 ${num2}을(를) 선택하셨습니다.`);
//     }else if(count == 2){
//         count++
//         console.log(`계산 방식은 ${type}를 선택하셨습니다.`);
//     }else{
//         count = 0;
//         num1 = 0; num2 = 0;
//         type = '';
//         console.log("다시 입력해 주세요.");
//     }
// }

// const plus = '+';


// function plus(plus){
//     if(count == 0){
//         console.log('숫자를 먼저 선택해주세요.');
//     }else if(count == 1){
//         console.log('두 번째 숫자를 선택해주세요.');
//     }else{
//         plus = num1 + num2;
//         count = 0;
//         console.log(`${num1} 더하기 ${num2}은(는) ${plus}입니다.`);
//         alert(`${num1} 더하기 ${num2}은(는) ${plus}입니다.`);
//     }
// }

// function minus(minus){
//     if(count == 0){
//         console.log('숫자를 먼저 선택해주세요.');
//     }else if(count == 1){
//         console.log('두 번째 숫자를 선택해주세요.');
//     }else{
//         minus = num1 - num2;
//         count = 0;
//         console.log(`${num1} 빼기 ${num2}은(는) ${minus}입니다.`);
//         alert(`${num1} 빼기 ${num2}은(는) ${minus}입니다.`);
//     }
// }

// function multi(multi){
//     if(count == 0){
//         console.log('숫자를 먼저 선택해주세요.');
//     }else if(count == 1){
//         console.log('두 번째 숫자를 선택해주세요.');
//     }else{
//         multi = num1 * num2;
//         count = 0;
//         console.log(`${num1} 곱하기 ${num2}은(는) ${multi}입니다.`);
//         alert(`${num1} 곱하기 ${num2}은(는) ${multi}입니다.`);
//     }
// }

// function division(division){
//     if(count == 0){
//         console.log('숫자를 먼저 선택해주세요.');
//     }else if(count == 1){
//         console.log('두 번째 숫자를 선택해주세요.');
//     }else{
//         division = num1 / num2;
//         count = 0;
//         console.log(`${num1} 나누기 ${num2}은(는) ${division}입니다.`);
//         alert(`${num1} 나누기 ${num2}은(는) ${division}입니다.`);
//     }
// }

// function percent(percent){
//     if(count == 0){
//         console.log('숫자를 먼저 선택해주세요.');
//     }else if(count == 1){
//         console.log('두 번째 숫자를 선택해주세요.');
//     }else{
//         percent = num1 % num2;
//         count = 0;
//         console.log(`${num1}와 ${num2} 의 나머지는 ${percent}입니다.`);
//         alert(`${num1}와 ${num2} 의 나머지는 ${percent}입니다.`);
//     }
// }


