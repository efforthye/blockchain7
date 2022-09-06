const comSel = [];

// 0부터 1미만으로 나오기 때문에 10을 곱해줘야 한다.
// Math.random() 메서드는 0 =< number && number < 1
// 함수로 묶어두고 호출하지 않으면 이 내용이 돌아가지 않기 때문에 좋다..
function comSelectFunc(){
    for(
        let tempNum = parseInt(Math.random()*10); 
        comSel.length<3;
        tempNum = parseInt(Math.random()*10)
        
    ){
        console.log(tempNum);
        if(!comSel.includes(tempNum)) comSel.push(tempNum);
    }
}

function comSelectFunc1(){
    for(;comSel.length<3;){
        // for의 변수 초기화와 반복 후 변경점을 삭제했다.
        const tempNum = parseInt(Math.random()*10);
        // for 반복 내용에 tempNum을 초기화하여 
        // comSel 배열 확인 후 배열에 추가하도록 수정했다.
        // 왜 comSelectFunc에서 for변수 초기화는 let인데 여기서는 const인가?
        // comSelectFunc에서는 변수 초기화 후에 해당 변수를 계속 재정의하여 확인해야하지만
        // 여기서(comSelectFunc1)는 반복 내용에서 변수를 초기화하기 때문에
        // 재정의가 필요하지 않아 const가 가능하다. 
        // 실제로 for문 안에서는 변수를 const로 선언하는 경우가 많다고 한다.(사용하고 버릴 거니까)
        console.log(tempNum);
        if(!comSel.includes(tempNum)) comSel.push(tempNum);
    }
}

// 위의 for문을 while문으로 바꾼 새로운 함수이다.(comSelectFunc1은 조건만 있기 때문에 while대체가능)
function comSelectFunc2(){
    while(comSel.length<3){
        const tempNum = parseInt(Math.random()*10);
        console.log(tempNum);
        if(!comSel.includes(tempNum)) comSel.push(tempNum);
    }
}

// comSelectFunc();
// comSelectFunc1();
comSelectFunc2();
// 함수를 호출함으로서 컴퓨터의 숫자를 3개 정한다.
// 3개의 함수 중 어떤 걸 선택해도 상관없다. (단 여러 개 호출 시 아래에서 호출된 것은 무시된다.)
// 위에서부터 읽어오기 때문이라고 한다. 이미 반복조건(comSel.length<3)이 충족되었기 때문에 실행하지 않는다.

console.log(comSel);

// 플레이어 셀렉트(선택) 정하기 전에 카운트를 추가해 준다.
let count = 0;

while(true){
    // 플레이어가 입력할 배열을 만들어준다.
    let playerSel = [];

    // 플레이어 배열의 값이 3개보다 적으면..
    while(playerSel.length<3){
        const tempInput = prompt('3자리의 숫자를 입력하시오. \n0으로 시작 가능, 중복 숫자 불가'); ;
        // 입력 창에 대해서 취소를 누르면 tempInput은 정의되지 않아 undefined를 갖게된다.
        // 그래서 length를 갖지 못해 if에서 문제가 생기게 된다.
        if(!tempInput){ // 빈값 혹은 취소시 게임 종료
            alert('게임을 종료합니다.');
            break;
        }

        // 사용자 3글자 입력 체크
        if(tempInput.length != 3 || isNaN(parseInt(tempInput))){
            // isNaN 함수는 매개변수가 NaN, 즉 숫자가 아닌 문자를 강제로 숫자로 바꿨는지 확인해준다.
            // 그럼 왼쪽에서는 3인가아닌가를 확인하고, 오른쪽에서는 숫자인가아닌가를 확인한다.(아니면다시)
            continue; // continue는 아래의 코드를 실행하지 않고 위로 반복을 다시 시작한다.
            // 만약 길이가 3이 아니면 와일부터 다시 시작한다는 의미이다. 와일을 다시 실행시키는놈임.
            // continue를 없애고 나머지 밑에 두줄을 else에 넣어줘도 된다고 한다.(이해 잘안됨)
        }

        // 사용자 입력 숫자 중복 체크
        // 스플릿은 한자한자 끊어주는 것이다..
        tempInput.split('').forEach(item=>{
            // forEach는 배열의 아이템을 하나하나 가져와 매개변수에 전달하여 함수를 실행한다.(중요)
            // 화살표 함수 (item) => {내용}   
            // 여기서 item은 tempInpuut.split('') 배열의 아이템 하나하나이다.
            // function(item){내용} 으로 대체 가능하다. (80~84번줄)
            if(!playerSel.includes(parseInt(item))) playerSel.push(parseInt(item));
            // 컴퓨터가 선택한 랜덤 수는 정수이기 때문에 8, 24, 36번줄 참고..? 
            // 플레이어가 입력한 숫자 또한 정수로 정의해준다.
            // 컴퓨터가 선택한 랜덤 수와 마찬가지로 중복되면 안되니까 
            // playerSel 배열에 숫자가 없는지 확인 후 추가한다.
        });
        console.log(playerSel);

        // 사용자 입력 숫자 중복 체크 - 2번째 방법
        // // 위의 forEach(tempInput.split('').forEach)는 아래의 코드로 대체할 수 있다...
        // // tempArr이라는 변수르 배열을 정의한다. 왜? 그때그때마다 문자열(tempInput)을
        // // split 메서드를 사용하여 자르면 시간이 그만큼 늘어난다.
        // // 배열을 사용했기 때문에 item을 itempArr[i]로 바꿔준다.
        // // 컴퓨터는 숫자를 0부터 세기 때문에 i(index)를 0부터 시작하여 tempArr배열 끝까지
        // // (길이 -1까지..) 코드를 실행한다.
        // const tempArr = tempInput.split('');
        // for(let i = 0; i<tempArr.length; i++){
        //     if(!playerSel.includes(parseInt(tempArr[i]))) playerSel.push(parseInt(tempArr[i]));
        // }
        // console.log(playerSel);
        
        // 배열에 숫자 3개가 들어오지 않았다면 배열을 초기화시킨다. (배열은 0부터 시작인거 중요)
        // 어차피 3이 아니면 다시 선택받아야 하니까 잘못된 입력을 지워준다.
        if(playerSel.length != 3){
            playerSel = [];
        }
    }

    // 플레이어 선택이 없으면 종료한다.
    // 입력값이 없을 경우 playerSel은 빈 배열이 되므로 
    // 배열의 길이를 확인해 break로 while을 종료해준다.(예외처리)
    if(!playerSel.length){
        break;
    }

    // 플레이어 입력값을 출력해준다.
    console.log(`플레이어 선택(정상입력) : ${playerSel}`);

    // 컴퓨터 숫자 변수에 에 컴퓨터 배열 1번째를 넣어준다. 
    let tempNumber = comSel[0];

    // 스트라이크, 볼, 아웃을 정의해준다.
    let strike = 0;
    let ball = 0;
    let out = 0;

    // 컴퓨터의 첫번째 자리를 확인한다.
    // 플레이어 1과 컴퓨터 1이 같으면 strike++
    if(playerSel[0]== tempNumber){
        strike++;
    // 플레이어 2와 컴퓨터 1이 같거나(or) 플레이어 3과 컴퓨터 1이 같으면 ball++
    }else if(playerSel[1]==tempNumber||playerSel[2]==tempNumber){
        ball++;
    }else{
    // 그게 아니면 out++
        out++;
    }

    // 컴퓨터의 두번째 자리를 확인한다.
    tempNumber = comSel[1];
    if(playerSel[0]== tempNumber){
        strike++;
    }else if(playerSel[1]==tempNumber||playerSel[2]==tempNumber){
        ball++;
    }else{
        out++;
    }

    // 컴퓨터의 세번째 자리를 확인한다.
    tempNumber = comSel[2];
    if(playerSel[0]== tempNumber){
        strike++;
    }else if(playerSel[1]==tempNumber||playerSel[2]==tempNumber){
        ball++;
    }else{
        out++;
    }

    // 3strike 이면 게임을 종료한다.
    if(strike==3){
        alert(`${count}번 만에 성공하셨습니다.`);
        break; //while문을 끝내준다.(중요)
    }

    // 스크라이크가 3일 경우 위에서 break되어 이 코드는 실행되지 않는다.
    // 카운트는 증가시켜 출력하고, 스크라이크/볼/아웃을 출력해준다.
    alert(`${++count}번 시도함. strike : ${strike} / ball : ${ball} / out : ${out}`)
}



while(true){
    break;
}
// 왜 true를 넣나? strike넣고 싶으면 while문 밖에서 선언해야 한다.
// 왜 break로 끊나? break와 true는 상관없다.
let tempCount = 0;
while(tempCount<100){
    console.log(++tempCount);
    if(tempCount==10){
        break;
    }
}










// for(let i = 0; i<3 ; i++){
//     tempNumber = comSel[i];
//     if(playerSel[0]== tempNumber){
//         strike++;
//     }else if(playerSel[1]==tempNumber||playerSel[2]==tempNumber){
//         ball++;
//     }else{
//         out++;
//     }
// }


// 화살표 함수 (item) => {내용} 
// function(item){내용} 으로 대체 가능하다.

// forEach() 메서드 잘 알기(중요)






// continue는 다시 시작하는놈(중요)











// includes() 메서드는 얘가 포함되어 있냐고 물어보는 것이다. 있으면 true
// comSel이라는 배열에 tempNum이라는 매개변수가 포함되어 있는지 boolrean값을 반환한다.
// for는 [변수 초기화] 1번을 제일먼저 실행하고, 조건을 확인한 뒤 내용을 실행한다.
// 내용 실행이 끝나면 [반복 후 변경점] 3번째 코드를 실행한다.
// [반복 후 변경점] 코드 실행 후 조건을 확인해 true면 내용을 실행한다.
// 이후 [조건] 2로 돌아가서 다시 진행한다.


// for(
//     let tempNum = parseInt(Math.random()*10); 
//     comSel.length<3;
//     tempNum = parseInt(Math.random()*10)
//     // for()의 기본이 (변수 초기화;조건;반복후변경점)이다. 이건 for() 괄호 안이다.
//     // 처음에는 변수를 정의하면서 값을하나 넣어주는거고, 마지막은 값을하나더 넣어주는거임..
// ){
//     console.log(tempNum);
//     if(!comSel.includes(tempNum)) comSel.push(tempNum);
//     // 만약 컴셀 배열에 중복된 값이 없으면 comSel 배열에 tempNum을 넣어준다.
// }