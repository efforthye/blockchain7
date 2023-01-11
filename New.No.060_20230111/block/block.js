const merkle = require("merkle");
const SHA256 = require("crypto-js").SHA256;

class BlockHeader{

    #version;
    #merkleRoot;
    #timestamp;
    #height;
    #difficulty;
    #nonce;

    constructor(_data, _previoueBlock){
        this.#version = "1.0.0";
        this.#merkleRoot = _data ? merkle("sha256").sync(_data).root() : "0".repeat(64);
        this.setTimestamp; 
        this.#height = _previoueBlock ? _previoueBlock.height + 1 : 0;
        this.#difficulty = 0;
        this.#nonce = 0;
    }

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

    setTimestamp() {
        this.#timestamp = Date.now();
    }


}

class Block extends BlockHeader{

    #previousHash
    #hash
    #data

    constructor(_data, _previoueBlock){
        super(_data, _previoueBlock); // 부모에게도 받은 data를 보내준다.
        this.#previousHash = _previoueBlock ? _previoueBlock.hash : "0".repeat(64);
        this.#hash = _data&&_previoueBlock ? Block.createHash(this) : "0".repeat(64);
        this.#data = _data; // 값을 받아와야 하므로
    }

    get previousHash(){
        return this.#previousHash;
    }
    get hash(){
        return this.#hash;
    }
    get data(){
        return this.#data;
    }

    static createHash(_block){

        let tempStr = "";

        tempStr += _block.version;
        tempStr += _block.merkleRoot;
        tempStr += _block.timestamp;
        tempStr += _block.height;
        tempStr += _block.difficulty;
        tempStr += _block.nonce;
        tempStr += _block.previousHash;

        return SHA256(tempStr).toString().toUpperCase();

    }

}

const temp = new Block(["a"]);
const blockHash = Block.createHash(temp);

module.exports = Block;