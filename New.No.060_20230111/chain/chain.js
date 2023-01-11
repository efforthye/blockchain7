const Block = require("../block/block.js");

class Chain{
    
    // 프라이빗으로 외부접근막음~~
    #chain;

    constructor(){
        this.#chain = [];
        const genesis = new Block(`제네시스 블록 ${new Date()}`);

        console.log(new Date());
        this.#chain.push(genesis);
    }

    // 외부에서 췌인접근시 새로운배열(???) 만들어리턴~~!
    get chain(){
        // 새롭게 안만들면 밖에서 푸쒸한게 들어올수 이뜸 ㅠㅠㅠㅠㅠ 그래서 배열에 넣어뜸 ㅇㅅㅇ!!
        return [...this.#chain];
    }

}

const chain = new Chain();
console.log(chain.chain);
chain.chain.push({data : "???"});
console.log(chain.chain);

// a => 어떤 위치에 [] 이라는 값을 넣었다. 그 어떤 위치의 이름이 a다...
const a = [];
const b = a;
b.push("asdf");
console.log(a);