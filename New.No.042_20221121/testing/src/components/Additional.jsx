import { useState } from "react";
import { useEffect } from "react";
import { useMemo, useCallback, useRef } from "react"

export default function Additional() {

    // useRef() : document.getElementById와 같은 기능을 하는 Hook이다.(중요)
    // useRef() 메서드를 이용하여 HTML의 Element를 가져올 수 있다.
    const ref = useRef();

    // Element 접근 : current 프로퍼티로 가져온다.
    useEffect(() => {
        // 해당 엘리먼트에 
        ref.current.classList.add("hi");
        console.log(ref.current.className);
        // console.log(ref.current.classList);
    }, []);

    const [testValue, setValue] = useState(0);


    // 아래 놈들 사용하는 곳 : axios를 서버에 요청보내고 데이터값 받은걸 useMemo로 처리했었다고 함.
    // useMemo에다가 axios를 넣고 그 안에서 처리를 끝내고 보내줬다고 함(뭐라는 건지는 모르겠다.)
    
    // 기존에 useEffect를 사용할 때는, 어떤 상태의 값이 변화 시 
    // a를 기준으로 다른 상태b의 값을 계산하여 정의하는 경우가 있다. 
    // ex) axios를 통한 데이터 받기
    // useMemo() : state를 따로 정의하지 않고 useMemo를 정의한 변수로 사용할 수 있다.
    // 아래의 tValue는 testValue가 바뀔 때마다 +10 되어 정의된다.
    // state와 마찬가지로 tValue가 달라지면 리랜더링이 발생한다.
    // useMemo : 상태가 변경될 때마다 계산한다.
    const tValue = useMemo(()=>{
        return testValue + 10;
    }, [testValue]);

    // useCallback : useMemo와 비슷하지만, 함수를 그대로 testFunc에 정의한다는 차이가 있다.
    // 즉 이 놈은 함수이므로, 호출할 때는 testFunc()로 사용해야만 한다.(알기)
    // useMemo와 마찬가지로, testValue의 값이 변경되었을 때만 재정의한다.
    const testFunc = useCallback(()=>{
        console.log(testValue+100);
    }, [testValue]);
    // 이 아래 놈처럼 함수를 선언했을 때는 리랜더링 될 때마다 함수를 다시 재정의하는데,
    // useCallback을 사용하면, 두 번째 매개변수의 상태값이 변화하지 않으면
    // 재정의하지 않고 있던 것을 사용한다는 차이가 있다.
    // 즉, 필요 없는 코드의 실행을 막을 수 있기 때문에 최적화 시 사용한다.
    // useMemo또한 마찬가지로 최적화 시 사용한다.
    function testFunc1(){
        console.log(testValue+100);
    }


    return (
        // 가져올 Element의 ref 속성으로 전달한다.
        <div id="now-test" className="now-test" ref={ref} style={{ backgroundColor: "lightpink" }} onClick={()=>{
            setValue(testValue+1); // useState()
            testFunc(); // useCallback()
        }}>
            {/* useMemo()로 정의한 변수 사용시 일반 변수처럼 사용 가능하다. */}
            {tValue}
        </div>
    );
}