// td를 가져옴
import TempTd from "./TempTd";

// App.js에서 보낸 tableData, 매개변수를 구조분해할당으로 받았음
// const {tableData = props};
export default function TempTr({tableData, head, isHead}){
    // console.log(tableData);
    
    if(isHead){
        return (
            <tr>
                {head.map((item, idx)=>(
                    // <TempTd key={`tempTr : ${idx}`} item={tableData[item]}></TempTd>
                    <th key={`tempTr : ${idx}`}>
                        {tableData[item]}
                    </th>
                ))}
                {/* <TempTd item="asdf"/> */}
            </tr>
        );
    }
    
    return (
        <tr>
            {head.map((item, idx)=>(
                <TempTd key={`tempTr : ${idx}`} item={tableData[item]}></TempTd>
            ))}
            {/* <TempTd item="asdf"/> */}
        </tr>
    );
}