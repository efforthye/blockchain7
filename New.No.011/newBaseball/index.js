// 컴퓨터의 선택에 대한 배열을 정의함
let comSel = [];

// 시도한 횟수
let count = 0;

// new Set() : 배열처럼 사용한다. 사용할 때는 new Set()을 변수에 정의해 변수를 사용한다.
// new Set()은 배열은 배열인데 내부에서 중복을 처리해주는 배열이다.
// new Set() : 배열은 아니라고 한다. 배열에서 사용되는 메서드를 사용할 수 없다.
// 주로 clear(), add(), size를 사용한다.
// clear() : 메서드, add() : 메서드, size : 변수(프로퍼티)
const comSet = new Set();

// 게임 시작 버튼을 누르면 실행된다.
function reset(){

    // 컴퓨터의 선택(데이터)을 초기화한다.
    comSel = [];
    comSet.clear();
    count = 0;

    // HTML의 내용도 리셋(초기화)시켜준다.
    document.getElementById('player-sel').innerHTML = '<th>Player Select</th>';
    document.getElementById('count').innerHTML = '<th>Count</th>';
    document.getElementById('strike').innerHTML = '<th>Strike</th>';
    document.getElementById('ball').innerHTML = '<th>Ball</th>';
    document.getElementById('out').innerHTML = '<th>Out</th>';

    // 만약 컴퓨터 선택값이 중복되어 배열값이 3아래가 되면 다시 랜덤된 수를 넣어준다.
    while(comSet.size < 3){

        // set(comSet=new Set())은 중복을 알아서 처리해준다.
        // comSet에 0~9까지의 랜덤 정수를 추가해주며,
        // 만약 중복되는 수라면 알아서 중복되지 않게 처리해준다고 한다.
        comSet.add(parseInt(Math.random()*10));

    }
    console.log("comSet : "+comSet);

    // ...은 스프레드라고 한다. ... 스프레드는 매우매우 중요하다.
    // 배열, 객체 등 연속되는 정보(데이터)들을 하나하나 분해해서 배열 내에 넣어 준다.
    // 만약 comSet.size가 3이면 [comSet[0], comSet[1], comSet[2]]와 같은 말이다.
    // 배열이면 comSet.size가 아니라 comSet.length로 사용됨..
    comSel = [...comSet];

    console.log("comSel : "+comSel);
    alert('컴퓨터는 준비를 마쳤다. 맞춰봐라, 우리 귀요미?');
}

// 숫자 선택 버튼을 누르면 실행된다.
function selectNum(){

    // 만약 시작버튼(컴퓨터의 선택이 없으면)을 누르지 않고 선택을 하면 리턴을 해준다.
    // 게임을 진행하지 않도록 selectNum() 함수를 멈춰버린다.
    if(!comSel.length){
        alert('우리 귀요미, 게임 시작 버튼을 먼저 누르고 숫자를 선택해야겠지?');
        return
    };

    // 플레이어의 선택과 스트라이크, 볼 개수를 초기화시킨다.
    let playerSel = '';
    let strike = 0;
    let ball = 0;

    // html 찾아서 입력받을 수 있도록 미리 정의해둔다.(표를 변환하기 위해)
    // id를 기준으로 엘리먼트를 검색해서 변수에 정의한다.
    const playerSelTr = document.getElementById('player-sel');
    const countTr = document.getElementById('count');
    const strikeTr = document.getElementById('strike');
    const ballTr = document.getElementById('ball');
    const outTr = document.getElementById('out');

    // id를 기준으로 받아온 값을 출력시켜본다.
    // console.log(`playerSelTr : ${playerSelTr}, countTr${countTr}, strikeTr : ${strikeTr}, ballTr : ${ballTr}, outTr : ${outTr}`);

    // 플레이어가 숫자 3개를 고르지 않았을 때
    while(playerSel.length !== 3){
        playerSel = prompt('우리 귀요미, 3개의 숫자를 입력해봐.\n0으로 시작 가능, 중복 숫자 불가능.');
        
        // 만약 플레이어가 선택을 하지 않고 다른 행위를 한다면
        if(!playerSel) return alert('포기하지마.');

        // tempLength에 현재 입력된 숫자의 개수를 정의한다.
        const tempLength = playerSel.length;

        // 플레이어가 입력한 수를 배열로 변환하고, Set에 세팅하여 중복을 없앤다.
        playerSel = [...new Set(playerSel.split(''))]
        // 중복을 없앤 플레이어의 수를 배열로 변환하고, map을 이용해 정수로 변환시킨다.
        .map((item) => parseInt(item))
        // 정수의 배열을 join()메서드를 이용해 하나의 문자열로 변환시킨다.
        .join('');

        // playerSel의 크기가 이전과 다르면 중복된 숫자가 있었다는 것이다.
        // 때문에 playerSel을 빈 값으로 정의한다.
        // playerSel에 NaN(문자)이 들어갔으면 역시 초기화시켜준다.
        // ||은 or이며, -1보다 크면 있다는 얘기다.
        if(playerSel.length != tempLength || playerSel.indexOf('NaN') > -1){
            playerSel = '';
        }
    }

    // strike와 ball을 0으로 초기화시켜준다.
    strike = ball = 0;

    // 스트라이크와 볼 값을 카운트해준다.
    // forEach의 매개변수함수(배열, 문자열의아이템, 인텍스(순서)) => {내용}
    comSel.forEach((item, index) => {
        // 아이템과 playerSel의 index번째 아이템이 같으면 strike++을 해준다.
        if(item == playerSel[index]) strike++;
        // 아이템이 playerSel에 포함되어 있으면 ball++을 해준다.
        else if(playerSel.includes(item)) ball++;
    });

    // 각 tr 태그에 td 태그를 추가한다.
    // playerSel, scrike, ball 값은 카운트해준 뒤에 출력해줘야 하므로 여기에 입력한다.
    playerSelTr.innerHTML += '<td>'+ playerSel + '</td>';
    countTr.innerHTML += '<td>'+ ++count + '</td>';
    strikeTr.innerHTML += '<td>'+ strike + '</td>';
    ballTr.innerHTML += '<td>'+ ball + '</td>';
    // outTr.innerHTML += '<td>'+ out + '</td>'; // 우리는 out을 사용하지 않았다.
    outTr.innerHTML += '<td>'+ (3-strike-ball) + '</td>';

    // 끝났으니 플레이어의 선택을 초기화한다. 밖에서 이미 해서 굳이 또 안해도 된다고 한다.
    // playerSel = '';

    // 만약 3개의 숫자를 다 맞췄으면
    if(strike === 3){
        // 시도 횟수와 축하한다는 멘트를 띄워준다.
        alert(`우리 귀요미, ${count}번 만에 맞췄네? 축하해.`);

        // while에서 걸리게 하기 위해 comSel을 초기화시켜준다.
        comSel=[];
    }else{
        alert(`strike : ${strike}, ball : ${ball}, out : ${3-strike-ball}`);
    }



}