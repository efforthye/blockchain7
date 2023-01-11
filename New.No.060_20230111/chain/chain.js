const Block = require("../block/block.js");

class Chain{
    
    // 프라이빗으로 외부접근막음~~
    #chain;

    constructor(){
        this.#chain = [];
        const genesis = new Block(`제네시스 블록 ${new Date()}`);

        console.log(new Date());
        this.#chain.push(genesis); // 블록넣음..........
    }

    // 외부에서 췌인접근시 새로운배열(???) 만들어리턴~~!
    get chain(){
        // 새롭게 안만들면 밖에서 푸쒸한게 들어올수 이뜸 ㅠㅠㅠㅠㅠ 그래서 배열에 넣어뜸 ㅇㅅㅇ!!
        return [...this.#chain];
    }

    // 에드 블록 ㅇ..ㅇ
    addBlock(_data){
        // this.#chain[this.#chain.length-1] : 이전 블록 정보를 가져온다.
        const newBlock = new Block(_data, this.#chain[this.#chain.length-1]);
        this.#chain.push(newBlock);
    }
    // 체인 123 배열일때 4번블록 추가하면 4번블록은3번블록을알구있어야함 ㅇㅅㅇ 프리뷔어스해쉬~!
    // 그러면 췌인 chain 기준으로 2번 인덱스의 블롹을 가져와야겠지 ㅇㅇㅇ
    // 체인의 길이 -1 하면 마지막 인뒉스가 나온다! 그렇기때문에 마지막 인덱스에 해당하는 블록 가져와사용한돠


}

const chain = new Chain();
console.log(chain.chain);
// 배열에푸쉬 ㅇㅅㅇ
chain.chain.push({data : "???"});
console.log(chain.chain);

// a => 어떤 위치에 [] 이라는 값을 넣었다. 그 어떤 위치의 이름이 a다...
const a = [];
const b = a;
b.push("asdf");
console.log(a);