const merkle = require("merkle");
const SHA256 = require("crypto-js").SHA256;

class BlockHeader{
    // private으로 값 선언
    #version;
    #merkleRoot;
    #timestamp;
    #height;
    #difficulty;
    #nonce;

    constructor(_data, _previoueBlock){
        this.#version = "1.0.0";
        // 머클루트 : data가 있으면 머클루트, 없으면 0 repeat
        this.#merkleRoot = _data ? merkle("sha256").sync(_data).root() : "0".repeat(64);
        // Date : 클래스, now() : static으로 정의된 메서드
        // 체인에 추가될 때의 시점으로 블록 생성 시간을 정의하기 위해 setTimestamp() 메서드를 만들었다.
        this.setTimestamp; // 체인에 추가될 때
        this.#height = _previoueBlock ? _previoueBlock.height + 1 : 0;
        this.#difficulty = 0;
        this.#nonce = 0;
    }

    // private 값에 접근할 수 있도록 get으로 정의해놓음
    get version(){
        return this.#version;
    }
    get merkleRoot(){
        return this.#merkleRoot;
    }
    get timestamp(){
        return this.#timestamp;
    }
    get height(){
        return this.#height;
    }
    get difficulty(){
        return this.#difficulty;
    }
    get nonce(){
        return this.#nonce;
    }

    // 시간을 수정하는 데에 매개변수가 필요 없으므로 일반 메서드로 만들었다.
    setTimestamp() {
        this.#timestamp = Date.now();
    }


}

class Block extends BlockHeader{

    // private으로 선언
    #previousHash
    #hash
    #data

    // 생성자
    constructor(_data, _previoueBlock){
        // super : 부모 클래스의 constructor를 호출(실행)해 초기값을 가져온다.
        super(_data, _previoueBlock); // 부모에게도 받은 data를 보내준다.
        this.#previousHash = _previoueBlock ? _previoueBlock.hash : "0".repeat(64);
        // createHash(this) : 여기서 this는 객체 자체를 매개변수로 보내겠다는 의미이다.
        this.#hash = _data&&_previoueBlock ? Block.createHash(this) : "0".repeat(64);
        this.#data = _data; // 값을 받아와야 하므로
    }

    // private 값에 접근할 수 있도록 get으로 정의
    get previousHash(){
        return this.#previousHash;
    }
    get hash(){
        return this.#hash;
    }
    get data(){
        return this.#data;
    }

    // 블록으로 해시를 만드는 static 메서드
    static createHash(_block){

        // 블록의 정보를 임시로 합칠 변수
        let tempStr = "";

        // 이 과정이 끝나면 체인을 연결하게 된다.
        // _block.setTimestamp();

        // 블록의 정보를 합친다.
        tempStr += _block.version;
        tempStr += _block.merkleRoot;
        tempStr += _block.timestamp;
        tempStr += _block.height;
        tempStr += _block.difficulty;
        tempStr += _block.nonce;
        tempStr += _block.previousHash;
        // hash는 현재 만들고 있는 키라서 추가하지 않는다.
        // data는 merkleRoot로 합쳐져 있기 때문에 merkleRoot로 대체한다.

        return SHA256(tempStr).toString().toUpperCase();

    }

}

// // 제네시스 블록
// const temp = new Block(["a"]);
// // const temp = new Block(["a, b, c"]);
// // 블록으로 해시를 만듦
// const blockHash = Block.createHash(temp);

// 0000000000000000000000000000000000000000000000000000000000000000
// console.log(temp.hash); // 0.64 repeat
// // 013614071417193ECE2320253328D7E1B236EA383645C6A28A4F201608C4EC4F
// console.log(blockHash); 


module.exports = Block;