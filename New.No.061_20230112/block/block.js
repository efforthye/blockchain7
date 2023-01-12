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
        this.setTimestamp(); 
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

    // 난이도, 시간
    getDifficulty({
        previousDifficulty,   // 이전 블록 난이도
        adjustmentDifficulty, // 난이도조절단위개수 이전 블록의 난이도(10개전난이도)
        adjustmentTimestamp,  // 난이도조절단위개수 이전의 블록 생성 시간
        DAI,                  // 난이도 조절 단위 개수
        averageGenerationTime // 블록 세대당 생성 시간(블록 10개당 생성 시간)
    }){
        // 만약 높이가 단위개수보다 적으면 0
        // 10개 이전에는 제네시스 블록 생성 시 설정한 난이도(0)으로 정의
        if(this.height < DAI){
            this.difficulty = 0;
        }else if(this.height < DAI * 2){
            // 10개 이전에는 제네시스 블록 생성 시 설정한 난이도보다 1 높은 난이도 설정
            this.difficulty = 1;
        }else if(this.height % DAI !== 0 ){
            // 나머지가 0이 아닐 때(난이도 설정할 때가 아닐 때) 이전 난이도로 설정
            // 높이가 난이도 조절 단위 개수에 맞지 않을때 이전 블록의 난이도로 설정
            this.difficulty = previousDifficulty;
        }else{
            // 10개 전 블록과 현재 블록의 생성 시간 차이
            const timeToken = this.timestamp - adjustmentTimestamp;

            console.log("블록 생성 시간 : ", this.timestamp);
            console.log("10개 전 블록 생성 시간 : ", adjustmentTimestamp);
            console.log("10개 이전과 현재 생성 시간 차이 : ", timeToken);
            console.log("10개당 블록 생성 시간 기준 : ", averageGenerationTime);

            // 이전 10개 생성 시간이 5분 이하로 걸렸을 때(시간이 절반이하로 적게 걸렸을 때)
            if(timeToken < averageGenerationTime*0.5){
                // 난이도를 올려 시간이 더 걸릴 수 있게 조절한다.
                this.difficulty = adjustmentDifficulty + 1;
            }else if(timeToken > averageGenerationTime * 1.5){
                // 이전 10개 생성 시간이 15분보다 많이 걸렸을 때
                // 난이도를 낮춰서 시간이 덜 걸릴 수 있게 조절한다.
                this.difficulty = adjustmentDifficulty - 1;
            }else{
                // 시간이 내가 설정한 대로 잘 되어 있으니까 난이도를 그대로 둔다.
                this.difficulty = adjustmentDifficulty;
            }
        }
    }

}

class Block extends BlockHeader {

    previousHash;
    hash;
    data;

    constructor(_data, _previousBlock, _adjustmentBlock, _config) {
        super(_data, _previousBlock);
        this.previousHash = _previousBlock ? _previousBlock.hash : "0".repeat(64);
        // 머클루트(정상적 배열 데이터)가 있으면 해시 생성
        if (this.merkleRoot) {

            // 제네시스 블록 생성 시 전달하지 않으므로 예외 처리
            if(_adjustmentBlock && _config){
                this.getDifficulty({
                    previousDifficulty : _previousBlock.difficulty,
                    adjustmentDifficulty : _adjustmentBlock.difficulty,
                    adjustmentTimestamp : _adjustmentBlock.timestamp,
                    DAI : _config.DAI,
                    averageGenerationTime : _config.averageGenerationTime,
                });
            }

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