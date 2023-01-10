const merkle = require("merkle");

class BlockHeader{
    // private으로 값 선언
    #version;
    #merkleRoot;
    #timestamp;
    #height;
    #difficulty;
    #nonce;

    constructor(_data){
        this.#version = "1.0.0";
        // 머클루트 : data가 있으면 머클루트, 없으면 0 repeat
        this.#merkleRoot = _data ? merkle("sha256").sync(_data).root() : "0".repeat(64);
        // Date : 클래스, now() : static으로 정의된 메서드
        this.#timestamp = Date.now(); 
        this.#height = 0;
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



}

class Block extends BlockHeader{

    // private으로 선언
    #previousHash
    #hash
    #data

    // 생성자
    constructor(_data){
        // super : 부모 클래스의 constructor를 호출(실행)해 초기값을 가져온다.
        super(_data); // 부모에게도 받은 data를 보내준다.
        this.#previousHash = "0".repeat(64);
        this.#hash = "0".repeat(64);
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

}

module.exports = Block;