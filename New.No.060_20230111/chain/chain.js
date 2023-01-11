const Block = require("../block/block.js");

class Chain{
    
    #chain;

    constructor(){

        // 블록이 들어갈 배열(블록체인)
        this.#chain = [];
        const genesis = new Block(`제네시스 블록 ${new Date()}`);

        console.log(new Date());
        this.#chain.push(genesis); 
    }

    get chain(){
        return [...this.#chain];
    }

    // 최근 만들어진 블록 가져옴
    get lastBlock(){
        return this.#chain[this.#chain.length - 1];
    }

    // 블록 생성
    createBlock(_data){
        const newBlock = new Block(_data, this.lastBlock);


        // const isValid = Block.isValidBlock(newBlock, this.lastBlock);
        // if(isValid.isError){
        //     console.error(isValid.msg);
        //     return null;
        // }else{
        //     this.#chain.push(newBlock);
        //     return newBlock;
        // }



        // this.#chain.push(newBlock);

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

// // 제네시스 블록이 들어있는 체인 배열 생성
// const chain = new Chain();

// // 블록 3개 추가
// chain.createBlock(["asdf"]);
// chain.createBlock(["asdf2"]);
// chain.createBlock(["asd3"]);

// // data와 이전 블록을 가지고 블록을 하나 만듦
// const block = new Block(["qwer"], chain.lastBlock);
// console.log("lastBlock : ", chain.lastBlock);

// // 제네시스 블록만 있을 때 추가하려고 함(높이 충돌)
// chain.add2Chain(block);

// console.log(chain); // 객체 그 자체

// console.log(chain.chain); // 객체의 체인 

module.exports = Chain;