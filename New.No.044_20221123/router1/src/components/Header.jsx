import { useState } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

export default function Header() {

    const [searchStr, setSearchStr] = useState("");

    return (
        <div>
            ༼ つ ◕_◕ ༽つHeader~~
            <input value={searchStr} placeholder="검색" onInput={(e) => {
                setSearchStr(e.target.value);
            }}></input>
            <div>
                {/* state props를 통해 값을 넘길 수도 있다. */}
                <Link to="/" state={{search : searchStr}}>Home</Link>|
                <Link to="/login">Login</Link>
                <div></div>
                <Link to="log/in">Login2</Link>|
                <Link to={"log/out?"+queryString.stringify({search : searchStr})}>Logout2</Link>
            </div>
        </div>
    );
}