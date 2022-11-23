import { useLocation } from "react-router-dom";
import queryString from "query-string";

export default function Out(){

    // window.location 형식으로 보여준다.(이해안됨)
    const location = useLocation();

    // 쿼리스트링을 객체 형식으로 바꿔준다.
    console.log(queryString.parse(location.search));

    return (
        <div>OUT~~~!!!</div>
    );
}