// merkle, crypto-js 라이브러리 가져옴
const merkle = require("merkle");
const SHA256 = require("crypto-js/sha256");

// 트리를 만들고 루트값을 반환해주는 함수, 매개변수로는 배열을 넣어준다.
const createMerkle = (_data) =>{
    // _data = ["15131", "하이하이", "어머나", "cute~", "12323", "sdjfklsd", "ㅎㅎ"];

    // 받은 매개변수값이 배열인지 확인
    if(!Array.isArray(_data)) return "너 배열 아님";

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
    return merkleArr[0];
};


const libMerkle = (_data)=>{
    // 암호화 방식은 sha256이고 매개변수로 전달받은 배열을 
    // 트리 구조로 만들어 주고 root값을 가져온다.
    const merkleRoot = merkle("sha256").sync(_data).root();
    return merkleRoot;
}

const data = ["15131", "하이하이", "어머나", "cute~", "12323", "sdjfklsd", "ㅎㅎ"];
// createMerkle :  E884D0D83B2DD15DCBB4FF0D4ABEB1363CC905C40502127AF7B42C2872295B26
console.log("createMerkle : ", createMerkle(data));
// libMErkle :  6029C667CDEA804D703EA1491A52ABE9C36539A5EFE9FE987EC795F1D936B082
console.log("libMErkle : ", libMerkle(data));

// 묶어서 export
module.exports = {libMerkle, createMerkle};