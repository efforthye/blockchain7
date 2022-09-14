// 카드가 들어갈 배열
const cards = [];

// 1~8까지 2개씩 총 16장을 cards배열에 차례로 넣어준다.
for(let i = 0; i<8; i++){
    cards.push(i+1);
    cards.push(i+1);
}
console.log(cards);
 
//방법1. 카드를 100번 섞는다.(잘 모르겠다. 돌려막기라고 한다.. 좀 안좋은 방법이긴 하나 가능은 함)
// 뭐가 뭐를 고를지 모르기때문에 알아서 섞인다고 한다. 
// 랜덤으로 2개를 골라서 두개의 위치를 마구마구 바꿔주는 기능이라고 한다.
for(let i = 0; i<101; i++ ){

    //cards : [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]
    // 배열은 0번부터 센다.
    console.log(i);

    // 첫번째 카드 선택 //ex)11
    const firstCard = parseInt(Math.random()*cards.length);
    console.log(`첫번째 카드 선택, firstCard : ${firstCard}`);

    // 두번째 카드 선택 //ex)8
    const secondCard = parseInt(Math.random()*cards.length);
    console.log(`두번째 카드 선택, secondCard : ${secondCard}`);
    // 여기까지는 temp=1 이고 cards[firstCard]==1 이다.

    // 첫번째 카드 배열번째에 있는 값을 temp에 임시 저장한다.//카드의값:6
    const temp = cards[firstCard];
    console.log(`첫번째 카드를 temp에 임시 저장, temp : ${temp}`);

    // 첫번째 카드 자리에 두번째 카드를 저장한다.//카드의값:5
    cards[firstCard] = cards[secondCard];
    console.log(`첫번째 카드에게 두번째 카드값을 저장, cards[firstCard] : ${cards[secondCard]}`);
    // 여기까지는 cards[firstCard]=4 이고 cards[secondCard]==4 이다.

    // 두번째 카드에게 temp의 값을 저장한다.
    cards[secondCard] = temp;
    console.log(`두번째 카드 자리에 temp를 저장, cards[secondCard] : ${temp}`);
    console.log('끝');
}
console.log(cards);
// cards[23]=90; //절대 이런식으로 배열에 값을 마구잡이로 때려박지 마라. 혼남
// console.log(cards[23]); // 나머지 비는부분 배열을 공백으로 채워준다. 그래서 길이가 24..
// console.log(cards.length); // 24