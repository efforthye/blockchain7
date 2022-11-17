// 이 건 props이다. 나중에 다시 설명한다고 한다.

import { useState } from "react";

// import는 어디에서 하는거지? : testing의 index.js인듯?
// props는 상위 컴포넌트에서 설정된 값이다.
// App.js에서 <Test test = "테스트중입니다." />를 해줬는데
// test를 test1로 바꾸고 아래 매개변수도 바꿔주면 똑같이 사용 가능하다.
// props.children은 상위 컴포넌트(App.js)에서 해당 컴포넌트의 자식(태그 안쪽)에 설정된 값이다.
// <Test test = "테스트중입니다.">와우</Test>
export default function Test({ test, children, idx }) {
    // 여기서 idx : App.js쪽에서 프롭스로 보낸 값
    console.log(idx);

    // let count = 0;
    const [count1, setCount1] = useState(0);

    // const [arr2, setArr] = useState({title : '', text : ''});
    // const [viewArr, setViewArr] = useState([]);

    // const tempArr = [1,2,3,4,5,6,7,8,9];

    const [arr, setArr] = useState([
        { title: '테스트중입니다.', text: "아모랑파티", userName: "phr" },
        { title: '나는', text: "낭만고양이", userName: "lkw" },
        { title: '안녕하세요', text: "하이하이", userName: "phr" },
        { title: '가원이언니', text: "귀여움", userName: "phr" },
    ]);


    const [tempArr, setTempArr] = useState({ title: '', text: '' });
    const getValue = e => {
        const { name, value } = e.target;
        setTempArr({
            ...tempArr,
            [name]: value
        });
        console.log(tempArr);
    }




    // HTML 문법 내에 Javascript 변수 혹은 함수 등을 사용할 때 {}로 묶어준다.(중요)
    // HTML 태그의 형제 방식으로 return하지 못한다.
    // 하나의 html 태그 구조로 묶어서 return해야 한다.
    // return <div>{test}</div><button></button>;
    // 하지만 빈 태그를 사용할 수 있어서 이렇게 감싸서 보내면 된다.
    return (
        <>
            <div style={{ fontSize: "30px", backgroundColor: "red" }}>
                {test}{children}
            </div>
            <h3>하이하이와이파이</h3>

            <div style={{ backgroundColor: "rgb(245,245,245)" }}>
                {arr.map((item, idx) => {
                    return <div key={`text : ${idx}`} style={{ cursor: "pointer" }} onClick={function () { alert(item.text) }}>
                        {idx + 1}. {item.title}
                    </div>
                })}
            </div>

            {/* <input className="title" name="title" type="text" placeholder="제목" onChange={getValue}/>
                <input className="text" name="text" type="text" placeholder="내용" onChange={getValue} />
                <button onClick={()=>{setViewArr(viewArr.concat({...arr}))}}>추가</button> */}
            <input className="title" id="title" name="title" type="text" placeholder="제목" onChange={getValue} />
            <input className="text" id="text" name="text" type="text" placeholder="내용" onChange={getValue} />
            {/* <input className="userName" id="userName" name="userName" type="text" placeholder="이름" onChange={getValue} /> */}
            <button onClick={()=>{
                    setArr(arr.concat(tempArr));
                    console.log(arr);
                    document.getElementById("title").value = "";
                    document.getElementById("text").value = "";
                }}>추가</button>

            {/* <ul>
                {tempArr.map((item, index)=>{
                    // key : 중복된 것들을 구분할 수 있게 하기 위해서 넣는다.
                    return <li key={`test : ${index}`}>{item}</li> 
                })}
            </ul> */}

            <div>
                <button onClick={function () {
                    console.log(count1);

                    // count++ : 안된다. 안되는건 아닌데 권장하지 않는다고 함
                    setCount1(count1 + 1);
                }}
                >{count1}</button>
            </div>

        </>
    );
}


// Component : 여러 개의 함수들을 모아 하나의 특정한 기능을 수행할 수 있도록
//   구성한 작은 기능적 단위
// React : View를 위한 라이브러리 -> Front End에 보여주기 위한 라이브러리
//   랜더링(화면에 출력하는 것)이 주된 기능이다.
//   기능은 div등의 element구조로 많이 나뉘어진다. -> 무슨 뜻이지? : 