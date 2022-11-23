import { useEffect } from "react";

export default function ComponentWillUnmount(){

    useEffect(()=>{
        // 리턴에 함수형태로 적어주면 삭제시 실행 코드인듯?
        return () =>{
            // 여기에 Unmount시 실행할 코드를 적는다.
        };
    }, []);


    return (<div></div>);
}