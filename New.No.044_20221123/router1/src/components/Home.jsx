import { useLocation } from "react-router-dom";

export default function Home({propsNum}){
    console.log(useLocation().state);

    return (<div>Home! {propsNum}</div>);
}