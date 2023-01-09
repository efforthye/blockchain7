const SHA256 = require("crypto-js").SHA256;
const merkle = require("merkle");

const data = [1, 2, 3, 4];

// sync() 에는 배열을 넣어주어야 한다.
// merkle("sha256").sync() : 배열의 트리를 만듦
// .root() : 그중에서 루트를 가져옴
// merkle("sha256") : merkle 라이브러리를 사용한다.
// merkle 라이브러리는 받는 데이터 배열의 아이템을 전부 문자열(string)으로 처리한다.
const merkleRoot = merkle("sha256").sync(data).root();


const createMerkleRoot = ()=>{
    // SHA256(data[0]) : 데이터를 암호화한다. 암호화된 데이터는 객체 형식이다.
    // .toString() : 문자열로 변환한다.
    // .toUpperCase() : SHA256을 쓸 경우 영어가 소문자로 나타나기 때문에 대문자로 변환해준다.
    return SHA256(data[0].toString()).toString().toUpperCase();


};


const fitstTree = [];

// 데이터의 모든 정보(아이템)을 한번씩 hash(sha256) 방식으로 암호화한다.
for(let i = 0; i<data.length; i++){
    fitstTree.push(SHA256(data[i].toString()).toString().toUpperCase());
};

// 데이터(data) 안의 2개의 아이템을 암호화한 후 연결해서 다시 암호화하며 한 개의 문자열로 만든다.
const secondTreeRoot = SHA256(fitstTree[0] + fitstTree[1]).toString().toUpperCase();

const secondTree = [];
// 암호화된 데이터를 합쳐 다시 암호화해준다.
// 1234가 있으면 12와 34를 처리해야 하므로 i+=2
for(let i = 0; i<fitstTree.length; i+=2){
    secondTree.push(
            SHA256(
                fitstTree[i].toString() + 
                fitstTree[i+1].toString()
            ).toString().toUpperCase()
        );
};
// 하나로 합쳐진 결과물?
const thirdTreeRoot = SHA256(secondTree[0] + secondTree[1]).toString().toUpperCase();


module.exports = {merkleRoot, createdRoot : createMerkleRoot(), secondTreeRoot, thirdTreeRoot};