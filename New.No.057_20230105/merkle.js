// 머클트리를 편하게 쓸수있는 라이브러리 : npm i merkle
const merkle = require("merkle");

// 암호화 할 데이터들...
const data = ["15131", "하이하이", "어머나", "cute~", "12323"];

// 값을 하나씩 str에 넣어서 SHA256(str).toString().toUpperCase(); 해주는 것과 같다고 함????

// 머클 트리 merkle(암호화방식.sync(data));
// .sync(data)->트리를 만들어준다. sync : 동기 메서드(동기처리가 될때까지 기다려주는 함수) -> 찾아보기
const merkleTree = merkle("sha256").sync(data);

// .root() : 생성한 머클 트리의 root값을 가져오는 함수
const root = merkleTree.root();

// 2226C8F56B2283F1C9D0611614BD971F58C99116239DF38F2F2B152CAC46192C
console.log(root);

// 64
console.log(root.length);