import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState(0);

  let num = 0;

  const increase = () => {
    num += 1;
    console.log(num);
  }

  return (
    <div className="App" onClick={increase}>
      <ChildClas num={num} text="hi" color={color} />
      <ChildFunc num={num} text="하이" color={color} setColor={setColor} />
    </div>
  );
}

export default App;


// 클래스형 컴포넌트
class ChildClas extends React.Component {
  // props : 상위 컴포넌트가 전달한 데이터
  // 보통은 읽기 전용으로 쓴다. -> 재정의를 하지 않는다~
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    // 클래스형은 생성자에서 매개변수로 받아줘야 한다.
    // 그리고 상속 부모 클래스의 constructor(super)를 호출한다.
    // 이후 this.props를 사용하여 값을 가져올 수 있다.
    super(props);
  }

  render() {
    return (
      // toString(16) -> 16 진수로 바꿔준다. ex) #000000, #FFFFFF
      // css에서 색상을 설정할 때, rgb(255,255,255), rgba(255,255,255,1) : red green blue alpha(opacity:0~1)
      // # 00(R) 00(G) 00(B) -> #00ff00 : green
      <div style={{ color: "#" + this.props.color.toString(16) }}>클래스형 : {this.props.num}</div>
    );
  }
}

// 함수형 컴포넌트에서는 props를 매개변수로 바로 받는다.
// {}를 사용하여 구조문해 할당을 할 수 있다.(편리) 
// function ChildFunc({})는 const {} = props와 같다고 함
function ChildFunc(props) {
  console.log(props);

  // props의 setColor()를 호출한다.
  // state란? : setState(변경할 값)
  // setState((state)=>{    // 여기서의 state는 기존의 값
  //   return 변경할 값
  // });
  // setState((state)=>newState);  // 이렇게 한 줄로 사용
  // state의 이전값을 가져오고 싶을 떄 함수형을 사용하면 된다고 한다.(이해x, 중요)
  const changeColor = () => {
    console.log(props.color);
    // props.setColor(state => state + 100); // 왼쪽 state는 상위 컴포넌트의 기존값이다.(중요)
    // props.setColor(color => color + 100); // 이렇게 써도 된다.
    props.setColor(props.color + 100); // 이렇게 써도 된다.(상위 컴포넌트에서 props로 color를 넘겼기 때문)
  }

  return <div onClick={changeColor} style={{cursor:"pointer"}}>함수형(클릭) : {props.num}</div>;
}