// 코드 꼭 복습하기. 전혀 이해 안된다.. for문 조건 안에 있는 거 ..(전부중요중요~~)

// 기존의 odd, even클릭(onclick)과 다르게, oddeven에서 호출받으며 전달받은 매개변수를 사용하기 위해
// count를 매개변수로 선언한다. 괄호 안의 count << '123'
// 홀수
function odd(count){

    // 만약 oddeven함수에서 호출받았을 때는 
    // count에 oddeven함수에서 전달한 매개변수가 count에 정의된다. 그래서 다시 입력받으면 안됨.
    // const count = (prompt('몇까지 찍을까? 그리고 홀이야 짝이야?\n형식은 숫자&홀짝'));

    // 만약 카운트가 없으면 매개변수 카운트에 다시 값을 입력받는다.(카운트가없으면트루.)
    // odd 클릭 시 count는 입력된 값이 없기 때문에 undefined가 된다.
    if(!count)count = prompt('몇까지 찍을까?');
    // undefined는 boolean값으로 따졌을 떄 false되기 때문에 
    // 매개변수가 없는지 확인하여 입력받게 한다.
    // oddeven함수에서 전달받은 count는 문자열이기 때문에 parseInt이용해 정수로바꾼다.
    count = parseInt(count);

    //방법1. 이 코드는 아래 코드들보다 안좋다. for반복횟수 10회.
    // 반복의 횟수 차이가 입력된 수에 대해서 기하급수적으로 늘게 돼 안좋은 코드이다.(중요)
    for(let i = 0; i<=count; i++){
        console.log(`방법1. i : ${i}`);
        //i나머지2가1(true)이면홀수i가출력됨0이면짝수..(%(나머지)많이쓰인다 중요)
        // i 나머지 2가 1이 나오면 홀수이다. => 홀수를 판단할 수 있다.
        if(i%2)console.log(i);
    }
    //방법2. for반복횟수 5회. 10을 넣으면 나누기2때문에 5까지만 확인한다
    for(let i = 0; i<count/2; i++){
        console.log(`방법2. i : ${i}`);
        console.log(i*2+1);
    }
    //방법3. for반복횟수 5회.
    // +=는 더해서 대입한다는 거다. 이해하려면 따로 공부를 해야한다.(중요)
    for(let i = 1; i<count+1; i+=2){
        console.log(`방법3. i : ${i}`);
        console.log(i);
    }
    console.log(`끝`);
}

// 짝수
const even = function even(count){

    if(!count)count = prompt('몇까지 찍을까?');
    count = parseInt(count);

    //방법1. 
    for(let i = 0; i<=count; i++){
        // i%2 전체를 묶어서 느낌표로 부정해주면 짝수를 뽑아낼 수 있다. 0은 false이기때문에 부정.
        if(!(i%2))console.log(i);
    }
    //방법2.
    for(let i = 0; i<(count+1)/2; i++){
        console.log(i*2);
    }
    //방법3.
    for(let i = 0; i<count+1; i+=2){
        console.log(i);
    }

}

// 숫자와 짝수홀수
const oddeven = ()=>{

    // '123&홀' 형식의 문자열(String)을 받게 된다.
    // split메서드를 호출해서 &를 기준으로 분리해 배열에 넣는다.
    // 문자열(string) 아이템을 가진 배열을 반환받는다.
    // count.split("&"); => ['123', '홀']
    const count = (prompt('몇까지 찍을까? 그리고 홀이야 짝이야?\n형식은 숫자&홀짝'));

    // 입력받은 [n&홀짝]을 &로 나눈 배열의 앞에것이 숫자이므로 숫자를 가져옴 // '123'
    const number = count.split('&')[0];
    // 홀짝여부를 가져옴.. 숫자와 홀짝이 나누어졌다. // '홀'
    const idOdd = count.split('&')[1];

    // idOdd(홀짝여부)가 홀인지 확인하여 홀이면 odd함수에 받았던 숫자를 매개변수에 넣어 호출한다.
    if(idOdd=='홀'){
        odd(number); //함수에 숫자를 매개변수로 넘겨준다..
    }else{
        even(number);
    }

}
