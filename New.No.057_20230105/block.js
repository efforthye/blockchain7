const merkle = require("merkle");
const SHA256 = require("crypto-js/sha256");

// block Header 클래스
// _height : 매개변수와 변수와 차이점을 주기 위해 == _ : 매개변수임
class Header {
    constructor(_height, _previousHash){
        // 블록의 버전(static으로 선언했기 때문에 this가 아닌 클래스명으로 함수 호출)
        this.version = Header.getVersion();
        // 블록의 높이
        this.height = _height;
        // 블록의 생성 시간
        this.timeStamp = Header.getTimeStamp();
        // 이전 블록의 해시, 없으면 0으로 64개를 채움
        // 최초 블록은 이전 블록의 해시값이 없으니까 값이 없으면
        // "0".repeat(64)를 통해 0으로 만들어진 문자열을 넣어준다.
        // || : 조건문으로 앞의 값이 없으면 뒤의 값을 반환한다.
        this.previousHash = _previousHash || "0".repeat(64);
    }

    // static : 함수를 전역으로 사용할 수 있게 한다.
    // class 동적 할당 하는데 일반적인 함수로 만들면 생성된 객체의 함수
    // static으로 만들면 함수가 여러개 생성되지 않고도 전역에서 사용할 수 있다.
    // static으로 만들면 불필요한 데이터를 절약할 수 있다.
    static getVersion(){
        return "1.0.0";
    }

    static getTimeStamp(){
        return Date.now();
    }

}


// 예를 들어 일반적인 함수는 New로 동적할당 할 때마다 C라는 함수가 있으면
// 동적 할당한 A와 B에 둘다 생성한 객체 안에 함수가 들어있지만  static으로 선언하면
// 클래스에 전역 함수 하나만 있게 된다. 동적 할 때마다 생성될 필요가 없는 함수는 
// static으로 선언해주는 것이 좋다.

// const A = new Header(0, 0);
// const B = new Header(0, 0);


// 그냥 블록 그 자체가 될 클래스이다.
class Block {
    constructor(_header, _data){
        // 받아온 헤더의 버전을 블록에게 주고
        this.version = _header.version;
        // 블록의 높이, 시간, 이전 해시값도 헤더에서 가져온다.
        this.height = _header.height;
        this.timeStamp = _header.timeStamp;
        this.previousHash = _header.previousHash;

        // 블록의 머클 루트(중요)
        this.merkleRoot = Block.getMerkleRoot(_data);
        // 블록의 해시(중요)
        this.hash = Block.createBlockHash(_header, Block.getMerkleRoot(_data));

        // 블록의 값
        this.data = _data;
    }

    // 머클 루트를 만들어 반환해주는 함수, 라이브러리를 사용함
    static getMerkleRoot(_data){
        // merkle 라이브러리를 사용해 sha256 알고리즘으로 트리구조 만들고 루트값 반환
        const merkleRoot = merkle("sha256").sync(_data).root();
        return merkleRoot;
    }

    // 블록의 해시값 반환해주는 함수
    static createBlockHash(_header, _merkleRoot){
        // _header의 value들을 뽑아서 담고
        const values = Object.values(_header);
        // join 배열을 문자열로 합쳐준다. 매개변수로 전달된 값이 구분점이다.
        // ex) [1,2,3,4,5,6] -> join(",") => "1,2,3,4,5,6"
        // ex) [1,2,3,4,5,6] -> join("") => "123456"
        const data = values.join("") + _merkleRoot;
        // 데이터를 다 더한뒤 값을 해싱해서 반환해준다.
        return SHA256(data).toString().toUpperCase();
    }   
}


// 변수에 데이터 내용을 담고
const data = [
    "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks",

];

// block header 생성
// 첫 블록이라 이전 해시값은 넣지 않는다.
const header = new Header(0);
const block = new Block(header, data);
console.log(block);

// 두번째 블록 생성 1==높이, block.hash : 이전해시
const secondHeader = new Header(1, block.hash);
const secondBlock = new Block(secondHeader, ["난 두번째 블록 data~~"]);
console.log(secondBlock);

// 세번째 블록 생성 2==높이, secondBlock.hash : 이전해시
const threeHeader = new Header(1, secondBlock.hash);
const threeBlock = new Block(threeHeader, ["보통 data 내용은 거래 내역이다."]);
console.log(threeBlock);