// 스크롤 페이지 처리
// let page = 1;

// 스크롤
const startScrollCount = document.getElementById("startScrollCount");
const endScrollCount = document.getElementById("endScrollCount");
const scrollCount = document.getElementById("scrollCount");

// 공지사항 및 보도자료
const notice = document.getElementById("notice");
const press = document.getElementById("press");
const noticeUl = document.getElementById("noticeUl");
const pressUl = document.getElementById("pressUl");

// const body = document.querySelector('html');

// 한 섹션씩 이동하는 스크롤
window.onload = function(){
    // .section elem을 모두 찾는다.
    const elm = document.querySelectorAll('.section');
    // elem의 개수를 찾는다.
    const elmCount = elm.length;

    // html 전체 스크롤 개수에 스크롤 섹션 최대값을 넣어준다. 
    // 만약 최대값이 1의 자리수이면 앞에 0을 추가해준다.
    endScrollCount.innerHTML = (elmCount+"").length==1?"0"+elmCount:elmCount;

    // elem의 개수(7)만큼 forEach문을 돌린다.
    elm.forEach(function(item, index){

        // item에서 마우스 휠이 감지되면 이벤트를 추가한다.
        item.addEventListener('mousewheel', function(event){
            // 아무 이벤트도 작동하지 못하게 한다.
            event.preventDefault();
            // delta라는 변수에 0을 넣어준다.
            let delta = 0;
            // 만약 이벤트가 없으면 이벤트에 window.event를 넣어준다.
            if (!event) event = window.event;
            // 만약 event에 마우스 휠 데이터가 있으면
            if (event.wheelDelta) {
                console.log(`event.wheelDelta : ${event.wheelDelta}`);
                //delta라는 변수에 이벤트 휠 데이타를 120으로 나눈 값을 넣어주고
                delta = event.wheelDelta / 120;

                // 만약 윈도우가 opera이면? delta를 음수 값으로 바꿔준다.
                // if (window.opera) delta = -delta;
            } 
            // 만약 event.detail이 있으면
            else if (event.detail)
                // delta에 event.detail을 3으로 나눠 음수를 곱해준 값을 넣는다.
                delta = -event.detail / 3;

            // 그리고 위아래 스크롤에 대한 값을 moveTop이라는 변수를 선언해 넣어준다.
            // let moveTopTemp = window.scrollY;
            let moveTop = window.scrollY;

            // let moveTopPlus;
            // let moveTopMinus;
            // 그리고 현재 엘리먼트를 elemSelectot에 넣어준다.
            let elmSelector = elm[index];

            // wheel down : move to next section
            // 만약 delta가 음수, 즉 마우스를 다운하는 거라면?
            if (delta < 0){
                if (elmSelector !== elmCount-1){
                    try{
                        console.log(`window.pageYOffset : ${window.pageYOffset}`);
                        console.log(`elmSelector.nextElementSibling.getBoundingClientRect().top : ${elmSelector.nextElementSibling.getBoundingClientRect().top}`);
                        moveTop = window.pageYOffset + elmSelector.nextElementSibling.getBoundingClientRect().top;
                        console.log(moveTop);
                        // moveTopPlus = moveTop;
                    }catch(e){}
                }
            }
            // wheel up : move to previous section
            // 만약 마우스를 위쪽으로 올리면
            else{
                if (elmSelector !== 0){
                    try{
                        console.log(`window.pageYOffset : ${window.pageYOffset}`);
                        console.log(`elmSelector.nextElementSibling.getBoundingClientRect().top : ${elmSelector.nextElementSibling.getBoundingClientRect().top}`);
                        moveTop = window.pageYOffset + elmSelector.previousElementSibling.getBoundingClientRect().top;
                        console.log(moveTop);
                        
                        // moveTopMinus = moveTop;
                    }catch(e){}
                }
            }

            console.log(`moveTop : ${moveTop}`);

            // fixed header 변경
            if(moveTop==0){
                document.getElementById("fixedHeaderBigWrap").style.display = "none";
                document.getElementById("header").style.display = "block";
            }else{
                document.getElementById("fixedHeaderBigWrap").style.display = "block";
                document.getElementById("header").style.display = "none";
            }

            // fixed top btn count 처리
            document.getElementById("rightBottomFixedBar").onclick = () =>{
                startScrollCount.innerHTML = "01";
                scrollCount.style.top = "0";
            }
            
            // // fixed scroll count 처리
            // moveTop의 범위에 따라 페이지 수를 나눔..
            if(moveTop>=0 && moveTop<947){
                startScrollCount.innerHTML = "01";
                scrollCount.style.top = "0";
            }else if(moveTop>=947&& moveTop<1894){
                startScrollCount.innerHTML = "02";
                scrollCount.style.top = "20px";
            }else if(moveTop>=1894 && moveTop<2841){
                startScrollCount.innerHTML = "03";
                scrollCount.style.top = "40px";
            }else if(moveTop>=2841 && moveTop<3788){
                startScrollCount.innerHTML = "04";
                scrollCount.style.top = "60px";
            }else if(moveTop>=3788 && moveTop<4735){
                startScrollCount.innerHTML = "05";
                scrollCount.style.top = "80px";
            }else if(moveTop>=4735 && moveTop<5682){
                startScrollCount.innerHTML = "06";
                scrollCount.style.top = "100px";
            }else if(moveTop>=5682 && moveTop<10000){
                startScrollCount.innerHTML = "07";
                scrollCount.style.top = "120px";
            }


            // if(page==0){
            //     startScrollCount.innerHTML = "01";
            // }else{
            //     startScrollCount.innerHTML = (page+"").length==1?"0"+page:page;
            // }


            // 스크롤을 이동시킨다.
            window.scrollTo({top:moveTop, left:0, behavior:'smooth'});


            // 맨 아래까지 잘 안 내려가거나 맨 위까지 잘 안 올라가고 멈추는 현상 해결하기

      });
    });
}


// 2번째 섹션
// 클릭한 것에 클래스(글자를 길게 한다++)를 주고 나머지는 없애고
// 포스터를 띄운다.
// 포스터 순서와 왼쪽 텍스트 순서는 같아야함
// 이미지들은 자동으로 왼쪽으로 회전하다가 마지막 항목에서 처음 항목으로 간다.


// 4번째 섹션
// 공지사항 및 보도자료 클릭 시 해당 색상과 li 내용 바뀜
notice.onclick = () =>{
    notice.classList.toggle("secFourOn");
    press.classList.toggle("secFourOn");
    noticeUl.classList.toggle("secFourOff");
    pressUl.classList.toggle("secFourOff");
}
press.onclick = () =>{
    notice.classList.toggle("secFourOn");
    press.classList.toggle("secFourOn");
    noticeUl.classList.toggle("secFourOff");
    pressUl.classList.toggle("secFourOff");
}





// 슬라이드
let slides  = document.querySelector(".slides"),
    slide   = document.querySelectorAll(".slides li"),
    prevBtn = document.querySelector(".prev"),
    nextBtn = document.querySelector(".next"),
    currentIdx  = 0,
    slideCount  = slide.length,
    slideWidth  = 200,
    slideMargin = 30; 

makeClone();

// 슬라이드 클론을 만든다.
function makeClone(){
    for(let i = 0; i<slideCount; i++){
        let cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add("clone");
        slides.appendChild(cloneSlide);
    }
    for(let i = slideCount-1; i>=0; i--){
        let cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add("clone");
        slides.prepend(cloneSlide);
    }
    updateWidth();
    setInitialPos();
}

// ul의 위드를 계산해 늘려준다.
function updateWidth(){
    let currentSlides = document.querySelectorAll(".slides li");
    let newSlideCount = currentSlides.length;

    let newWidth = (slideWidth+slideMargin)*newSlideCount-slideMargin+"px";
    slides.style.width = newWidth;
}

// 리스트의 기본값을 중앙으로 설정해준다.
function setInitialPos(){
    let initialTranslateValue = -(slideWidth+slideMargin)*slideCount;
    slides.style.transform = "translateX("+initialTranslateValue+"px)";
}













// console.log(header.clientHeight);
// console.log(header.scrollTop);


// window 높이
// console.log(document.body.clientHeight);
// console.log(document.documentElement.clientHeight);


// const headerAllWrap = document.getElementById("headerAllWrap");
// if(headerAllWrap.style.backgroundImage=="images/lightHouse3.png"){
//     document.getElementById("readMore").style.display = "block";
// }else{
//     document.getElementById("readMore").style.display = "none";
// }


// 추가할 것
// 1. 스크롤 시 스크롤 페이지 횟수 찾기..
// 2. html에 스크롤 페이지 수 자동 지정(getElement, innerHTML)
// 3. 스크롤 페이지가 2가 되면 기존 헤더를 display none으로 바꾸고 
//   새로 만든 fixed된 헤더를 display none에서 block으로 바꾼다.


