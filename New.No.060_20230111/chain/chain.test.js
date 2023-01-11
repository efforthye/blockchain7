const Chain = require("./chain.js");
const Block = require("../block/block.js");



describe("chain test", ()=>{

    let chain;

    // 다른 테스트를 실행하기 전에 실행하는 메서드
    beforeEach(()=>{
        chain = new Chain();
    });

    describe("add block test", ()=>{

        it("데이터로 블록 추가 확인", () =>{
            console.log(chain.chain); // 여기서의 체인은 새로 생성된 체인이다.
            chain.createBlock(["정상적인 데이터"]);
            console.log(chain.chain); // createBlock으로 정상적 데이터가 입력되어 체인에 추가된다.
            expect(chain.chain).toHaveLength(2);
        }); 

        it("잘못된 데이터로 데이터로 블록 추가 확인", () =>{
            console.log(chain.chain); // 여기서의 체인은 새로 생성된 체인이다.
            chain.createBlock("잘못된 데이터");
            console.log(chain.chain); // 잘못된 데이터로 체인에 추가안된것을 확인가능
            expect(chain.chain).toHaveLength(1);
        }); 
    });


    describe("add2chain", ()=>{

        it("블록 생성 후 추가 확인", () =>{
            const newBlock = new Block(["asdf"], chain.lastBlock);
            chain.add2Chain(newBlock);
            expect(chain.chain).toHaveLength(2);
        }); 

        it("잘못된 블록 생성 후 추가 확인", () =>{
            const newBlock = new Block(["asdf"]); // 이전 블록이 없는 새로운 블록임
            chain.add2Chain(newBlock);
            expect(chain.chain).toHaveLength(1);
        }); 
    });

    describe("lastblock check", ()=>{

        it("마지막 블록 확인", () =>{
            chain.createBlock(["asdf"]);
            const newBlock = new Block(["qwer"], chain.lastBlock);
            chain.add2Chain(newBlock);
            expect(chain.lastBlock).toEqual(newBlock);
        }); 
    });

});