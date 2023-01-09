const SHA256 = require("crypto-js").SHA256;
const merkle = require("merkle");

const data = [1, 2, 3];
const merkleRoot = merkle("sha256").sync(data).root();

const fitstTree = [];

// 데이터의 모든 정보(아이템)을 한번씩 hash(sha256) 방식으로 암호화한다.
for(let i = 0; i<data.length; i++){
    fitstTree.push(SHA256(data[i].toString()).toString().toUpperCase());
};

const secondTree = [];
for(let i = 0; i<fitstTree.length; i+=2){
    // 임시값, 아래에서 조건에 따라 값을 정의한다.
    let temp = '';
    // 홀수개이며 다음 인덱스(아이템)이 없을 경우 기존의 아이템을 그대로 사용한다.
    if(i+1===fitstTree.length){
        temp = fitstTree[i];
    }else{
    // 다음 인덱스(아이템)이 있을 때 
        temp = SHA256(fitstTree[i] + fitstTree[i+1]).toString().toUpperCase();
    }
    secondTree.push(temp);
};

const oddThirdRoot = SHA256(secondTree[0] + secondTree[1]).toString().toUpperCase();


// 트리를 만들고 루트값을 반환해주는 함수, 매개변수로는 배열을 넣어준다.
// 매개변수에 _ 붙이는 이유 : 매개변수 구분하기 위해 
const createMerkle = (_data) =>{
    // _data = ["15131", "하이하이", "어머나", "cute~", "12323", "sdjfklsd", "ㅎㅎ"];

    // 받은 매개변수값이 배열인지 확인
    if(!Array.isArray(_data)) return {isError : true, msg: "너 배열 아님"};

    // 배열의 값을 전체 암호화 해서 새로운 배열로 반환해준다.
    let merkleArr = _data.map((item) =>
        SHA256(item).toString().toUpperCase()
    );

    // 머클 루트가 나오는 조건 : 한 개의 값이 나올 때까지 계속 돌려야 한다.
    // merkleArr 배열의 1보다 크면 1이 될 때까지 반복 작업한다.
    while(merkleArr.length > 1){
        const tempArr = [];
        // 머클의 길이와 같아질 때까지 돌린다.
        for (let i = 0; i<merkleArr.length ; i+=2) {
            if(i+1 === merkleArr.length){
                // 마지막 홀수일 때 자기 자신을 암호화
                tempArr.push(merkleArr[i]);
            }else{
                tempArr.push(
                    SHA256(merkleArr[i]+merkleArr[i+1]).toString().toUpperCase()
                )
            }
        }
        merkleArr = tempArr;
    }
    // return을 객체로 내보내는 이유 : 블록 생성 후 해당 블록이 
    // 정상적인 블록인지 확인하기 위해 객체로 내보낸다.
    // isError를 통해 생성 도중 문제가 발생했짖니 파악할 수 있다.
    // - jest에서 사용하는 것이 아닌 블록 생성 단계에서 사용한다.
    return {isError : false, value : merkleArr[0]};
};



module.exports = {oddMerkleRoot : merkleRoot, oddThirdRoot};