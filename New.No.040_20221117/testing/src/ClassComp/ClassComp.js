import React, { useState } from "react";


// 클래스형
export default class ClassComp extends React.Component{
    // 먼저 생성자가 실행됨
    constructor(props){
        super(props);
        // props : 상위 컴포넌트에서 전달한 데이터이다.
        // <ClassComp style={{width:'10px'}}></ClassComp>
        // 여기서 style은 attribute인가 props인가? 
        // attribute : HTML 태그에 적는 것,
        // ClassComp는 컴포넌트이다. 때문에 props(프로퍼티)
        // 예제와 같이 style을 전달했다면
        // <div style={this.props.style}></div>; 와 같이 써야 한다.

        // 이건 클래스에서 쓰는 방식, 아래는 함수형에서 쓰는 방식이다.
        this.state = {count : 0};
        // const [count, setCount] = useState(0);

        // this.state = {count : 0, name : '혜림'};
        // const [count, setCount] = useState(0);
        // const [name, setName] = useState('혜림');

    }

    // 생성자가 실행된 이후에 렌더링이 실행됨
    render(){
        return <div onClick={function(){
            this.setState({count : this.state.count + 1});
        }}
        >
            {count};
            {console.log("asdf")};
        </div>;
    }
}

// 함수형
// export default function ClassComp({}){
//     return <div></div>;
// }





// 같다.
// // 클래스형
// export default class ClassComp extends React.Component{
//     render(){
//         return <div></div>
//     }
// }

// // 함수형
// export default function ClassComp({}){
//     return <div></div>
// }