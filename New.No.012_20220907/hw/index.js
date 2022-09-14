// Math.random() - 0.5 의 계산 결과는 양수나 음 수 둘 중 하나이기 때문에 정렬 함수는 요소를 무작위로 재 정렬할 수 있게 한다.
// 16개의 카드가 있다.
// 같은 카드 2개씩으로 이루어진 8쌍의 카드이다.
// 0 0 0 0     0   0 0
// 0 0 0 0  => 0 0 0 0
// 0 0 0 0     0 0   0
// 0 0 0 0     0 0 0 0
// 2개를 선택하면 같은 카드인지 확인 후 같으면 화면에서 삭제한다.(또는 표시한다.)
// 1~8일 수도 있고, A~H일 수도 있다. 또는 그림으로 준비해도 된다.
// 3시 50분에 카드 섞는 걸 수업한다.
// 아래 내용은 다음 주 화요일까지 추가
// 재훈 : n의 수를 넣어서 n개의 짝을 만들어서 카드게임
// alert(':: 카드게임 - 같은 카드 찾기 ::');

// card를 넣을 배열을 만들어준다.
const card = [];

// 배열에 1~8까지 2개의 숫자씩 집어넣어준다.
for(let i = 1; i<9 ; i++){
    card.push(i);
    card.push(i);
}

// 배열의 숫자를 섞는다.
function shuffle(array){
    // .sort() 메서드 : 배열을 정렬하는 것이다.
    array.sort(() => Math.random()-0.5);
}
shuffle(card);
console.log(card);
console.log(document.getElementById("card1")); // null 출력됨

// 아래의 for문에서 card에 i를 합한놈을 변수명으로 하기 위해 배열을 선언했다.!!!(중요)
const cards = {};

// for문 card+i를 html에서 가져와 선언해준다.
for(let i = 1; i<17; i++){
    cards[`card${i}`] = document.getElementById(`card${i}`);
    console.log(`let card${i} = document.getElementById('card${i}');`);
    //const card16 = document.getElementById('card16'); //으로 잘 나온다.
}
console.log(cards)

// html div안에 랜덤 수를 집어 넣어준다.
// for(let i = 0; i<16; i++){    
// }
card1.innerHTML = `${card[0]}`;
card2.innerHTML += `${card[1]}`;
card3.innerHTML += `${card[2]}`;
card4.innerHTML += `${card[3]}`;
card5.innerHTML += `${card[4]}`;
card6.innerHTML += `${card[5]}`;
card7.innerHTML += `${card[6]}`;
card8.innerHTML += `${card[7]}`;
card9.innerHTML += `${card[8]}`;
card10.innerHTML += `${card[9]}`;
card11.innerHTML += `${card[10]}`;
card12.innerHTML += `${card[11]}`;
card13.innerHTML += `${card[12]}`;
card14.innerHTML += `${card[13]}`;
card15.innerHTML += `${card[14]}`;
card16.innerHTML += `${card[15]}`;

// 사용자가 클릭한 놈을 배열 1번째에 넣어준다. 클릭한지 가져오는 메서드 검색
// 같은 아이디를 클릭하면 배열 2번째를 선택하도록 해준다.
// 11








// // 1부터 16까지 for문을 반복하며 card1~16을 사용하기 위해 let으로 정의해준다.
// for(let i = 1; i<17; i++){
//     `let card${i} = document.getElementById('card${i}');`;
//     console.log(`let card${i} = document.getElementById('card${i}');`);
//     //const card16 = document.getElementById('card16'); //으로 잘 나온다.

//     // const element = document.getElementById('my_div');
//     // element.innerHTML 
//     //   = '<div style="color:blue">InnerHTML<div>';
// }



// // 각 div에 배열 i번째 값을 차례대로 넣어준다..
// for(let i = 0; i<16; i++){
//     // 만약 태그를 넣어줄거면 ${}바로양옆에 딱붙여서 태그를적어주면된다.
//     `document.getElementById('card${i+1}').innerHTML += '${card[i]}';`;
//     console.log(`document.getElementById('card${i+1}').innerHTML += '${card[i]}';`);
// }


// `document.getElementById('card${i+1}').innerHTML = '${card[i]}';`;
// console.log(`document.getElementById('card${i+1}').innerHTML = '${card[i]}';`);



// document.getElementById("card").style.setProperty = new style;






// 1부터 16까지 for문을 반복하며 card1~16을 사용하기 위해 let으로 정의해준다.
// let card1 = document.getElementById("card1");
// let card2 = document.getElementById('card2');
// let card3 = document.getElementById('card3');
// let card4 = document.getElementById('card4');
// let card5 = document.getElementById('card5');
// let card6 = document.getElementById('card6');
// let card7 = document.getElementById('card7');
// let card8 = document.getElementById('card8');
// let card9 = document.getElementById('card9');
// let card10 = document.getElementById('card10');
// let card11 = document.getElementById('card11');
// let card12 = document.getElementById('card12');
// let card13 = document.getElementById('card13');
// let card14 = document.getElementById('card14');
// let card15 = document.getElementById('card15');
// let card16 = document.getElementById('card16');








// 각 카드의 아이디를 가져와서 선언해준다.
// 근데 선언해주는게 아니라 변수에 값이 대입되고있다..... 바꾸기
// for(let i = 1; i<17; i++){
//     let cardId = `card${i}`;
//     // cardId = document.getElementById(`card${i}`);
//     cardId = document.getElementById(`card${i}`).innerHTML=`${cardId}`;
    
// }//출력 시 null이 나온다.


// 각 카드에 배열번째값을 차례대로 넣어준다..?
// for문으로 배열 i번째 값을 innerHTML로 넣어준다.
// id값에는 i+1을 해주면 된다.
// for(let i = 0; i<16; i++){
//     const cardId = `card${i+1}`;
//     // cardId.innerHTML += `<div>${cardId}</div>`;
//     document.getElementById(`${cardId}`).innerHTML = `<div>${cardId}</div>`;

//     console.log(cardId);
// }

// document.getElementById('player-sel').innerHTML = '<th>Player Select</th>';
// document.getElementById('count').innerHTML = '<th>Count</th>';
// document.getElementById('strike').innerHTML = '<th>Strike</th>';
// document.getElementById('ball').innerHTML = '<th>Ball</th>';
// document.getElementById('out').innerHTML = '<th>Out</th>';


// 만약 하나의 div를 클릭하면 그놈 





// 만약 같은 div에 아이디값을 주고, getElementbyId 해서 innerHTML로 값을 넣어준다.

// 클릭하면..

// 카드를 선택하면 뒤집으면서 이미지를 숨겨주고 이미지백그라운드 혹은 다른이미지를 넣어준다..

// 하드모드 : 트럼프카드 52장으로 카드 뒤집는 것까지 구현



// 각 아이디에 태그를 추가해준다.
// playerSelTr.innerHTML += '<td>'+ playerSel + '</td>';
// countTr.innerHTML += '<td>'+ ++count + '</td>';
// strikeTr.innerHTML += '<td>'+ strike + '</td>';