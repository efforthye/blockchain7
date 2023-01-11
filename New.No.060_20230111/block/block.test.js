const Block = require("./block.js");
const merkle = require("merkle");

describe("Block Test", ()=>{
    // 우리가 만든 블록의 머클루트와 라이브러리로 머클루트 만든 것이 같은지 확인한다.
    it("merkle Test", () =>{
        const data = ["a", "b", "c"];
        const block = new Block(data);

        const merkleRoot = merkle("sha256").sync(data).root();
        expect(block.merkleRoot).toBe(merkleRoot);
    
    });

    // hash를 확인한다.
    it("hash Test", () =>{
        const data = ["a", "b", "c"];

        // 그냥 블록으로 비교하면 이전 블록이 없어서 해시가 0으로 채워지기 때문에 블록 2개를 만든다.
        const block1 = new Block(data);
        const block2 = new Block(data, block1);

        console.log(block2.hash);

        const hash = Block.createHash(block2);
        expect(block2.hash).toBe(hash);
    
    });
});