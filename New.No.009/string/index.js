const str ='abcdefghijklmn';

console.log(str.indexOf("d"));
// 매개변수로 전달된 텍스트가 어디잇나 << 시작 위칠 찾는다.
console.log(str.indexOf("cd"));
// 전달된 텍스트가 내용에 없을 시 -1을ㄹ 리턴한다.

console.log(str.length); //길이

console.log(str.slice(1,3)); //자르기, bc출력됨 

console.log(str.split(/d/));
// 매개변수로 전달된 정규표현식(어렵다..?)을 기준으로 자른다. (중요)
// d는 사라진다. 정규표현식은 어려워서 나중에 하루 웬종일 해야한다고 한다.
// 정규표현식은 색이 다르다.
console.log(str.split(""));
// 하나하나 다 분해한다. 문자열을 끊어서 array(배열)으로 리턴해준다.

console.log(str.replace(/d/, "a"));
// 첫번쨰 매개변수로 정규표현식을 전달하고 두번째 매개변수로 대체한다.
// abcaefghijklmn <- d 대신 a로 바뀜, a공간을 비워서 띄워쓰기처럼 쓸수도 있다.

console.log(str.toLowerCase());
// toLowerCase() 메서드는 전부 소문자로 바꾼다.
console.log(str.toUpperCase());
// toUpperCase() 메서드는 전부 대문자로 바꾼다.

// 나중에 정규표현식 할 때 배운다고 한다. 정규표현식에서 쓰인다고 한다.
// 여러개를 한번에 찾는 거라고 한다.
// console.log(str.match());
// console.log(str.matchAll());

console.log(str.charAt());
// charAt() 메서드는 ... 안알려주고 끝냈음(안쓰는것들중에 그나마쓰는거라고함)

// 정규표현식
console.log();











console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();