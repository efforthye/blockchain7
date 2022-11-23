import { useState } from "react";

export default function List() {

    const [listArr, setListArr] = useState([
        { text: "하이", user: "happyworld" },
        { text: "하2", user: "happyworld" },
        { text: "하e", user: "happyworld" },
        { text: "하i", user: "happyworld" },
        { text: "하위", user: "happyworld" },
    ]);

    return <div>{listArr.map((item, idx) => (
        <div key={idx}>
            <div key={`${idx}-1`}>{item.text}</div>
            <div key={`${idx}-2`}>{item.user}</div>
        </div>
    ))}</div>;
}