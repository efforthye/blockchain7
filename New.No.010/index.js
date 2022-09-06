// 코드가 확실하지 않으므로 재 복습(선생님 코드)이 필요하다.

let num = 0;

function change(){
    document.getElementById('change').
    // 이 아이디의 요소는 change이다.
    innerHTML = `<img src ="../images/goodgood.png" alt ="change" />`;
    //document, getElementById, innerHTML등은 이후에 자세히 공부한다.
    // innerHTML은 여는 태그와 닫는 태그 사이의 텍스트다.
}

// innerHTML="" : 예시를 가지고 이해하는 것이 빠르다. 
// 예를 들어 HTML로 [홍길동]이라는 콘텐츠를 화면에 출력하였을 때
// 이 HTML 요소에 접근하여 [홍길동]을 [이순신]으로 바꿔 출력하게 만들려면 
//이 속성을 사용해야 한다. 그리고 HTML 요소에 접근하려면 
// document.getElementById 메서드를 함께 사용한다.
// 출처: https://meaningone.tistory.com/316 [의미 하나:티스토리]