const merkle = require("merkle");
const SHA256 = require("crypto-js").SHA256;

class BlockHeader {

    version;
    merkleRoot;
    timestamp;
    height;
    difficulty;
    nonce;

    constructor(_data, _previousBlock) {

        this.version = "1.0.0";
        const merkleRoot = this.createMerkleRoot(_data);
        if (merkleRoot.isError) {
            this.merkleRoot = "";
            console.error(merkleRoot.msg);
        } else {
            this.merkleRoot = merkleRoot.value;
        }
        this.setTimestamp;
        this.height = _previousBlock ? _previousBlock.height + 1 : 0;
        this.difficulty = 0;
        this.nonce = 0;

    }

    // 블록 현재시간 설정
    setTimestamp() {
        // 밀리초(0.001초) 기준이다.
        this.timestamp = Date.now();
    }

    // 머클루트 생성
    createMerkleRoot(_data) {
        // 배열이 아니거나 빈배열
        if (!Array.isArray(_data) || !_data.length) {
            return { isError: true, msg: "Data가 배열이 아닙니다." }
        }
        return { isError: false, value: merkle("sha256").sync(_data).root() };
    }

}

class Block extends BlockHeader {

    previousHash;
    hash;
    data;

    constructor(_data, _previousBlock) {
        super(_data, _previousBlock);
        this.previousHash = _previousBlock ? _previousBlock.hash : "0".repeat(64);
        // 머클루트(정상적 배열 데이터)가 있으면 해시 생성
        if (this.merkleRoot) {
            this.hash = Block.createHash(this);
        } else {
            this.hash = "";
        }
        this.data = _data;
    }

    // 블록해시 생성
    static createHash(_block) {
        let tempStr = "";
        // _block 객체의 key들을 배열로 변환
        const keys = Object.keys(_block);
        for (let i = 0; i < keys.length; i++) {
            if (keys[i] === "hash" || keys[i] === "data") {
                // continue일시 다음 반복으로 건너뛴다.
                continue;
            }
            tempStr += _block[keys[i]];
        }

        return SHA256(tempStr).toString().toUpperCase();
    }

    // 생성된 블록 정상적인지 확인
    static isValidBlock(_newBlock, _previousBlock) {
        // 높이 확인
        if (_newBlock.height !== _previousBlock.height + 1) {
            return { isError: true, msg: "블록의 높이가 이상합니다.." };
        }
        // 이전 해시 확인
        if (_newBlock.previousHash !== _previousBlock.hash) {
            return { isError: true, msg: "이전 블록의 해시가 다르다." };
        }
        // 해시 확인
        if (_newBlock.hash !== Block.createHash(_newBlock) ) {
            return { isError: true, msg: "블록의 해시 생성중 오류 발생" };
        }

        return {isError : false, value : _newBlock};
    }

}

const temp = new Block(["a"]);
const blockHash = Block.createHash(temp);

module.exports = Block;