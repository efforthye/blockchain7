// # React의 구조
// - Component : 기능적으로 최소 단위(기능(onClick등등)을 포함하는 HTML구조이다.)
//   Component는 항상 HTML 구조를 return해야 한다.(중요)
//   함수형에서는 함수 자체가 return을 하고, class형에서는 render()에서 return한다.
// # 컴포넌트 구조 
//   - root(외부와 연결해주는 컴포넌트 : public/index.html)
//     - App
//       - UserBox
//         - Regist
//         - Login
//         - Logout
//       - BoardBox
// 

// import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

  let test = "하이";
  let num = 1;
  let bool = true;
  let str = "유후";
  let arr = [1, 2, 3, 4];
  let obj = { name: "귀요미" };
  let nul = null;
  let und = undefined;

  function testing() {
    return "하위";
  }

  function increase() {
    num = num + 1;
    console.log(num);
  }

  let arrDiv = [
    <div key={0}>1</div>,
    <div key={1}>2</div>,
    <div key={2}>3</div>,
    <div key={3}>4</div>,
  ];

  function arrFunc(arr) {
    const tempArr = [];
    // for(let i = 0; i<arr.length; ++i){
    //   tempArr.push(<div key={i-1}>{arr[i]}</div>);
    // }

    arr.forEach((item, idx) => {
      tempArr.push(<div key={idx - 1}>{item}</div>);
    });

    return tempArr;
  }

  // console.log(bool ? 'true' : 'false');

  console.log(); //콘솔로그에는 값을 내보내는 것들만 출력 가능하다.
  // 그러면 값을 내보내는 것과 if, for, while의 차이는 무엇?
  // 값을 내보낸다, 가져온다 : 변수, 함수는 값이다.
  // if(조건문), for,while(반복문) : 단순한 문장일 뿐이다. 문장을 실행할 뿐이다.
  // 위(if,for...) 놈들은 값을 안 가지고 있어서 출력 못 하는 것임 아래의 경우도 마찬가지
  // 하지만 뭣이든 출력값이 있으면 출력할 수 있는 것 같다. 

  // HTML 태그 내에서 {}를 사용하여 변수를 출력할 수 있다.
  return (
    <div className="App">

      {/* 아래에서 만든 클래스를 마운트해준다. */}
      <App1/>

      <div>중괄호는 값을 가져야만 출력 가능(함수여도 출력값이 있으면 출력됨)</div>
      <div>Object는 출력 방법이 모호하기 때문에 출력하지 못한다고 함</div>
      <div>test : {test}</div>
      {/* 함수를 이렇게 가져와서 써도 된다고 함(인식 가능) */}
      <div style={{ cursor: "pointer" }} onClick={increase}>num : {num}</div>
      <div>bool : {bool}</div>
      <div>bool.toString() : {bool.toString()}</div>
      <div>str : {str}</div>
      <div>arr : {arr}</div>
      <div>obj.name : {obj.name}</div>
      <div>obj.toString() : {obj.toString()}</div>
      <div>nul : {nul}</div>
      <div>und : {und}</div>
      {/* if로 출력하지 못한다고 한다. */}
      <div>삼항연산자(bool ? 'true' : 'false') : {bool ? 'true' : 'false'}</div>
      <div>testing() : {testing()}</div>
      <div>
        {/* {arrDiv} */}
        {/* {arrFunc(arr)} */}

        {/* forEach는 리턴값이 없어서 쓰면 안된다. map은 리턴값이 있어서 map으로 바꿈. */}
        {arr.map((item, idx) => {
          return <div key={idx - 1}>{item}</div>
        })}

      </div>
    </div>
  );


}

export default App;


// 우리가 컴포넌트를 만들 때 우리가 모든 컴포넌트의 코드를 알고 있지 않다.
// 그렇기 때문에 React의 Component를 상속받도록 한다.
// 클래스 내부에서의 this는 App1클래스 그 자체인 듯?(확실xxxxx)
class App1 extends React.Component {

  // class는 let, function이라는 명령어 없어도 된다.
  // 여기서 정의한 것은 this의 프로퍼티로 추가된다.
  num = 0;

  // 클래스를 생성할 때 실행되는 코드
  constructor(props) {
    // 상속 받았을 때 부모의 해당 메서드를 실행한다.(부모의 constructor)
    super(props);
    console.log("constructor");
    console.log(this);
    console.log(this.num);
    // this.num = 0;
    this.state = {name : "상태값", num : 0, classNames : ["app3"]};
  }
 
  // 
  divRef = React.createRef();


  // 생성
  componentDidMount(){
    console.log("componentDidMount");
    console.log(this);

    // 이렇게 가져와 사용 가능
    console.log(this.num);
  }

  // 수정
  componentDidUpdate(){
    console.log("componentDidUpdate");
    console.log(this);

  }

  // 삭제
  componentWillUnmount(){
    console.log("componentWillUnmount");
    console.log(this);

  }

  increaseFunc(){
    console.log(this);
    console.log(this.state.num);
  }

  // 화살표함수를 사용하면 this가 메서드 내부가 아닌 클래스 자체가 된다.
  // 호출하는 곳에서 bind() 메서드를 적지 않아도 된다.
  increase= ()=> {
    // this.state.num = this.state.num+1;
    this.setState({name : this.state.name + 1});
    console.log(this.state.num);
    // this.state.name = this.state.name+"1"; // 권장하지 않는 방식
  }

  changeName = () =>{
    this.setState({name : this.state.name + "1"});
    console.log(this.state.name);
    console.log(this.divRef.current);
  }

  changeClass = () =>{
    // 만약 없으면 추가함
    if(this.state.classNames.indexOf("app4") === -1){
      this.setState({classNames : [...this.state.classNames, "app4"]});
    }else{
      // 있으면 
      this.setState({classNames : [...this.state.classNames.slice(0,1)]});

    }
  }

  // 출력
  render() {
    console.log("render");
    console.log(this);

    // 여기서의 this는 increase()가 되어버림
    return <>
      <div onClick={this.increaseFunc.bind(this)}>{this.state.num}</div>
      <div onClick={this.increase}>{this.state.num}</div>
      <div className={this.state.name} ref={this.divRef} onClick={this.changeName} style={{ cursor: "pointer" }}>
        {this.state.name}
      </div>
      <div className={this.state.classNames.join(" ")} onClick={this.changeClass}>클래스 이름 설정 테스트</div>
    </>;
  }
}

const app1 = new App1("props");