// 설치 명령어 : npm i crypto-js -> crypto-js/sha256

// SHA256은 현재 블록체인에서 가장 많이 채택해 사용하고 있는 암호화 방식이다.
// 출력 속도가 빠르다는 장점을 가지고 있고, 단방향성 암호화 방법이기 때문에 복호화 불가능하다.
// 아직까지는 안정성도 큰 단점이 발견되지 않았다고 한다.
// SHA256 알고리즘은 256비트로 구성된 64자리 문자열로 암호화해준다.
const SHA256 = require("crypto-js/sha256");


const str = "안녕하세요";

console.log("hash : ", SHA256(str).toString());