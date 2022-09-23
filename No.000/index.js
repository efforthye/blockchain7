let game = 0;
let kababo = 0;

let userRPS = "";
let comRPS = "";

const startBtn = document.getElementById("startBtn");
let circleImgElem = document.getElementById("circleImg");
let coinCountElem = document.getElementById("coinCount");

let coinCount = 1000;

coinCountElem.innerHTML = coinCount;

const scissorsElem = document.getElementById("scissors");
const rockElem = document.getElementById("rock");
const paperElem = document.getElementById("paper");

let scissors = scissorsElem.className;
let rock = rockElem.className;
let paper = paperElem.className;

scissorsElem.onclick = () =>{
    rockPaperScissors(scissors);
}
rockElem.onclick = () =>{
    rockPaperScissors(rock);
}
paperElem.onclick = () =>{
    rockPaperScissors(paper);
}

function init(){
    startBtn.style.display="block";
    startBtn.classList.remove("start");
    startBtn.classList.add("startBtn");

    userRPS = "";
    comRPS = "";

    game = 0;
    kababo = 0;

    circleImgElem.classList.remove("circleImg2");
    circleImgElem.classList.add("circleImg");

    circleImgElem.style.animation = "rsp1 2s 1s infinite linear";

    scissorsImg.classList.remove("userPick");
    rockImg.classList.remove("userPick");
    paperImg.classList.remove("userPick");

    document.getElementById("same").classList.remove("same");
    document.getElementById("defeat").classList.remove("defeat");
    document.getElementById("victory1").classList.remove("victory");
    document.getElementById("victory2").classList.remove("victory");

    roulet.style.rotate=`0deg`;
}

startBtn.onclick = () =>{
    if(game==1){
        return;
    }

    if(coinCount<100){
        alert("돈은 두둑히.");
        return;
    }

    game = 1;
    coinCount = coinCount-100;

    startBtn.classList.remove("startBtn");
    startBtn.classList.add("start");

    if(startBtn.getElementsByClassName("start")){
        setTimeout(() => {
            coinCountElem.innerHTML = coinCount;
            startBtn.style.display="none";

            setTimeout(()=>{
                circleImgElem.classList.remove("circleImg");
                circleImgElem.classList.add("circleImg2");
                circleImgElem.style.animation="rsp1 0.4s infinite linear";
            }, 600);
        }, 1400);
    }

    let RPS = ['r', 'p', 's'];
    let ranNum = Math.floor(Math.random()*3);
    comRPS = RPS[ranNum];

};

let scissorsImg = scissorsElem.firstChild.nextElementSibling;
let rockImg = rockElem.firstChild.nextElementSibling;
let paperImg = paperElem.firstChild.nextElementSibling;

let nums = [];
for(let i = 1; i<17; i++){
    nums.push(parseInt(document.getElementsByClassName(`num${i}`)[0].innerHTML));
}

let roulet = document.getElementsByClassName("circle")[0];

function rockPaperScissors(rps){

    if(game==0){
        return;
    }
    if(kababo==1){
        return;
    }

    kababo = 1;

    circleImgElem.style.animation = "rsp1 0s infinite linear";

    if(comRPS=="s"){
        circleImgElem.style.backgroundImage = `url("images/KakaoTalk_20220918_124352892_01.jpg")`;
    }else if(comRPS=="r"){
        circleImgElem.style.backgroundImage = `url("images/KakaoTalk_20220918_124352892.jpg")`;
    }else if(comRPS=="p"){
        circleImgElem.style.backgroundImage = `url("images/KakaoTalk_20220918_124352892_02.jpg")`;
    }

    userRPS = rps;

    if(userRPS=="s"){
        scissorsImg.classList.add("userPick");
    }else if(userRPS=="r"){
        rockImg.classList.add("userPick");
    }else if(userRPS=="p") {
        paperImg.classList.add("userPick");
    }

    if(comRPS==userRPS){
        document.getElementById("same").classList.add("same");

        coinCount+=50;
        coinCountElem.innerHTML = coinCount;

        document.getElementsByClassName("bitcoin")[0].style.transform="rotateY(-720deg)";
        document.getElementsByClassName("bitcoin")[0].style.transition="all 2s";
    }else{
        let winLose = "";

        if(userRPS=="r"){ 
            if(comRPS=="s"){ 
                winLose="win";
            }else{
                winLose="lose";
            }
        }else if(userRPS=="s"){
            if(comRPS=="r"){
                winLose="lose";
            }else{
                winLose="win";
            }
        }else{
            if(comRPS=="s"){
                winLose="lose";
            }else{
                winLose="win";
            }
        }

        if(winLose=="lose"){
            document.getElementById("defeat").classList.add("defeat");
        }else{
            document.getElementById("victory1").classList.add("victory");
            document.getElementById("victory2").classList.add("victory");

            let rouletteRanNum = Math.floor(Math.random()*16);
            let winNum = nums[rouletteRanNum];
            coinCount += winNum*100;

            document.getElementsByClassName("bitcoin")[0].style.transform="rotateY(-720deg)"
            document.getElementsByClassName("bitcoin")[0].style.transition="all 2s";

            setTimeout(()=>{
                coinCountElem.innerHTML = coinCount;

                document.getElementsByClassName("bitcoin")[0].style.transform="rotateY(720deg)";
                document.getElementsByClassName("bitcoin")[0].style.transition="all 2s";

                if(winNum==20){
                    alert("와우");
                }
            }, 3700);

            setTimeout(()=>{
                roulet.style.rotate=`${(rouletteRanNum+1)*-22.5-360}deg`;
                roulet.style.transition="all 2s";
            }, 1600);
        }
    }

    setTimeout(()=>{
        init();
    }, 5000);

}

