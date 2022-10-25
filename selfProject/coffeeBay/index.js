// window.onload = function(){
//     // .section elem을 모두 찾는다.
//     const elm = document.querySelectorAll('.section');
//     // elem의 개수를 찾는다.
//     const elmCount = elm.length;
//     console.log(elm);
//     console.log(elmCount);
//     // elem의 개수(7)만큼 돌린다.
//     elm.forEach(function(item, index){
//         item.addEventListener('mousewheel', function(event){
//             event.preventDefault();
//             let delta = 0;

//             if (!event) event = window.event;
//             if (event.wheelDelta) {
//                 delta = event.wheelDelta / 120;
//                 if (window.opera) delta = -delta;
//             } 
//             else if (event.detail)
//                 delta = -event.detail / 3;

//             let moveTop = window.scrollY;
//             let elmSelector = elm[index];

//             // wheel down : move to next section
//             if (delta < 0){
//             if (elmSelector !== elmCount-1){
//                 try{
//                 moveTop = window.pageYOffset + elmSelector.nextElementSibling.getBoundingClientRect().top;
//                 }catch(e){}
//             }
//             }
            
//             // wheel up : move to previous section
//             else{
//             if (elmSelector !== 0){
//                 try{
//                 moveTop = window.pageYOffset + elmSelector.previousElementSibling.getBoundingClientRect().top;
//                 }catch(e){}
//             }
//             }

//             const body = document.querySelector('html');
//             window.scrollTo({top:moveTop, left:0, behavior:'smooth'});
//       });
//     });
//   }

















// 스크롤을 막는다.
window.addEventListener("wheel", function(e){
    e.preventDefault();
}, {passive : false});

// html을 변수로 선어낳고, js에서는 html을 변수로 두고 scrollTop을 통해 js 로드 시 혹시라도 만약에 뷰의 Yposition이 0이 아닐 경우를 대비해 다음과 같은 값을 추가한다.
const mHtml = document.getElementsByTagName("html");

// 이 부분 꼭 고치기
// 만약 뷰의 yposition이 -이 아닐 경우를 대비해 추가함..?
// mHtml.animate({scrollTop : 0},10);
// animate({바꿀 속성}, 지속시간, 가속도효과, 콜백함수)
let scrollTop = document.scrollingElement.scrollTop;
// console.log(mHtml[0].getAttribute());
// .getAttribute()

// 나중에 쓰임
let page = 1;

// 휠 이벤트 처리
window.addEventListener("wheel", function(e){
    // 만약 애니메이팅 중이라면 return..
    // if(mHtml.is(":animated")) return;
    // 0.5초가 안지났으면 리턴할까..?
    
    // 만약 휠을 아래로 내리면
    if(e.deltaY>0){
        // 만약 마지막 페이지이면 return 해준다
        if(page==7) return;
        // 0.5초 뒤..?
        page++;
        
        // console.log(page);
    }else{
        if(page==1) return;
        page--;
        // console.log(page);
    }

    let posTop = (page-1) * this.screen.height;
    if(page==0){
        page = 1;
    }else if(page==1){
        posTop = 0;
    }else if(page>=2){
        setTimeout(() => {
            posTop = (page-1) * 1080;
        }, 1000);
    }
    console.log(posTop);
    scrollTop = posTop;

    // 부드럽게 넘어가도록 만들기
    // 위쪽으로 쓸어 올라가듯
    setTimeout(() => {
        this.window.scrollTo(0, posTop);
        // 부드럽게 올라가는 애니메이션 추가
    }, 200);
});

window.scrollTo({top:scrollTop, left:0, behavior:'smooth'});

































// 스크롤 구현 참고 링크 : https://itstudy-mary.tistory.com/371