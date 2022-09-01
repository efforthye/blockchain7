let i = 0;
// 보통 반복할 때 i, j, k 이런 식으로 변수를 선언한다.
// i : index의 약자이다. git은 아예 다르게 index라는 용어를 사용하고 있어 헷갈리지 말라고 한다. 아예 다른 내용이다.
// array[5] = 배열의 6번째 아이템을 가져온다는 뜻이다. << 5 index 다섯번째인덱스의값가져옴.(전문용어)
while(i < 10){
    // while은 반복문의 명령어 중 하나다.
    // ()안의 조건이 충족되면 실행된다.
    // {}안의 코드를 실행한 후 ()안의 조건을 확인한다.
    console.log("++i = "+ ++i);
}

let j = 0;
while(j<10){
    console.log("j++ = "+ j++); //만약 j를 i로 바꾸면 j값이 늘지않아 계속 반복되어버린다..
    //break;
}

//while(true)console.log(new Date())
// 브라우저를 멈추고 싶으면 위 코드를 실행하시오. 계속 반복돼서 컴퓨터가 꺼짐..?
// 주석 처리는 꼭 해둬야 한다고 함. 이 아래내용 잘 이해안된다.
console.log(i); //i=10
// 조건을 먼저 확인
while(true){
    console.log(new Date());
    if(--i < 1) break;
}
// break는 코드를 멈춘다. 즉 반복을 멈추고 다음 코드를 실행한다.


let k = 0;
do{
    // do는 while 조건을 확인하기 전에 실행한다.
    console.log("k = "+ ++k);
    // k를 먼저 출력하고 조건을 ㅎ ㅘㄱ인한다.
}while(k < 10);


//do를 적는 것과 안 적는 것의 차이가 무엇인가?
console.log(i); //i=0
while(i !== 0){ //i가 0이 아니면 true, i가 0이니까 false이며 조건이 맞지않아 반복안된다.
    console.log('hi');
}
do{ //일단 실행한다.
    console.log('hi2');
}while(i !== 0); //실행을 하고나서 조건을 확인한다. 맞지 않으니 반복은 하지 말라는 뜻이다.
// 꿀팁 : console.log에 console.log(++k)이렇게 해주면 결과값이 나온다..





