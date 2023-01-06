// 설치 명령어
// npm i --save-dev jest

// 블록을 생성하기 위해 클래스를 가져온다.
const Block = require("./block.js");

// 제네시스 블록 생성을 위해 인터페이스 가져옴
const InterfaceBlock = require("./block.interface.js");

// 제네시스 블록 생성(매개변수 : 버전, 높이, 타임스탬프, 이전해시, 해시, 머클루트, 논스, 난이도, 데이터)
const genesis = new InterfaceBlock({
    version: "1.0.0",
    height: 0, // 첫 블럭이기 때문
    timestamp: Date.now(),
    previousHash: "0".repeat(64),
    hash: "0".repeat(64),
    merkleRoot: "0".repeat(64),
    nonce: 0,
    difficulty: 0, // 난이도
    data: ["This is genesis block in my blockchain."],
});

// config.js에서 설정했던 설정파일 require로 가져옴
const {
    lib: { hexToBinary },
    constant: {
        DIFFICULTY_ADJUSTMENT_INTERVAL,
        BLOCK_GENRATION_INTERVAL,
        TIME_UNIT,
    }
} = require("./config.js");

// 테스트 묶음 생성
describe("최초 블록 체크", () => {
    // 테스트 내용
    it("오브젝트인지 확인", () => {
        // 같은지 확인하는 검사식 : expect().toBe()
        // 첫 블록(genesis)이 객체인지 확인한다.
        expect(typeof genesis).toBe("object");
        console.log("ㅇㅅㅇ");
    });

    it("최초 블록의 값을 확인", () => {

        // toBe : 변수값 검사
        expect(genesis.version).toBe("1.0.0");

        // toEqual : 객체나 배열값 검사(배열에 있는 값 비교, 객체나 배열에서 사용 가능)
        // expect({a:0}).toEqual({a:0}); // true
        // 위에서 우리가 입력한 data를 넣어서 그것과 같은지 비교하면 된다.
        expect(genesis.data).toEqual(["This is genesis block in my blockchain."]);

    });

});


// genesis로 블록을 만든뒤 블록 테스트
describe("block check", () => {

    // genesis로 블록을 생성한다.
    const block = new Block(genesis);

    // 난이도를 구하기 위한 이전 난이도를 정의한다.
    const adjustmentDifficulty = 0;

    // 난이도를 구하기 위한 이전 시간을 정의해둔다. 현재 시간을 정의해줌
    const adjustmentTimestamp = Date.now();

    // 난이도의 체크 모음
    describe("난이도 check", () => {
        let tempBlockData;

        // beforeEach : 테스트를 실행하기 전에 실행
        beforeEach(() => {
            tempBlockData = {
                height: 10, // 임시
                timestamp: Date.now(),
                previousHash: "",
            }
        });

    });

    // 더 작성해야 함

});

// jest를 사용 : block.js의 내용들...
// 일단 중지한다고 한다.
// jest : 옵저버패턴(디자인패턴)과 생김새가 비슷하다고 한다. (뭐라는지 모르겠음!)
// 옵저버 패턴 공부하면 면접에 도움될수 있다고 함 (디자인패턴 : 주니어->시니어 갈때 중요)


