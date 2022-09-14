
// 배열을 섞는 함수를 만들었다. 언제든지 복붙해 가져다 사용할 수 있다.
function chuffle(arr){

    if(!arr?.length||typeof arr !="object")return"배열만 넣어라.";

    for(let i = 0; i<100; i++){

        const first = parseInt(Math.random()*arr.length);
        const second = parseInt(Math.random()*arr.length);
        const temp = arr[first];
        arr[first] = arr[second];
        arr[second] = temp;
    }
    return arr;
}