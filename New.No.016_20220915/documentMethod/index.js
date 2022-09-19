// root라는 아이디를 가진 엘리먼트를 root변수에 담는다.
const root = document.getElementById("root");

// onload라는 메서드는 로드가 되었는가를 확인하고 되었을 때 실행된다.
// 즉 DOM이 생성되었을 때 라고 한다.
// 이미 생성이 된 다음 스크립트가 실행되기 때문에 안 되었지만
// 스크립트를 위에 놓고 하면 온로드를 사용할 수 있다.
// 페이지를 들어 왔을때 로드가 끝난 다음에 로드를 받아서 도큐먼트 함수를 실행함
// 다 완성된 후에 실행할 수 있도록 함.
// body줄이 끝나면 생성이되고 dom이 자식들을 추가하는데 body줄이 생성됐을때 함수가 호출된다.
// 영상이 다 불러와 졌을 때 실행하도록 하는 것이다.(중요)
// 모든 페이지가 온로드가 끝났을때(무신사 동영상을 보고 나서야 페이지를 볼수 있는 것처럼)
// root.onload (이렇게는 안된다고 한다.)
// root.on하면 엄청 많다고 한다.(마우스오버 마우스리브 등등... 특정 상황에서 발생하는 것들)
// onplay 음악이 재생됐을 때, onplaying 음악이 재생중일 때.. 등등 on이 붙은 함수가 엄청많음

// 마우스 휠에 대해서 행동한다.
// root에 onwheel을 줬기 때문에 root위에서 휠 돌렸을 때만 콘솔이 출력된다.
root.onwheel = (e) => {
    // console.log(e);
    // 현재 실행한 놈이 어떤 놈인지 알아낸다.(delete에서 사용한다.)
    console.log(e.target);
};

// on 어쩌구 하는 메서드를 쓰는데 그게 뭐냐?
// on***은 전부 이벤트 함수라고 부른다.(중요)
// 즉 클릭, 키다운, 입력 등 사용자의 입력에 대해서 이벤트가 발생했을 때 실행된다.(게임에 쓸수있을듯)
// onchange는 변화가 완료됐을 때
document.getElementById('name').onchange = (e) =>{
    // e.target은 해당 메서드가 어디서 실행됐는지 포커스혹은 마우스 등 의 위치가 기준이 될수 있다.
    console.log(e.target.value);
};
// 입력했을 때(중요)
document.getElementById('name').oninput = (e) =>{
    // e.target은 해당 메서드가 어디서 실행됐는지 포커스혹은 마우스 등 의 위치가 기준이 될수 있다.
    console.log(e.target.value);
};

// addEventListener()은 클릭? (중요)
// 이벤트 함수를 엘리먼트에 추가하는 방법을 배운 것이다.
document.getElementById('name').addEventListener('click', (e)=>{
    console.log(e.target);
});
// 이렇게 바꿔도 상관없다.
document.getElementById('name').addEventListener('click', ()=>{
    console.log("인풋을 클릭했어~");
});

// ontouch..? 핸드폰 터치도 인식할 수 있다.
// 다중터치도 인식 된다고 한다.
// onresize를 사용해 브라우저의 크기가 달라졌을때 크기 측정(콘솔로그가능)
// 너비 몇 높이 몇



// 10번 for문을 돌려 10개의 div를 만든다.
for(let i = 0; i<10; ++i){

    // div를 만들어서 tempElem 변수에 초기화한다.
    const tempElem = document.createElement('div');

    // div안에 내용을 innerHTML을 통해 i번째 div라고 넣어준다.
    tempElem.innerHTML = i+1+'번째 div';

    // #root(html에 있는 div)에 만든 div(tempElem엘리먼트)를 자식으로 맨 뒤에 넣어준다.
    root.append(tempElem);

    // 맨 앞에 넣어준다.
    // root.prepend(tempElem);

}


// 스타일을 바꿀 수 있다. (html 태그의 속성에 넣는 것과 같다.)
document.getElementById('name').style.backgroundColor="lightgray";

// 1px solid black이 출력된다.
let border = document.getElementById('name').style.border;
console.log(border);