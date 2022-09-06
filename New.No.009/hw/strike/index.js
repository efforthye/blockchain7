// 과제 1. 스트라이크 게임(재귀함수를 써야할듯 숫자를 계속 줄어들도록)
// 일요일 저녁 9시까지 제출
// 기본 과제(숫자 야구 게임 알고리즘 상세하게 적어보기..)
// 설명 : https://namu.wiki/w/%EC%88%AB%EC%9E%90%EC%95%BC%EA%B5%AC
// 게임 플레이 : https://playentry.org/project/614eb542f7bcc40eae1d2267
// 정현, 재훈, 성진, 우석, 영준, 정규, 혜림
// 컴퓨터가 숫자 3개를 고른다.
// 사람이 숫자 3개를 입력한다.
// 숫자가 같고, 위치가 같으면 스트라이크이다.(컴1/유1, 컴2/유2, 컴3/유3)s
// 숫자만 같고 위치가 다르면 볼(ifelse내부에서 나머지중에같은숫자가있으면)b
// 같은 숫자가 없으면 아웃이다.(else에서같은숫자가암것도업스면)o
// 입력해서 몇번만에 3스트라이크(숫자입력횟수를카운트)
// 즉 숫자를 맞추는지 하는 게임이다.
// 컴 123 나 321 == 1스트라이크 2볼
// 컴 123 나 456 == 3아웃
// 아래에 해당하지 않는 사람들은 그림을 그려와
// https://app.diagrams.net/
//컴퓨터가 숫자를 3개 랜덤으로 선택한다.
//첫번째 숫자 정의,두번째 숫자 정의,세번째 숫자 정의
//첫번째 숫자와 두번째 숫자가 다른가, 두번째 숫자와 세번째 숫자가 다른가를 확인한다.
    //다르면 다시 선택하기 맞으면 넘어가기 뭐 그런 식으로~~..
//첫번째/세번째가 다르고 두번째/세번째가 다른지 확인 하고 다르면 넘어가고 아니면 다시선택
// 1부터 9까지의 랜덤 숫자 생성해 conNum1 변수에 집어넣음


////////// 스트라이크 게임 //////////
let comNum1;
let comNum2;
let comNum3;
let userNum1;
let userNum2;
let userNum3;
let strike = 0;
let boll = 0;
let out = 0;
let count = 0;

// 컴퓨터의 첫번째 랜덤 숫자를 생성한다. (1~9)
comNum1 = parseInt(Math.random()*9+1);
console.log("comNum1 = "+comNum1);

// 일단 do의 내용을 실행해 comNum2에 랜덤한 수를 집어넣는다.
do{
    // 컴퓨터의 두번째 랜덤 숫자를 생성한다.
    comNum2 = parseInt(Math.random()*9+1);
    console.log("comNum2 = "+comNum2);
}while(comNum1===comNum2){
    // 만약 숫자가 같으면 do의 내용을 다시 실행한다.
}
// comNum3에 중복되지 않는 랜덤한 수를 집어넣는다.
do{
    comNum3 = parseInt(Math.random()*9+1);
    console.log("comNum3 = "+comNum3);
}while(comNum3==comNum2||comNum3==comNum1)

// 컴퓨터가 고른 숫자를 차례로 나열한다.
console.log("컴퓨터가 고른 숫자 : "+comNum1,comNum2,comNum3);

alert(':: 스트라이크 게임 ::');
alert('숫자는 맞지만 위치가 틀렸을 때는 볼.\n숫자와 위치가 전부 맞으면 스트라이크.\n숫자와 위치가 전부 틀리면 아웃. ');
alert('컴퓨터의 숫자를 모두 맞춰 3스트라이크가 되면 게임 승리입니다.');

do{
    // 게임 플레이어에게 숫자를 3개 입력받는다.
    let userNum = prompt('1~9 사이의 겹치지 않는 숫자를 순서에 상관없이 3개 입력해주세요..\nex) 572');
    count++;

    // 각각 하나씩 잘라 userNum1~3에 집어넣는다.
    userNum1 = userNum.substring(0,1);
    userNum2 = userNum.substring(1,2);
    userNum3 = userNum.substring(2,3);

    // 문자를 숫자로 형변환한다.
    userNum = parseInt(userNum);
    console.log(typeof(userNum3));

    // 스트라이크
    if(userNum1==comNum1){
        strike++;
    }
    if(userNum2==comNum2){
        strike++;
    }
    if(userNum3==comNum3){
        strike++;
    }
    // 볼
    if(userNum1==comNum2||userNum1==comNum3){
        boll++;
        console.log('1번째 볼')
    }
    if(userNum2==comNum1||userNum2==comNum3){
        boll++;
        console.log('2번째 볼')
    }
    if(userNum3==comNum2||userNum3==comNum1){
        boll++;
        console.log('3번째 볼')
    }

    // 아웃
    // if(userNum1!=comNum1&&userNum1!=comNum2&&userNum1!=comNum3){
    //     out++;
    // }
    // if(userNum2!=comNum1&&userNum2!=comNum2&&userNum2!=comNum3){
    //     out++;
    // }
    // if(userNum3!=comNum1&&userNum3!=comNum2&&userNum3!=comNum3){
    //     out++;
    // }
    // 아웃은 볼과 스크라이크를 더한 값을 3에서 빼는 식으로 셀 수도 있으니 코드를 줄여보기.

    // 새로운 아웃
    out = 3-(strike+boll);

    // 스트라이크 볼 아웃 개수를 출력해준다.
    alert(`${strike}스트라이크, ${boll}볼, ${out}아웃 입니다.`);

    // 만약 3strike가 아니라면 횟수를 초기화시킨다.
    if(strike!=3){
        strike = 0;
        boll = 0;
        out = 0;
    }else{
        alert(`축하합니다. ${count}번만에 맞추셨습니다.\n보통 10번 내외로 맞춥니다.`);
    }
}while(strike<3)


































// if(strike==3){
    
// }

// console.log(typeof(count));


// // 게임 플레이어에게 숫자를 3개 입력받는다.
// let userNum = prompt('1~9 사이의 겹치지 않는 숫자를 순서에 상관없이 3개 입력해주세요..\nex) 572');
// let count;
// count++;

// // 각각 하나씩 잘라 userNum1~3에 집어넣는다.
// userNum1 = userNum.substring(0,1);
// userNum2 = userNum.substring(1,2);
// userNum3 = userNum.substring(2,3);

// // 문자를 숫자로 형변환한다.
// userNum = parseInt(userNum);
// console.log(typeof(userNum3));

// let strike = 0;
// let boll = 0;
// let out = 0;

// // 스트라이크
// if(userNum1==comNum1){
//     strike++;
// }
// if(userNum2==comNum2){
//     strike++;
// }
// if(userNum3==comNum3){
//     strike++;
// }
// // 볼
// if(userNum1==comNum2||userNum1==comNum3){
//     boll++;
//     console.log('1번째 볼')
// }
// if(userNum2==comNum1||userNum2==comNum3){
//     boll++;
//     console.log('2번째 볼')
// }
// if(userNum3==comNum2||userNum3==comNum1){
//     boll++;
//     console.log('3번째 볼')
// }
// // 아웃
// if(userNum1!=comNum1&&userNum1!=comNum2&&userNum1!=comNum3){
//     out++;
// }
// if(userNum2!=comNum1&&userNum2!=comNum2&&userNum2!=comNum3){
//     out++;
// }
// if(userNum3!=comNum1&&userNum3!=comNum2&&userNum3!=comNum3){
//     out++;
// }

// // 스트라이크 볼 아웃 개수를 출력해준다.
// alert(`${strike}스트라이크, ${boll}볼, ${out}아웃 입니다.`);

// 개수들을 초기화시킨다.
// 만약 3스트라이트면

// 만약 userNum1과 comNum1 혹은 22 33이 같다면 같은 개수만큼 스트라이크
// userNum1과 comNum1~3이 같다면 볼+1, 2와1~3이 같다면 볼+1 3과 1~3이 같다면 볼1+
// 전부 다르다면 out
// 카운트는 시도횟수마다 +1씩
// 3스트라이크가 다 도달하면 게임 종료하고 카운트 횟수 출력하면서 축하해주기..




// 문자열중 공백이나 ,이나 그런 것들을 제거하고 숫자만 다시 userNum에 집어넣는다
// 숫자가 3개가 아니면 다시 입력하도록 한다
// 숫자가 3개라면 그것을 각각 잘라서 첫번째는 userNum1에 넣고 2는2 3은3에 넣고 const로저장시킨다.

// 만약 겹치는 숫자나 1~9사이의 숫자가 아니라면 다시 값을 입력받는다.
// 숫자는 컴퓨터의 숫자처럼 서로 겹쳐지지 않아야 한다.
// 만약 넘1과컴1혹은넘2컴2혹은넘3컴3이같으면 스트라이크1,2,3
// 
////////// 스트라이크 게임 end //////////


























// if(comNum1==comNum2){
//     comNum2 = parseInt(Math.random()*9+1);
//     if(){

//     }
// }

// function을 사용해 맞을 때까지 재귀함수 사용하기
// function yesno(){
    
// }


// 2번째 숫자도 랜덤 숫자를 생성해 conNum1과 같으면 다를 때까지 다시 생성한다. 반복
// for문으로..

// for(let i = 1; comNum1!=comNum2 ;comNum2 = parseInt(Math.random()*9+1) ){
//     console.log(comNum1);
//     console.log(comNum2);
// }


// console.log(comNum1);
// console.log(comNum2);
// console.log(comNum3);

// function factorial(num){
//     if(num == 1) return 1;
//     console.log(`현재숫자 : ${num}`);
//     return num * factorial(num-1);
//     // return에서 factorial 함수가 factorial 함수를 호출했다. (이해 잘하기)
// }

// // 피보나치 수열(재귀함수)
// function pibonachi(num){
//     pibonachi();
// }




























// 2. 피보나치 수 1, 1, 2, 3, 5, 8
// function numGenerater(num){
//     if(num == 1) return 1;
//     //console.log("현재 숫자 : "+num+" / 곱셈 : "+num+" * "+numGenerater(num-1));
//     // console.log(`현재 숫자 : ${num} / 곱셈 : ${num} * `+numGenerater(num-1)+``);
//     console.log(`현재숫자 : ${num}`);
//     return num * numGenerater(num-1);
//     // return에서 factorial 함수가 factorial 함수를 호출했다. (이해 잘하기)
// }
// console.log(numGenerater(1)); //여기서부터 읽어야 한다.
// console.log(numGenerater(2));