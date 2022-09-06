// 객체가 뭐냐? 중괄호{}로 묶인 키와 값으로 이루어진 변수(상자)이다. (중요)
// 전에 자바스크립트 초반에 객체를 배운 것이 있다. (New.No.006의 obj)
const obj = {
    // obj = 객체
    a : 1,
    // a가 키고 1이 값이다.
    // 키의 정식 명칭은 프로퍼티(property, props)이다. (중요)
    b : function(){
        // b와 c는 함수이지만, 여기에서는 메서드(method)라고 부른다.
        console.log('b');
    },
    c : () => {
        return "c";
    }
}











// 배열 array
// const arr = [1, 2, 3];
const arr = ["김재훈","염예나","김혜림","허재원","김정규","박예성"];
// 배열(array)도 객체이다. 
arr.push();
// push 메서드를 호출한다.
console.log(arr.length);
// 콘솔에 배열의 길이(아이템의 개수)를 출력한다.
// length는 배열의 길이를 나타내는 프로퍼티이다. 
// 보라색은 메서드, 하늘색은 프로퍼티.
let tempReturn = arr.indexOf(3); //2
// indexOf는 배열에 있는 아이템을 찾아내서 그 위치를 알려준다(리턴해준다) (중요)
// 없으면 -1, 첫 번째에 있으면 0을 반환(return)해준다.
//tempReturn = arr.find((item) => {return item ===3;}); // 화살표 함수, ~~역할..
//tempReturn = arr.find((item) => {return item ===3;});
tempReturn = arr.find(function(item){
    console.log(`item : ${item}`);
    return item == 2;
})
// find는 검색할 때 사용할 코드를 넣어주는 것이다. 
// 코드의 반환값이 true가 나오는 함수를 넣어준다.
// 만약 3을 찾고 싶으면 화살표함수를 써서 찾는다.... (이해하기, 중요)
// 화살표함수란.. ? 원하는 값을 찾는 것이다.
// 찾은 놈을 리턴으로 그대로 가져온다.
// find의 반환값은 아이템의 순서가 아닌 아이템 그 자체이다.
// find 메서드는 매개변수로 함수를 전달한다.
// 매개변수에 해당하는 함수의 매개변수(item) 은 배열의 각 아이템을 적용한다.
// find 함수는 배열의 각 아이템을 순서대로 매개변수 함수에 전달하여 리턴값을 확인한다.
// 매개변수 함수에게서 받은 리턴 값이 true이면 해당 아이템을 리턴하고 find 함수를 종료한다.
// 후에 특강으로 다시 알려주신다고 한다.

// tempReturn = arr.filter((item) => { //필터로 그놈들 전부 거름
//     return item[0] === "김"; // 첫글짜가 김인 놈들을 전부 배열로 리턴해준다.
// })
tempReturn = arr.find((item) => { //한놈을 찾음
    return item[0] === "김"; //한 놈 걸리면 그 놈만 리턴해주고 끝난다.
})
tempReturn = arr.findIndex((item) => { //첫번째로찾은놈의 배열 순서가 몇번째인지 리턴해준다.
    return item[0] === "김"; //한 놈 걸리면 그 놈의 배열 순서만 리턴해주고 끝난다.
})
// filter는 매개변수 함수가 true인 아이템들을 배열로 리턴해준다.
// return이 true인 애들을 배열로 묶어서 반환해준다고 함.
// findIndex에서 리턴된 배열의 순서가 첫번째인 놈은 컴퓨터가 0이라고 생각해서 0이라는 값이 출력된다.



tempReturn = arr.map((item)=>{
    // map을 많이 사용하게 될 거라고 한다.
    // 매개변수를 넘길 때는 화살표함수를 많이 사용하니까 화살표함수를 잘 익혀놓아야 한다.(중요)
    return item + " 오늘 출석함. 내일도 출석할 거임.";
    return item[0] === "김"; //김씨인 놈은 true, 아닌 놈은 false인 배열을 나타내준다.
    // map은 매개변수함수의 return 값들을 true/false해당하는 배열로 리턴해준다.(중요)
    // 리턴값을 그대로 배열에 넣어서 출력한다.
})

arr.forEach(item=>console.log('forEach:'+item)); // 같다 보통 화살표 함수로 쓰인다 일에서..
arr.forEach(function(item){console.log(item)}); // 같다
// forEach 메서드는 아이템을 하나씩 함수에게 매개변수로 전달해 함수를 호출한다.
// 위의 forEach문은 아래의 for문과 같다.
for(let i=0;i<arr.length;i++){
    console.log('for:'+arr[i]);
}

arr.reverse();
// reverse는 역순을 뜻한다. 배열의 순서를 거꾸로 바꾸는 메서드이다.
console.log(arr);
console.log(arr.reverse());

console.log(arr.join(" / "));
// 배열을 일반 문자열로 바꿔줍니다. 매개변수로 아이템 사이에 넣을 문자를 입력합니다.
console.log(arr.toString());
// toString() 메서드는 문자열로 바꾸는 역할을 한다.(다른 거의 모든 객체에 포함되어 있다.)
console.log((16).toString(8)); //(8)진수이기 때문에 20이 나온다.

console.log(arr.slice(1,3));
// slice() 메서드는 1부터 3까지 짤랐기 때문에 배열에서 두세번쨰 사람까지만 나옴
// 자르는 기준은 배열의 컴마로 자르고, 그 사이의 아이템들이 해당된다.
console.log(arr.slice(1, -1));
// -1은 뒤에서 자르는 것이다. 두번째(1) 놈부터 마지막에서 두번째(-1) 놈까지 자른다.
// 문자열 할 때 생각보다 많이 쓰인다고 한다.(중요)
console.log(arr.slice(-5, 1)); // 순서가 꼬이면 출력되지 않는다..... ㅇㅅㅇ ㅠㅠ

//arr.splice(1, 3);
// splice()는 잘 안 쓰인다. slice()가 더 많이 쓰인다.
// splice는 1부터 3개를 짜르며, 단 arr을 자르면서 같이 수정해버린다. 샘은 절대 안씀.
//console.log(arr); // 확인해보면 자른 부분의 놈들만 빼고 출력된다.

//sort() 기본정렬(오름차순)
console.log(arr.sort((curr, next)=>{
        if(curr > next) return 1;
        else if (curr < next) return -1;
        else return 0;
        // sort메서드는 정렬을 해주는 메서드이다.
        // 1, 0, -1로 정렬 방식을 선택합니다.
    // 현재가 큰 것을 1로 주고, 다음 것이 큰 것을 -1로 주면 오름차순으로 정렬된다.
    // 뭔 X소리야..?
    }));
//sort() 반대정렬(내림차순)
// sort() 메서드는 정렬하는 메서드이다. 매개변수가 2개 이상 들어가는 함수가 필요하다.
console.log(arr.sort((curr, next)=>{
    if(curr > next) return -1;
    else if (curr < next) return 1;
    else return 0;
    // sort메서드는 정렬을 해주는 메서드이다.
    // 1, 0, -1로 정렬 방식을 선택합니다.
    // 위와 반대 조건 시 내림차순이다.
}));
//console.log([1,6,2,3,5,4].sort((curr, next)=>curr-next));
console.log([1,6,2,3,5,4].sort(function(curr,next){
    return curr-next;
    //오름차순 (앞에것이크다)
    return next-curr;
    //내림차순 (뒤에것이크다)
}));
// 하노이랑은 좀 다르다. 매개변수를다르게적으면..?
console.log(arr.sort()); 
//그냥 이렇게 sort()메서드는 정렬을 기본 오름차순으로 정렬해준다.
console.log(arr.sort().reverse()); 
//만약 내림차순으로 하고 싶으면 이렇게 순서를 뒤바꿔준다 ^^







///////Find///////
const tempFind = (item) =>{
    console.log(`item : ${item}`);
    console.log(`item === 2 : ${item===2}`);
    return item === 3; //아이템이 3과 같은지 확인한다. 
    // 이 3이라는 값을 가진 놈을 찾기 위해 find를 돌리는 것이다.
    // 아이템이 3이랑 같으면 true, 아니면 false를 리턴함.
}

const arrFind = function(){
    for(let i = 0; i<arr.length; i++ ){
        console.log(`i : ${i}`);
        console.log(`arr[i] : ${arr[i]}`);

        // i는 0부터 arr의 길이까지 하나씩 증가하면서 반복한다.
        if(tempFind(arr[i])) return arr[i]; 
        // 1. tempFind를 타고 갔더니 아이템 0번째는 1이니까 
        // 1-2. if가 false가 돼(item이 3이랑 다르기 때문에) 리턴이 안들어갔다.
        // 2. tempFind(arr[i])가 true이면 return arr[i]이 실행된다.
        // 3. tempFind 함수를 호출하고 매개변수로 arr의 i번째 아이템을 전달한다.
        // 4. tempFind 함수가 true를 리턴하면 arr의 i번째 아이템을 리턴(반환)한다.
        // 5. 매개변수로 tempFind를 호출해 arr 배열의 i번째 놈을 가져와 리턴한다.
    }
}
///////Find///////



console.log(tempReturn); 
const tempArr = [
    {
        name : "정재훈",
        age : 30,
        area : "홀리랜드"
    },
    {
        name : "김예나",
        age : 22,
        area : "해피랜드"
    },
    {
        name : "정재규",
        age : 24,
        area : "해피월드"
    },
    {
        name : "허재원",
        age : 20,
        area : "에버랜드"
    },
    {
        name : "박혜림",
        age : 22,
        area : "토레토레"
    }
]
console.log(tempArr.find((item)=>item.area==="하남"));
console.log(tempArr.findIndex((item)=>item.area==="하남"));
console.log(tempArr.filter((item)=>item.area==="하남"));
console.log(tempArr.map((item)=>item.area==="하남"));

// Document 끝난 다음부터는 수업시간 코드를 공유해주지 않는다고 한다..
// 로직 자체가 너무 크기 때문이라고 한다.
// 코드를 공유하지 않는 이유는, 생각이 선생님에게 묶여 버릴까봐.. 라고 한다.


// 재훈, 정규 : 해당 메서드를 함수로 만들어오세요.. (오늘 도발한 두사람)
// ex) arr.find(func) => find(arr, func)