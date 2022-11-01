// jwt : json web token(일정 데이타)
// json은 일종의 데이터 형식이다. {{"",""},{"",""}}
// forms["dataName"] == forms.dataName
// forms?.[dataName] forms?.dataName
// jwt는 결국 웹에서 사용하는 json 형식의 토큰(짧은 데이터, 보통 string)이다.


// 얘를 써야 한다.
const crypto = require("crypto-js");


// parse : json을 객체로 바꾸고, stringify : 객체를 json 형식으로 바꿔준다.
// alg : 어떠한 알고리즘을 사용할 것인가. (종류 : HS256,384,512 / RS, ES, PS256,384,512... 동일)
// alg 기본값은 HS256이므로 그거 사용하면 됨. 이 놈은 암호화하는 놈임.
const tempHeader = JSON.stringify({name : "block7", alg: "HS256"});

// JWT(json web token)는 base64url 형식의 포맷을 사용한다.
// base64는 : ASCII(아스키)코드를 기준으로 데이터를 저장하는 포맷이다.
const base64Header = Buffer.from(tempHeader).toString("base64url");

// 이 놈까지 적어줌으로서 header를 완성했다.
// header를 만드는 이유 : 완성되면 설명해 주신다고 함.
// = 을 없애는 이유 : json web token이 원래 그렇게 되어있기 때문에
const JWTHeader = base64Header.replaceAll("=", "");


// 위와 똑같다. payload를 완성했다. expiresIn 언제 끝낼거냐, 10분이다.
const tempPayload = JSON.stringify({maker : "tester", expiresIn : "10m"});
const base64Payload = Buffer.from(tempPayload).toString("base64url");
const JWTPadload = base64Payload.replaceAll("=", "");

// 위에서 암호화를 HS256으로 했으니까 여기서 SHA256이 아니라 HmacSHA256으로 암호화 해야한다.
const tempSignature = crypto.HmacSHA256(JWTHeader + "." + JWTPadload, "key").toString(crypto.enc.Base64url).replaceAll("=", "");

// JSON Web Token은 'header.payload.signature'로 이루어져 있다.(중요)
// header : JWT의 검증(암복호화?)을 위한 데이터가 저장된다.
// payload : JWT가 갖고 있는 데이터이다.
//   : payload는 우리가 저장하고 싶은 데이터 : 로그인 후의 그 사람의 닉네임 등..
//    혹은 주고받아야 할 데이터나, 어떠한 암호화된 토큰 등... 로그인한 정보 등..
// signature : 암호화된 서명이다.. <<<<< 검증에 사용한다고 한다!..... 
const jwt = `${JWTHeader}.${JWTPadload}.${tempSignature}`;

console.log(`jwt : ${jwt}`);
// eyJuYW1lIjoiYmxvY2s3IiwiYWxnIjoiSFMyNTYifQ.eyJtYWtlciI6InRlc3RlciIsImV4cGlyZXNJbiI6IjEwbSJ9.OD8WHZZe64y0Y9T-K6dvnktJl-xt31AayKn4PM9Rfxc
// https://jwt.io/ 에서 왼쪽 encoded에 넣으면 우리가 입력한 것이 나온다.
// 암호화 방식을 바꿀 수도 있고, 오른쪽 아래에 key(비밀번호)를 맞게 입력하면 
// 위의 이상한 문자가 또 나오게 된다. 그렇게 우리는 값을 암호화해 주고받을 수 있다.




// 제대로 로그인 했는지 계속 확인할 때 사용한다고 한다.
// 로그인했을 때 발행 -> 발행 키로 이 놈이 로그인한게 맞다고 계속 인증
// 10분이상 가만히 있으면 로그아웃, 조작을 했으면 웹토큰이 계속 다시 발행되게 
// 로그인 자체를 웹 상에서 처리한다고 한다. 나중에 조작하려고 하면 세션이 만료되었
// 다거나 새로 로그인하라고 해준다. 반대로 웹 페이지 자동로그인은 어디에 들어있냐면
// 쿠키에 저장되는 거라고 한다. 아니면 세션과 함께 저장해준 거라고 한다.
// 세션쪽에서 서로 주고받아. 세션에 저장했더라도 그놈인지 확인하기 위해서 쿠키에 
// 저장한다. f12 application cookies에 session이 추가가 된다. 거기에 쿠키가 있기 때문에
// 그걸 포함해서 보내 서버쪽에서 확인을 할 수 있다고 한다. 정상적 로그인인지...
// 양방향으로 개인정보 저장하면 큰일난다고 한다. (중요) 단방향으로만 !!
// 보통 복호화 자체를 잘 안 한다고 한다.

// 어떻게 사용?