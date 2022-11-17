// tr을 가져옴
import TempTr from "./TempTr";

export default function TempTable({head, tempHead, arr}) {
    return (
        <table>
            <thead>
                <TempTr isHead={true} tableData={head} head={tempHead} />
            </thead>
            <tbody>
                {arr.map((item, idx)=>(
                    <TempTr key={`app : ${idx}`} tableData={item} head={tempHead} />
                ))}
            </tbody>
        </table>
    )
}