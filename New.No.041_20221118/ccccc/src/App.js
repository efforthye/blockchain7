// import logo from './logo.svg';
// import './App.css';
// import ClassComp from './components/ClassComp';
// import { Component, useState } from 'react';


// 함수형 컴포넌트
// function App() {

//   const [isMount, setMount] = useState(true);

//   function changeMount(){
//     setMount(!isMount);
//   }

//   // 함수형에서 사용하는 애라고 한다.
//   const [count, setCount] = useState(0);


//   return (
//     <div className="App" onClick={()=>(
//       changeMount()
//     )}>
//       {isMount ? <ClassComp count={count} setCount={setCount} /> : <></>}
//       {/* <ClassComp /> */}
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }




import React from "react";
import BtnComp from './components/BtnComp';
import './App.css';

// 클래스형 컴포넌트
class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {firstNum: undefined, secondNum: undefined, result: undefined};
  }

  componentDidUpdate(){
    console.log(this.state);
  }

  selNum(num){
    if(this.state.firstNum === undefined){
      this.setState({...this.state, firstNum:num});
    }else if(this.state.secondNum === undefined){
      this.setState({...this.state, secondNum:num});
    }
  }

  // render() : 클래스형 컴포넌트(Virtual DOM에 그려지는 HTML구조)의 필수 메서드이다.
  // 함수형 컴포넌트에서는 return으로 바로 사용한다고 한다.
  render(){ 
    return (
      <div className="calculator">
        <div>계산기</div>

        <div className='row'>
          {/* 여기의 onClick은 그냥 변수명일 뿐이다 */}
          <BtnComp item="7" onClick={this.selNum.bind(this)}/>
          <BtnComp item="8" onClick={this.selNum.bind(this)}/>
          <BtnComp item="9" onClick={this.selNum.bind(this)}/>
          <BtnComp item="+" onClick={function(e){
            if(this.state.firstNum !== undefined && this.state.secondNum !== undefined){
              this.setState({
                firstNum : undefined,
                secondNum : undefined,
                result : this.state.firstNum + this.state.secondNum
              });
            }
          }.bind(this)}/>
        </div>
        <div className='row'>
          <BtnComp item="4" onClick={this.selNum.bind(this)}/>
          <BtnComp item="5" onClick={this.selNum.bind(this)}/>
          <BtnComp item="6" onClick={this.selNum.bind(this)}/>
          <BtnComp item="/"/>
        </div>
        <div className='row'>
          <BtnComp item="1" onClick={this.selNum.bind(this)}/>
          <BtnComp item="2" onClick={this.selNum.bind(this)}/>
          <BtnComp item="3" onClick={this.selNum.bind(this)}/>
          <BtnComp item="*"/>
        </div>
        <div className='row'>
          <BtnComp item={this.state.result}/>
          <BtnComp item="0" onClick={this.selNum.bind(this)}/>
          <BtnComp item="-"/>
          <BtnComp item="="/>
        </div>

      </div>
    );
  }
}


export default App;
