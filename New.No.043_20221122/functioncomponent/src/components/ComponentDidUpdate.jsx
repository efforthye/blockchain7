import { useEffect } from "react";

function ComponentDidUpdate(){

    // 업데이트시 실행되는 코드 작성
    useEffect(()=>{
        // 이거랑 저거랑 차이가 없다. 사실상 쓸모 없는듯?
        console.log("이거랑");
    });
    console.log("저거랑");

    return (<div></div>);
}

export default ComponentDidUpdate;