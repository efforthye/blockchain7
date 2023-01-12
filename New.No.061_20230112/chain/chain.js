const Block = require("../block/block.js");

// 난이도를 통해서 문제(퀴즈)를 풀게 되고, 문제 해결된 블록을 체인에 추가하게 된다.
// 문제 풀이 과정을 마이닝이라고 한다. 왜 문제 풀이를 하는가? 블록의 생성 시간을 조절하기 위해서이다.
// 결국 난이도는 블록의 생성 시간을 조절하기 위해 높아졌다 낮아졌다 하게 된다.
class Chain{
    
    #chain;

    // 난이도 조절을 결정하는 블록의 개수(난이도 조절 단위 개수)이며
    // 블록이 10개 생성될 때마다 난이도를 재정의 한다.
    #DIFFICULTY_ADJUSTMENT_INTERVAL = 10;

    // 블록 10개 당 생성에 걸리는 시간(블록 한 세대)
    #BLOCK_GENERATION_INTERVAL = 10;

    // 시간의 단위 설정(60s * 1000mx : 1m(1분))
    #TIME_UNIT = 60*1000;

    constructor(){

        // 블록이 들어갈 배열(블록체인)
        this.#chain = [];
        const genesis = new Block(`제네시스 블록 ${new Date()}`);

        // console.log(new Date());
        this.#chain.push(genesis); 
    }

    get chain(){
        return [...this.#chain];
    }


    // 난이도 조절 관련 설정들을 외부에서 사용할 수 있게 묶어준다.
    get config(){
        return {
            // 난이도 조절 단위개수
            DAI : this.#DIFFICULTY_ADJUSTMENT_INTERVAL,
            // 10개 블록 생성 시간
            averageGenerationTime : this.#BLOCK_GENERATION_INTERVAL * this.#TIME_UNIT
        }
    }

    // 난이도를 가져옴
    get adjustmentBlock(){
        // 현재 체인의 길이
        const length = this.#chain.length;
        // 난이도 조절 단위 개수(10개) 이전 난이도 index
        const interval = length - this.#DIFFICULTY_ADJUSTMENT_INTERVAL


        // 1 index : ??
        // index는 -가 될 수 없으므로 제네시스 블록(?)을 내보냄
        if(interval < 0){
            this.#chain[0];
        }else{
            // 그게 아니면 만들어진 난이도(?)를 내보냄
            return this.#chain[interval];
        }

    }


    // 최근 만들어진 블록 가져옴
    get lastBlock(){
        return this.#chain[this.#chain.length - 1];
    }

    // 블록 생성
    createBlock(_data){
        const newBlock = new Block(_data, this.lastBlock, this.adjustmentBlock, this.config);

        return this.add2Chain(newBlock);

        
    }

    // P2P를 위해 ..(체인 밖에서 블록을 생성해서 그 블록을 체인에 추가하기위함)
    add2Chain(_newBlock){
        const isValid = Block.isValidBlock(_newBlock, this.lastBlock);
        if(isValid.isError){
            console.error(isValid.msg);
            return null;
        }else{
            this.#chain.push(_newBlock);
            return _newBlock;
        }
    }

}

const chain = new Chain();
for(let i = 0; i<32; i++){
    chain.createBlock([`test block ${i}`]);
}

console.log(chain.chain);



module.exports = Chain;