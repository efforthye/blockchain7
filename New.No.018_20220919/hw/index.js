alert(":: 가위바위보 게임 ::");

// 컴퓨터의 게임 진행 상태 : 1이면 게임중 아니면 게임중아님
let game = 0;

// 가위바위보 실행중 상태
let kababo = 0;

// 유저 선택 가위바위보를 전역변수로 미리 정의해둔다.
let userRPS = "";
// 컴퓨터 선택 가위바위보
let comRPS = "";

// 게임 시작 버튼을 가져온다.
const startBtn = document.getElementById("startBtn");
console.log(startBtn);

// 컴퓨터의 돌아가는 가위바위보 이미지를 가져온다.
let circleImgElem = document.getElementById("circleImg");

// 코인 개수 엘리먼트를 가져온다.
let coinCountElem = document.getElementById("coinCount");

// // 유저의 코인 개수를 입력받는다.
// let coin = prompt("얼마를 충전하시겠습니까?");
// if(typeof(coin)=="string"){
//     parseInt(coin);
//     console.log(coin);
// }
// // 코인 개수에 유저가 입력한 int를 집어넣고 
// let coinCount = coin;

// // 코인 개수에 1000을 집어넣고 
let coinCount = 1000;

// 그 값을 코인 개수 엘리먼트에 innerHTML로 넣어준다.
coinCountElem.innerHTML = coinCount;
console.log(coinCountElem);

// 가위바위보 엘리먼트를 가져온다.
const scissorsElem = document.getElementById("scissors");
const rockElem = document.getElementById("rock");
const paperElem = document.getElementById("paper");

// 가위바위보 함수에 각각의 매개변수(s, r, p) 전달을 위해 클래스명을 가져온다.
let scissors = scissorsElem.className; //s
let rock = rockElem.className; //r
let paper = paperElem.className; //p

// 각각의 엘리먼트를 클릭하면 그에맞게 가위바위보 함수를 호출한다.
scissorsElem.onclick = () =>{
    rockPaperScissors(scissors); //매개변수 s
}
rockElem.onclick = () =>{
    rockPaperScissors(rock); //매개변수 r
}
paperElem.onclick = () =>{
    rockPaperScissors(paper); //매개면수 p
}

// 초기화 함수(뭔가 잘못됐다. 그놈들이 나오고 나서 한 5초뒤에 초기화해야하는듯?)
function init(){
    console.log("초기화");

    // 시작 버튼을 보이게 한다.
    startBtn.style.display="block";
    // startBtn.style.transition="all 2s";
    startBtn.classList.remove("start");
    startBtn.classList.add("startBtn");

    // user선택과 com선택을 초기화해준다.
    userRPS = "";
    comRPS = "";

    // 게임 진행 상태를 0으로 초기화해준다.
    game = 0;

    // 가위바위보 상태를 0으로
    kababo = 0;

    // 컴퓨터 가위바위보를 다시 느리게 해준다.
    circleImgElem.classList.remove("circleImg2");
    circleImgElem.classList.add("circleImg"); //ok

    // 배경 이미지를 움직이게 해준다.
    circleImgElem.style.animation = "rsp1 2s 1s infinite linear";

    // 유저가 선택한 가위바위보 표시를 없애준다.
    scissorsImg.classList.remove("userPick");
    rockImg.classList.remove("userPick");
    paperImg.classList.remove("userPick");

    // 이겼다 졌다 비겼다 표시가 만약 있으면 없애준다.
    document.getElementById("same").classList.remove("same");
    document.getElementById("defeat").classList.remove("defeat");
    document.getElementById("victory1").classList.remove("victory");
    document.getElementById("victory2").classList.remove("victory");

    // 돌아간 룰렛을 초기화해준다.
    roulet.style.rotate=`0deg`;
}

// 게임 시작 버튼을 누르면
startBtn.onclick = () =>{
    console.log("가위바위보 게임 시작");
    
    // 만약 start버튼을 이미 눌렀으면 리턴해준다.
    if(game==1){
        return;
    }

    // 만약 코인이 100원 미만이라면 alert와 return을 해준다.
    if(coinCount<100){
        alert("돈은 두둑히 챙겨주셔야죠");
        return;
    }

    // 게임을 진행중으로 변경한다.
    game = 1;
    
    // 코인을 100 차감시켜준다.
    coinCount = coinCount-100;

    // startBtn에 classList해서 addClass를 해준다.
    // 그리고 원래의 클래스를 삭제시킨다.
    //코인의 값을 가져와서 인트로 형변환한뒤 100원만큼 내려준다.
    startBtn.classList.remove("startBtn");
    startBtn.classList.add("start"); //ok

    // 아니면 스타일 속성 display none으로 해준다.
    // 만약 start클래스가 있으면
    if(startBtn.getElementsByClassName("start")){
        // 1초뒤 삭제
        setTimeout(() => {
            coinCountElem.innerHTML = coinCount;
            startBtn.style.display="none";

            // 여기가 안됨
            setTimeout(()=>{
                // 가운데의 컴퓨터 가위바위보가 빨라진다.
                circleImgElem.classList.remove("circleImg");
                circleImgElem.classList.add("circleImg2");
                circleImgElem.style.animation="rsp1 0.4s infinite linear";
            }, 600);

        }, 1400);
    }

    // 컴퓨터가 랜덤으로 뽑아낼 배열을 만들어준다.
    let RPS = ['r', 'p', 's'];

    // 0~2까지의 랜덤수
    let ranNum = Math.floor(Math.random()*3);

    // 컴퓨터RPS에 RPS[0~2랜덤수]를 넣어준다.
    comRPS = RPS[ranNum];
    console.log("컴퓨터 RPS : "+comRPS);

};


// 가위바위보 이미지 엘리먼트를 가져온다.
let scissorsImg = scissorsElem.firstChild.nextElementSibling;
let rockImg = rockElem.firstChild.nextElementSibling;
let paperImg = paperElem.firstChild.nextElementSibling;

// 이겼을 시 룰렛을 돌리기 위해 HTML에서 룰렛의 값을 가져와 nums 배열에 담아준다.
let nums = [];
for(let i = 1; i<17; i++){
    nums.push(parseInt(document.getElementsByClassName(`num${i}`)[0].innerHTML));
}
console.log(nums);

// 룰렛 div를 가져온다.
// let roulet = document.getElementsByClassName("circle");
let roulet = document.getElementsByClassName("circle")[0];

// 가위바위보 함수
function rockPaperScissors(rps){

    // 게임 시작 버튼을 누르지 않고 가위 바위 보를 먼저 누르면 리턴해준다.
    if(game==0){
        return;
    }

    // 가위바위보가 1이면 리턴
    if(kababo==1){
        return;
    }

    // 가위바위보를 실행중으로 바꿔준다.
    kababo = 1;

    // 배경 이미지를 멈춰준다.
    circleImgElem.style.animation = "rsp1 0s infinite linear";
    // setTimeout(()=>{
    //     circleImgElem.style.animation = "rsp1 0s infinite linear";
    // }, 1000);
    
    // indexOf를 하면 배열에서 위치를 찾아줌

    // 컴퓨터가 고른 가위바위보에 맞게 화면을 바꿔준다.
    // console.log(comRPS);
    if(comRPS=="s"){
        console.log("컴퓨터 가위");
        circleImgElem.style.backgroundImage = `url("images/KakaoTalk_20220918_124352892_01.jpg")`;
    }else if(comRPS=="r"){
        console.log("컴퓨터 바위");
        circleImgElem.style.backgroundImage = `url("images/KakaoTalk_20220918_124352892.jpg")`;
    }else if(comRPS=="p"){
        console.log("컴퓨터 보");
        circleImgElem.style.backgroundImage = `url("images/KakaoTalk_20220918_124352892_02.jpg")`;
    }

    // 유저 선택에 해당하는 값(r, p, s)을 넣어준다.
    userRPS = rps;
    console.log("사용자 RPS : "+userRPS);

    // 버튼 클릭한 것으로 누른 것처럼 처리함 (클래스를 추가로 줌)
    if(userRPS=="s"){ // 가위를 클릭하면
        console.log("사용자 가위");
        // 가위 선택 배경색을 .userPick 클래스를 추가해 바꿔준다.
        scissorsImg.classList.add("userPick");

    }else if(userRPS=="r"){ // 바위를 클릭하면
        console.log("사용자 바위");
        // 바위 선택 배경색을 .userPick 클래스를 추가해 바꿔준다.
        rockImg.classList.add("userPick");
        
    }else if(userRPS=="p") { // 보를 클릭하면
        console.log("사용자 보");
        // 보 선택 배경색을 .userPick 클래스를 추가해 바꿔준다.
        paperImg.classList.add("userPick");

    }

    // 컴퓨터와 비교해 이겼는지 졌는지 비겼는지 출력해준다.
    console.log(`컴퓨터 : ${comRPS}, 사용자 : ${userRPS}`)
    if(comRPS==userRPS){

        // 비겼을 때 클래스를 추가해서 배경 변경시킨다.
        document.getElementById("same").classList.add("same");

        // 코인 차감 없이 한 번 더 선택할 수 있게 해준다.
        // 스타트 버튼 안눌러도 고를수 있게 하면 될수도?
        // 일단은 그냥 50원 추가해줌..
        coinCount+=50;
        coinCountElem.innerHTML = coinCount;
        // 임시로 해놓음
        document.getElementsByClassName("bitcoin")[0].style.transform="rotateY(-720deg)";
        document.getElementsByClassName("bitcoin")[0].style.transition="all 2s";

    }else{

        let winLose = "";

        if(userRPS=="r"){ //사용자 주먹
            if(comRPS=="s"){ //컴퓨터 가위
                winLose="win";
            }else{
                winLose="lose";
            }
        }else if(userRPS=="s"){ //사용자 가위
            if(comRPS=="r"){ //컴퓨터 바위
                winLose="lose";
            }else{
                winLose="win";
            }
        }else{ // 사용자 보
            if(comRPS=="s"){ // 컴퓨터 가위
                winLose="lose";
            }else{
                winLose="win";
            }
        }

        if(winLose=="lose"){
            // 졌으면 졌다고 표시해준다.
            document.getElementById("defeat").classList.add("defeat");
            // init(); // 다시 생각해보기
            
        }else{
            // 만약 이겼으면 반짝거리는 클래스를 붙여준다.
            document.getElementById("victory1").classList.add("victory");
            document.getElementById("victory2").classList.add("victory");

            // 0에서 15까지의 랜덤 함수를 가져와 변수에 담아준다.
            let rouletteRanNum = Math.floor(Math.random()*16);

            // 배열의 랜덤번째(0~15) 값을 가져와 winNum변수에 담아준다.
            let winNum = nums[rouletteRanNum];

            // 몇번째 배열의 넘스인지(더하기 1을 해주면 nums[i]와 같아진다.) 
            // 클래스를 찾아주기 위해 rouletteRanNum
            console.log("rouletteRanNum:"+rouletteRanNum);
            console.log("winNum:"+winNum);

            // 코인을 winNum만큼 올려준다.
            coinCount += winNum*100;

            // 두번째 이겼다 부터는 코인이 안돌아가길래 임시로 이렇게 해놓음
            document.getElementsByClassName("bitcoin")[0].style.transform="rotateY(-720deg)"
            document.getElementsByClassName("bitcoin")[0].style.transition="all 2s";

            // 코인을 innerHTML에 띄워준다.(1.6초 뒤에)
            setTimeout(()=>{
                coinCountElem.innerHTML = coinCount;

                // 코인 이미지를 2바퀴 돌려준다. 참고 transform: rotateY( 180deg );
                document.getElementsByClassName("bitcoin")[0].style.transform="rotateY(720deg)";
                // 부드럽게
                document.getElementsByClassName("bitcoin")[0].style.transition="all 2s";

                // 코인 20개 나오면
                if(winNum==20){
                    alert("와우");
                }
            
            }, 3700);

            // 여기
            // 시간이 되면 1초에 걸쳐서 위의 코인이 스르륵 올라가고 
            // 만약 윈넘이 20이면 왕창 터지는 모션 넣어주기..
            
            // 일단 해당하는 div를 갖고와서..(굳이 갖고 올 필요까지는 없음 : 그냥 룰렛 그만큼 돌려주면 되니까)
            // let rouletteDiv = document.getElementsByClassName(`num${rouletteRanNum+1}`)[0];
            // rouletteDiv에 뭔가를 해줄 필요 없음

            // 룰렛의 각도를 그놈에 맞춰 돌린다. transform: rotate(-90deg);
            // console.log(`rouletteRanNum+1 = ${rouletteRanNum+1}`);
            // console.log((rouletteRanNum+1)*22.5);
            
            // circleImgElem.style.animation = "rsp1 0s infinite linear";

            // 룰렛을 돌려준다.
            setTimeout(()=>{
                // 룰렛의 rotate를 (rouletteRanNum+1)*-22.5deg만큼 돌려준다.
                roulet.style.rotate=`${(rouletteRanNum+1)*-22.5-360}deg`;
                // roulet.style.rotate=`${(rouletteRanNum+1)*(Math.floor(Math.random()*3)+1)*-22.5}deg`;
                console.log(roulet.style.rotate);

                // 부드럽게 돌려준다.
                roulet.style.transition="all 2s";

            }, 1600);

            // 그리고 다시 스타트 버튼을 보이게 해준다.(if문 밖에서 해도 될듯?)

        }

        // 그리고 버튼을 보이게 해준다.(if문 밖에서 해도 될듯?)

    }

    // 값들을 초기화 시켜준다.
    setTimeout(()=>{
        init();
    }, 5000);

}




// 스타트 버튼을 다시 누를 수 있게 하려면?

// 비겼을 때 한 번 더 할 수 있게 
// 게임 시작했을 때 한 번 더 시작버튼 누르지 못하게
// 게임 시작했을 때 가위바위보 버튼 여러번 누르지 못하게

// 클래스 원래대로, 컴퓨터값, 유저값, 유저선택값, 등등...
// 스타트 버튼도 띄우고

// clearInterval;

// 쿼리셀렉터로 onclick을 막는다.


// # 선생님 피드백
// 1. 비겼을 때 다시 시작 : 로직은 직접 생각해보기
// - 생각해보기

// 2. 함수는 호출을 아래에서 해야한다. (호이스팅)
// - 가위바위보 함수 호출 부분 바꾸기

// 3. 스타일은 클래스를 만들어서 classList add 해준다. 보통 js에서 스타일은 계산할 때만 쓴다.
// - 애니메이션 멈추는 부분 바꾸기 (on class 추가)

// 4. 게임 진행 상태를 배열에 집어넣고 상태를 바꿔주고 비교하는 식으로 예외처리 방향을 알려줌
// - 자기 마음

// 5. 주석은 쓰지 않아도 읽을 수 있기 때문에 보통은 달지 않는다.
// - 자기 마음

// 6. 코인을 innerHTML에 += 하지 말고 =으로 해줘야 한다.
// 

// 7. 클래스를 가져오지 말고 getAttribute로 가져와야 한다.
// 
