import { useRef } from "react";
import { useCallback, useMemo, useEffect, useState } from "react";

export default function EffectTest(){

    const [num, setNum] = useState(0);
    const [name, setName] = useState("");
    const [file, setFile] = useState({
        name : "해피월드",
        ext : "png",
        type : "image/png"
    });

    useEffect(()=>{
        console.log("이펙트훅 테스트 시작");
    }, []);

    useEffect(()=>{
        console.log(`번호가 ${num}으로 변경되었습니다.`);
        setName(`${num}`);
    }, [num]);

    useEffect(()=>{
        console.log(`이름이 ${name}으로 변경되었습니다.`);
        // setFile({ ...file, name : `${num}`}); // 나중게 남는다.
        setFile({ ...file, name : name}); // 나중게 남는다.
    }, [name]);

    useEffect(()=>{
        console.log(file);
        console.log("하이~");
    }, [file]);


    const increase = () =>{
        setNum(num+1);
    }
    const tempNum = num + 10;
    // num이 바뀌었을 때만 실행
    const memoNum = useMemo(()=>{
        return num + 10;
    },[num]);
    const ref = useRef(); // 아래에서 이름을 클릭하면 해당 엘리먼트가 출력됨
    // 만약 회원가입 한다고 칠 때, 이름 나이 지역 아이디 비번 성별 지역 등등을
    // 인풋 함수를 만들어 연결할텐데, 이놈들 각각은 state가 될 것이다. 
    // 바뀌었을 때 값을 value로 찍기 때문. 그럼 만약 아이디 바뀌었을 때는
    // 그 나머지에 대한 함수는 선언되는가? (-> 뭐라는건지 이해안감)
    // const changeId()=>{} 이런 방법과 같이 Hook을 사용하지 않았을 경우
    // 나머지 함수들도 전부 다시 선언된다.
    // 다시 선언하는 작업을 하지 않기 위해서 useCallback을 사용한다.
    // 최적화에 사용되며, 최적화를 생각하지 않으면 쓸 필요가 없다고 한다.(이해x)
    // 이놈은 useEffect와의 차이점이 함수밖에 없는 느낌..... 아닌거같기도하공ㅎ
    const increaseCallback = useCallback(()=>{
        setNum(num+1);
    }, [num]);

    return (
    <div>
        {/* <button onClick={increase}>{num+10}</button> */}
        {/* <button onClick={increase}>{tempNum}</button> */}
        {/* <button onClick={increase}>{memoNum}</button> */}
        <button onClick={increaseCallback}>{memoNum}</button>
        {/* <div>{name}</div> */}
        <div ref={ref} onClick={()=>{
            console.log(ref.current);
        }}>{name}</div>
        <div>{`${file.name}.${file.ext}`}</div>
    </div>
    );
}