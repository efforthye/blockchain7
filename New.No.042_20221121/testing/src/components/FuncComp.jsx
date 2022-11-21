// 함수형 컴포넌트는 React를 import 해줄 필요가 없다.
import { useState, useEffect } from "react";


// Hook : 함수형 컴포넌트에서 클래스형 컴포넌트의 기능들을 사용하기 위해 사용하는 것
// Hook은 use로 시작한다. 
// useState(), useEffect(), useCallback(), useMemo(), useRef(), useContext(), useReducer() 등등..
// Hook은 사용자가 직접 구현할 수도 있다.(커스텀 훅)
//  - Custom Hook과 Component의 차이 : HTML문법으로 return하면 컴포넌트, 아니면 커스텀훅
// useState()와 useEffect()는 React에서 뺄 수 없는 Hook이다. 나머지는 크게 상관x


// 매개변수를 구조분해할당으로 가져오면 props.text, props.func로 사용하지 않아도 된다.
export default function FuncComp({text, func}){

    // 상위 컴포넌트의 props중 func를 가져와 실행함
    func(); // console.log에 testing FuncComp가 찍힌다.
    console.log("ㅡㅡ");

    // 함수형 컴포넌트의 state(상태값)선언 및 정의(=초기화)
    // state가 변경되면 해당 컴포넌트를 다시 불러온다.(리랜더링)
    // 단 다시 불러올 때 Hook으로 된 변수, 함수들은 다시 부르지 않는다.
    // 함수는 다시 읽더라도 이 아래 놈의 값은 변하지 않는다고 한다.(이해x)
    // Hook(useState 등등)을 얼마나 잘 쓰느냐가 리액트의 실력을 결정한다고 한다.
    // useState()는 함수형 컴포넌트의 투톱(빠지면 안 되는 것)중 하나이다.
    const [test, setTest] = useState("function state test");
    const [test1] = useState("function state test1");

    // useEffect()도 함수형 컴포넌트의 투톱(빠지면 안 되는 것)중 하나이다.
    // useEffect()는 랜더링 후에 실행되는 콜백함수라고 한다.(이해x)
    // useEffect()의 두 번째 매개변수는 state값의 배열을 넣는다고 한다.(이해x)
    // 빈 배열의 경우 componentDidMount와 같은 역할을 한다고 한다.
    // 즉 마운트(실행)되었을 때 실행한다고 한다.(중요)
    // 사용 : 게시판 처음 불러왔을 떄 목록을 불러올 때 등에 사용한다고 한다.(중요중요)
    // 컴포넌트 생성 : componentDidMount()
    useEffect(()=>{
        console.log("function useEffect(두번째매개변수빈배열) : 클래스형의 DidMount와 같은 역할");
    }, []);


    // 컴포넌트 수정 : componentDidUpdate()
    useEffect(()=>{
        console.log("function useEffect(두번째매개변수없음) : 클래스형의 componentDidUpdate와 같다. state가 변경되었음을 뜻한다.");
    })

    // state중 test값이 변경되었을 때 실행되는 메서드(내가 원하는 놈이 변경되었을 때 실행된다.)
    // 두 번째 매개변수 배열의 아이템으로 감지하고 싶은 state(상태값)을 넣으면 된다.
    // componentDidUpdate()
    useEffect(()=>{
        console.log("function useEffect(두번째매개변수test) : 원하는 놈(test)의 state값 변경됨");
    }, [test]);

    useEffect(()=>{
        console.log("function useEffect(두번째매개변수test1) : 원하는 놈(test1)의 state값 변경됨");
    }, [test1]); 

    useEffect(()=>{
        console.log("function useEffect(두번째매개변수test,test1) : 둘중 한 놈의 state값이 변경되었을 때 실행됨");
    }, [test, test1]); 


    // 컴포넌트 삭제 : componentWillUnmount()
    useEffect(()=>{
        return ()=>{
            console.log("function useEffect(두번째매개변수빈배열),함수를리턴 : 빈 배열의 useEffect에서 함수를 리턴하면, componentWillUnmount(삭제 감지)와 같이 작동한다.");
        }
    }, []);


    return <div onClick={function(){
        // state 재정의
        setTest(test+"1"); 
    }}>FuncComp, {text}, {test}, {test1}</div>;
}