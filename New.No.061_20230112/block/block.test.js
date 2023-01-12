const Block = require("./block.js");
const merkle = require("merkle");

describe("Block Test", ()=>{

    describe("Data가 배열일 때", ()=>{
        const data = ["a"];
        const block = new Block(data);

        it("merkleRoot가 정상적인가?", () =>{
            const merkleRoot = merkle("sha256").sync(data).root();
            expect(block.merkleRoot).toBe(merkleRoot);
        }); 

        it("hash와 merkleRoot의 길이가 64인가?", () =>{
            // toHaveLength : 길이 확인
            expect(block.merkleRoot).toHaveLength(64);
            expect(block.hash).toHaveLength(64);
        }); 
        
    });

    // 난이도 확인
    describe("difficulty check", ()=>{
        const data = ["a"];
        const block = new Block(data);
        // getDifficulty 호출 시 사용되는 객체를 정의할 변수
        let tempDifficultyOptions;

        // 테스트할 때마다 코드를 실행하여 tempDifficultyOptions와 블록의 높이를 다시 정의한다.
        beforeEach(()=>{
            tempDifficultyOptions = {
                previousDifficulty : 9,
                adjustmentDifficulty : 10,
                adjustmentTimestamp : Date.now(),
                DAI : 10,
                averageGenerationTime : 60*1000,
            }
            block.height = 30;
        });

        // 첫 예외처리
        it("높이가 0~9까지, 난이도는 0인가?", () =>{

            for(let i = 0; i<10; i++){
                block.height = i; // 높이 0~9까지
                // 난이도 재정의
                block.getDifficulty(tempDifficultyOptions); 
                expect(block.difficulty).toBe(0); // 난이도가 0인가?
            }

        }); 

        // 이후 예외처리
        it("높이가 10~19까지, 난이도는 1인가?", () =>{
            for(let i = 10; i<20; i++){
                block.height = i; // 높이 10~19까지
                // 난이도 재정의
                block.getDifficulty(tempDifficultyOptions); 
                expect(block.difficulty).toBe(1); // 난이도가 1인가?
            }
        }); 

        // 
        it("기준 시간보다 빠르게 생성되었을 경우 난이도를 높이는가?", ()=>{

            // 10개 이전 블록이 20초 이전에 생성되었다.
            tempDifficultyOptions.adjustmentTimestamp  -=  20*1000; // 20초 전
            block.getDifficulty(tempDifficultyOptions);
            // 10개 이전 블록의 난이도에 1이 추가 되었는가?
            expect(block.difficulty).toBe(tempDifficultyOptions.adjustmentDifficulty + 1);

        });

        it("기준 시간 허용 범위 이내에 생성되었을 경우 난이도를 유지하는가?", ()=>{

            // 10개 이전 블록이 60초(기준시간) 내에 생성되었다.
            tempDifficultyOptions.adjustmentTimestamp  -=  tempDifficultyOptions.averageGenerationTime; 
            block.getDifficulty(tempDifficultyOptions);
            // 10개 이전 블록의 난이도가 현재 난이도와 같은가?
            expect(block.difficulty).toBe(tempDifficultyOptions.adjustmentDifficulty);

        });

        it("기준 시간보다 오래 걸려서 생성되었을 경우 난이도를 낮추는가?", ()=>{

            // 10개 이전 블록이 100초(기준시간) 내에 생성되었다.
            tempDifficultyOptions.adjustmentTimestamp  -=  100 * 1000; 

            block.getDifficulty(tempDifficultyOptions);

            // 10개 이전 블록의 난이도보다 현재 난이도가 1 낮은가?
            expect(block.difficulty).toBe(tempDifficultyOptions.adjustmentDifficulty -1);

        });
        
    });


});