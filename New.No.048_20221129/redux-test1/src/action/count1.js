
// 수정하지 않고 가져다 쓸 변수라서 대문자(일종의 관례, 중요)
export const COUNT1 = {
    PLUS : 'count1/plus',
    MINUS : 'count1/minus'
}

// App.js의 버튼 클릭 부분(dispatch내부에서 .plus(inputCount) 하면 됨)
// 만약 이 작업을 하기 전에 무언가 코드를 작성하고 싶으면 
// 안의 중괄호를 리턴하고 그 위에 코드 작성하면 된다.
const plus = (input) =>({
    type : COUNT1.PLUS,
    payload : {input}
});
const minus = (input) =>({
    type : COUNT1.MINUS,
    payload : {input}
});
export const actions = {plus, minus};