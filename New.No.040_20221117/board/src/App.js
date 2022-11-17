import logo from './logo.svg';
import './App.css';

// TempTr을 가져옴
import TempTr from './components/TempTr';
import TempTable from './components/TempTable';
import { useState } from 'react';

function App() {

  // const tempArr = [
  //   {name : '우석', age : 17, number : 1, work : 'Front'},
  //   {name : '선주', age : 1, number : 2, work : 'Front'},
  //   {name : '성진', age : 45, number : 3, work : 'Back'},
  //   {name : '영준', age : 2, number : 4, work : 'Back'},
  //   {name : '혜림', age : 22, number : 4, work : 'Back'},
  //   {name : '재일', age : 10, number : 5, work : 'Front'},
  //   {name : '정규', age : 3, number : 6, work : 'Back'},
  // ];

  const [arr, setArr] = useState([
    {name : '우석', age : 17, number : 1, work : 'Front'},
    {name : '선주', age : 1, number : 2, work : 'Front'},
    {name : '성진', age : 45, number : 3, work : 'Back'},
    {name : '영준', age : 2, number : 4, work : 'Back'},
    {name : '혜림', age : 22, number : 5, work : 'Back'},
    {name : '재일', age : 10, number : 6, work : 'Front'},
    {name : '정규', age : 3, number : 7, work : 'Back'},
  ]);
  const [tempArr, setTempArr] = useState({ title: '', text: '' });

  const headData = {name : '이름', age : '나이', number : '번호', work : '필살기'};
  
  // 객체에서 받아오기 위해 스트링을 사용함
  const tempHead = ["name", "age", "number", "work"];

  // 인풋의 값을 가져와 새로 저장해주는 함수
  const getValue = e => {
    const { name, value } = e.target;
    setTempArr({
        ...tempArr,
        [name]: value
    });
    console.log(tempArr);
    // console.log({name, value});
  }


  return (
    <div className="App">

      <h5>Table1</h5>
      <TempTable head={headData} tempHead={tempHead} arr={arr} />
      <input type={"text"} id={'name'} name={'name'} placeholder={'이름'} onChange={getValue}></input>
      <input type={"text"} id={'age'} name={'age'} placeholder={'나이'} onChange={getValue}></input>
      <input type={"text"} id={'number'} name={'number'} placeholder={'번호'} onChange={getValue}></input>
      <input type={"text"} id={'work'} name={'work'} placeholder={'필살기'} onChange={getValue}></input>
      <button onClick={()=>(
        setArr(arr.concat(tempArr))
      )}>입력</button>


      <h5>Table2</h5>
      <table>
        <thead>
          {/* 이게 헤드냐? 라는걸 TempTr.js에 보내줌 -> isHead 매개변수로 받아줌  */}
          <TempTr isHead={true} tableData={headData} head={tempHead}></TempTr>
          {/* <tr>
            <th>이름</th>
            <th>나이</th>
            <th>번호</th>
            <th>필살기</th>
          </tr> */}
        </thead>
        <tbody>

          {/* TempTr에 보내줌 */}
          {arr.map((item, idx)=>(
            <TempTr key={`app : ${idx}`} tableData={item} head={tempHead} />
          ))}

          {/* <TempTr></TempTr> */}

          {/* <tr>
            <td>{tempArr[0].name}</td>
            <td>{tempArr[0].age}</td>
            <td>{tempArr[0].number}</td>
            <td>{tempArr[0].work}</td>
          </tr>
          <tr>
            <td>{tempArr[1].name}</td>
            <td>{tempArr[1].age}</td>
            <td>{tempArr[1].number}</td>
            <td>{tempArr[1].work}</td>
          </tr>
          <tr>
            <td>{tempArr[2].name}</td>
            <td>{tempArr[2].age}</td>
            <td>{tempArr[2].number}</td>
            <td>{tempArr[2].work}</td>
          </tr>
          <tr>
            <td>{tempArr[3].name}</td>
            <td>{tempArr[3].age}</td>
            <td>{tempArr[3].number}</td>
            <td>{tempArr[3].work}</td>
          </tr>
          <tr>
            <td>{tempArr[4].name}</td>
            <td>{tempArr[4].age}</td>
            <td>{tempArr[4].number}</td>
            <td>{tempArr[4].work}</td>
          </tr>
          <tr>
            <td>{tempArr[5].name}</td>
            <td>{tempArr[5].age}</td>
            <td>{tempArr[5].number}</td>
            <td>{tempArr[5].work}</td>
          </tr>
          <tr>
            <td>{tempArr[6].name}</td>
            <td>{tempArr[6].age}</td>
            <td>{tempArr[6].number}</td>
            <td>{tempArr[6].work}</td>
          </tr> */}
        </tbody>

      </table>



      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
