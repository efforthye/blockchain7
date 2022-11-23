import {Link} from 'react-router-dom';

export default function Header(){
    return (
        <div>
            <Link to="/">Home</Link>|
            <Link to="/login">로그인</Link>|
            {/* <div></div> */}
            {/* to="log/in" : a태그 대신 사용한다. 
            a태그를 사용하는 것은 아예 외부 페이지에 접근할때 사용한다.
            ex) localhost -> naver.com */}
            <Link to="log/in">로그인2</Link>|
            <Link to="log/out">로그아웃2</Link>
        </div>
    );
}