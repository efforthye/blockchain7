// Containers(js같은 기능) vs Components(HTML구조)
// Javascript 등의 로직 vs HTML 구조
// 나누는 이유 : 가시성, 리뷰, 유지보수에 좋기 때문이다.

import { useState } from "react";

const Count1Comp = ({ count1, plus, minus, input }) => {
    const [inputNum, setInputNum] = useState(0);
    return (
        <div>
            <div>{count1}</div>
            <div>
                <button onClick={() => { plus() }}>+</button>
                <button onClick={() => { minus() }}>-</button>
                <div>
                    <input value={inputNum} type={'number'} placeholder={"count1"} onInput={(e)=>{
                        setInputNum(+e.target.value);
                    }} />
                    <button onClick={() => { input(inputNum) }}>=</button>
                </div>
            </div>
        </div>
    );
}

export default Count1Comp;