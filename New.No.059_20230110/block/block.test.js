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

        // 이전 블록이 없기 때문에 해시가 0으로 채워졌다.
        // const block = new Block(data);

        // const hash = Block.createHash(block);
        // expect(block.hash).toBe(hash);

        // 1번 블록
        const block1 = new Block(data);
        // 2번 블록
        const block2 = new Block(data, block1);

        const hash = Block.createHash(block2);
        expect(block2.hash).toBe(hash);

        // console.log(block2.hash);
    
    });
});