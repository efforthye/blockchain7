console.log(Math.random());
// console에 뜨지 않는다면 미리 새 창을 켜놓고 개발자도구를 켠 다음 주소를 복사해 붙여 넣는다.

// parseInt(***) 는 정수화하는 함수이다.
const comSel = parseInt(Math.random() * 99 + 1);
// 컴퓨터 선택 완료

console.log(comSel);


// let playerSel; //do 밖에서 미리 선언해주어야 while 안에서도 쓸 수 있다. ㄴㄴ
let playerSel;
let count = 0;
let max = 100;
let min = 0;
let updown = '';
const maxCount = parseInt(prompt('몇 번 만에 맞출래? 숫자로만 입력해봐.\n보통은 7번 내외로 맞춘단다.'));
// maxCount = parseInt(maxCount);

do{
    // playerSel = prompt(`숫자를 선택해 주세요.\n컴퓨터가 선택한 숫자를 맞추시면 됩니다.`)
    //do 밖에서 미리 선언해주어야 while 안에서도 쓸 수 있다. ㄴㄴ
    playerSel = prompt(`숫자를 선택해 주세요.\n컴퓨터가 선택한 숫자를 맞추시면 됩니다.\n최소 : ${min} 최대 : ${max}\n남은횟수 : ${maxCount-count}\n${updown}`);
    playerSel = parseInt(playerSel);

    // 리터널 템플릿은 엔터를 치고 프롬프트를 계속 작성할 수 있다.
    // 프롬프트로 받은 값은 string이다.
    // parseInt는 정수형으로 바꿔줌으로 number이 된다.,=

    
    //예외처리
    // if(min>playerSel || max<playerSel){ //둘중 하나만 참이어도 실행됨
    if(min>=playerSel || max<=playerSel){
        // 최소와 최대 사이의 값만 확인하기 위해 최소 미만과 최대 초과를 먼저 처리한다.
        console.log("1부터 100까지만 입력해주세요.");
    }

    //숫자맞추기
    if(playerSel===comSel){
        //count++;
        console.log(`${++count}번 만에 맞추셨네요, 축하합니다.`);
        break;
    }else if(playerSel > comSel){
        //플레이어가 선택한 숫자가 컴퓨터가 선택한 숫자보다 크다
        max = playerSel;
        // max가 현재 플레이어가 선택한 숫자가 된다.

        console.log("DOWN!");
        updown = "DOWN";
        count++;
        // 카운트를 플레이어가 입력했을 때마다 하나씩 증가시킨다.
        // 정상적인 숫자를 입력했을 때만 카운트를 늘리도록 UP, DOWN일때 카운트를 추가한다.
    }else if(playerSel<comSel){
        min = playerSel;
        console.log("UP!");
        updown = "UP";
        count++;
        // 카운트를 플레이어가 입력했을 때마다 하나씩 증가시킨다.
    }else{
        console.log("숫자만 입력해라.");
        updown = "숫자만 입력해라.";
    }
}while(playerSel !== comSel && count<maxCount)
if(count > maxCount){ 
    console.log("제한 횟수를 초과했습니다. 풉.....");
}
// 컴퓨터가 숫자 선택 후 플레이어가 선택하는 것은 계속 반복되야 한다.
// 플레이어가 컴퓨터의 숫자를 맞출 때까지..
// 선생님은 만약 숫자가 0이되면 참이 되니까 !count로 사용한다고 한다.

