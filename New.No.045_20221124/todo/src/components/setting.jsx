
import styled from 'styled-components';

// default를 붙이지 않으면 App.js에서 중괄호를 통해 가져옴(중요) {TodoBtn}
// default는 파일 당 하나만 들어갈 수 있다.(중요)
// 파일 자체가 컴포넌트를 내보내면 파일이름도 대문자로 시작하고,
// 여러 컴포넌트를 내보낼 것이면 파일이름도 소문자로 해주면 좋다.
// export는 여러개를 내보낼 수 있다.(중요)
export const TodoBtn = styled.div`
display : inline-block;
border : 1px solid black;
border-radius : 5px;
padding : 5px 10px;
cursor : pointer;
color : black;

&.todo{
  color : gray;
  border-color : gray;

}
&.in-progress{
  color : gold;
  border-color : gold;

}
&.complete{
  color : green;
  border-color : green;

}
&.sky{
  color : #0dcaf0;
  border-color : #0dcaf0;
  
}

&.on{
  color : black;

  &.todo{
    background-color : gray;

  }
  &.in-progress{
    background-color : gold;

  }
  &.complete{
    background-color : green;

  }
}
`;