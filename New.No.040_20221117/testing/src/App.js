// 이미지를 불러온다.
import logo from './logo.svg';
// css 파일을 불러온다.
import './App.css';
import Test from './Test'; // form의 './test' t를 대문자 T로 바꿔줘야 함


// 파스칼 표기법을 사용한다. -> 컴포넌트라는 뜻이라고 함(이후에 설명)
function App() {
  return (
    <div className="App">
      <Test test = "테스트중입니다." idx="1">와우</Test>
      <Test test = "테스트중입니다." idx="2">와우</Test>
      {/* 위와 같은 걸 Compnent(재사용이 가능한 각각의 독립된 모듈)라고 한다. */}
      {/* react에서는 class가 아닌 className이라고 한다. */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
