
// 블록 인터페이스 들고옴
const InterfaceBlock = require("./block.interface.js");

// 모듈 import
const {
    lib: { merkle, SHA256, hexToBinary },
    constant: {
        BLOCK_GENRATION_INTERVAL,
        DIFFICULTY_ADJUSTMENT_INTERVAL,
        TIME_UNIT,
    }
} = require("./config.js");



// 논스값 올려 마이닝하기 위함
// 인터페이스를 상속받은 Block 클래스를 만듦
class Block extends InterfaceBlock {
    // 부모 함수 사용
    constructor() {
        super();
    }

    // 블록 생성 함수
    create(_previousBlock, _adjustmentDifficulty, _adjustmentTimestamp, _data) {
        try {
            // 이전 블록에서 해시(hash)를 가져와서 현재 블록의 이전 블록의 해시(previousHash)로 초기화해준다.
            // 이전 블록의 높이도 가져와준다.
            // 이전 블록에서 가져온 hash를 previousHash라고 별명지어준 거라고 생각하면 됨
            const { height, hash : previousHash } = _previousBlock;

            // 기존 블록의 높이를 이전 블록 높이보다 1 증가시킨다.
            this.height = height + 1;

            // 기존 블록의 hash 값을 저장해준다.
            this.previousHash = previousHash;

            


        } catch (error) {
            console.error(error);
        }
    }

    // 머클루트를 구해주는 함수
    getMerkleRoot(_data) {

        // _data가 배열이면 ? "" : ""
        return Array.isArray(_data) ? {
            // _data가 배열이면
            isError: false,
            // 배열의 값이 있으면 merkle 라이브러리로 sha256방식의 hash 암호화된 머클루트를 구하고, 
            // 없으면 0을 64개로 채워 초기값을 반환한다.
            value: _data.length ? merkle("sha256").sync(_data).root() : "0".repeat(64),
        } : {
            // _data가 배열이 아니면
            isError: true,
            error: "이거 오류임"
        }
    }

    // 해시 생성 함수
    createHash(_block) {

        // SHA256 방식의 hash 암호화 사용
        // 여기서 256은 256bits를 뜻한다(비트)
        return SHA256(
            // 객체의 키와 값을 배열로 변경한다. : [[key, value], [key, value], [key, value]]
            Object.entries(_block).filter((item) =>
                // hash 생성 메서드이기 때문에 hash를 제외, data는 merkleRoot로 대체됨
                item[0] !== "hash" && item[0] !== "data"
            ).join("") // 배열을 하나의 문자열로 이어붙힌다.
        )
    }

    // 난이도 조절 함수({매개변수에 중괄호를 넣어 해당값이 있으면 가져오도록 함})
    getDifficulty({
        // 입력되는 높이 (몇번째 생성된 블록인지)
        height,
        // 입력되는 시간,
        timestamp,
        // 이전 블록의 난이도,
        previousDifficulty,
        // 난이도 조절의 단위 개수 전의 난이도
        adjustmentDifficulty,
        // 난이도 조절의 단위 개수 전의 생성 시간
        adjustmentTimestamp,
    }) {

        // 높이가 난이도 조절 단위 개수 미만일 경우 최초 블록에서 현재까지 난이도를 0으로 설정한다.
        // 높이 0~9 = 난이도 0
        if (height < DIFFICULTY_ADJUSTMENT_INTERVAL) return 0;

        // 높이가 난이도 조절 단위개수의 2배 미만일 경우 최초블록이 포함된 단위 개수 다음 개수를 난이도로 설정한다.
        // 높이 10~19 = 난이도 1
        if (height < DIFFICULTY_ADJUSTMENT_INTERVAL * 2) return 1;

        // 높이의 난이도 조절 단위 개수의 나머지가 0이 아니면 개수가 맞아 떨어지지 않는 거라서
        // 이전 블럭의 난이도(previousDifficulty)를 이용한다.
        // 만약 난이도 조절 단위 개수가 10이라면 10개 단위로 난이도 조절을 하기 때문이다.
        // 난이도를 조절할 때가 아니면 (height 나누기 난이도조절단위개수 나머지가 0)
        if (height % DIFFICULTY_ADJUSTMENT_INTERVAL !== 0) return previousDifficulty;

        // 이후에는 각 10 단위마다 아래의 코드로 난이도를 결정하게 된다.

        // 현재 시간(블록이 생성된 시간)과 난이도조절단위개수(10개) 이전의 시간의 차를 구한다.
        // 10분보다 빠른지 느린지 구하기 위해서이다.
        const timeTaken = timestamp - adjustmentTimestamp;

        // (1분 : 60 * 1000) * 10 * 10 = 100분
        // 블록 생성 기준 시간 10분에 블록 하나 생성
        const timeExpected = TIME_UNIT * BLOCK_GENRATION_INTERVAL * DIFFICULTY_ADJUSTMENT_INTERVAL;

        // 만약 5분(10분/2)보다 빠르면 난이도 1 증가
        // 설정된 블록 10개 생성 시간보다 0.5배 미만이면 난이도 1 증가한다. (지금은 5분보다 작을때임)
        if (timeTaken < timeExpected * 0.5) return adjustmentDifficulty + 1;

        // 설정된 블록10개생성시간보다 1.5배 초과이면 난이도 감소 (현재는 15분보다 큰경우임)
        if (timeTaken > timeExpected * 1.5) return adjustmentDifficulty - 1;

        // 블록이 생성될 때 난이도 측정이 들어간다.
        // 블록 난이도가 0이면 그냥 무조건 생성되는 것임

        // 위 두 조건(if)이 맞지 않으면 기존 난이도를 적용한다.
        return adjustmentDifficulty;

    }

    // 블록 마이닝(채굴) 함수
    // 난이도에 맞게 hash를 생성한다. 문제풀이라고도 한다.
    updateBlock() {
        // 현재 hash를 hex-to-binary를 사용해 binary 형식으로 바꾼다.
        let hashBinary = hexToBinary(this.hash);

        // 만약 binary형식으로 바꾼 해시값이 현재 난이도만큼 시작 0의 개수가 맞지 않으면
        // 계속 돌린다.
        // startsWith : 특정 문자열로 시작하는지 확인
        // 난이도를 구해야 하니까 블록의 난이도를 전달해주고
        // 난이도가 2면 "00"두개인지 확인하는 것이다.
        // 블록의 난이도의 개수만큼 "0"이 붙을 때까지 반복하는 것이다.
        // 0과 1로 이루어진 hash 문자의 시작되는 0의 개수가 0의 난이도 개수와 같은지 확인
        while (!hashBinary.startsWith("0").repeat(this.difficulty)) {
            // 마이닝을 반복할 때마다 논스를 계속 1씩 증가시킨다.
            this.nonce += 1;

            // 블록 생성 시점이 달라졌으므로 현재 시간을 다시 설정한다.
            this.timestamp = Date.now();

            // getDifficulty() 함수를 다시 사용해서 난이도를 다시 구하여 설정한다.
            this.difficulty = this.getDifficulty(
                // 매개변수로 이전 블록의 난이도와 난이도, 시간을 보내준다.
                // 이전 블록 시간이랑 높이는 추가해야 된다고 한다.(이해x)
                _previousBlock.difficulty, _adjustmentDifficulty, _adjustmentTimestamp
            );
            
            // 생성할 블록의 해시값을 다시 만들어 hashBinary에 넣어준다.
            // 비교를 위해 hash를 다시 bit형식(binary) 형식으로 변경함.
            // 현재 해시를 재설정해준다. (해시 생성 함수 마저 작성해야 함)
            // 현재 바이너리 해시에 해시를 넣어준다.
            this.hash = this.createHash(this);
            hashBinary = hexToBinary(this.hash);

        }
    }

    // 블록 검증 함수 : 블록이 정상적인지 검사한다.(생성된블록,이전블록)
    // 생성된 블록이 문제가 없는지 확인하는 메서드
    isValidNewBlock(_newBlock, _previousBlock){
        // 새로 만든 블럭의 높이가 이전 높이보다 1증가한 것이 아니면 오류임
        if(_newBlock.height !== _previousBlock.height + 1){
            return { isError : true, error : "Block's height is incorrect."};
        }

        // 생성된 블록에 저장된 이전 블록 hash와 실제 이전 블록 hash가 같은지 확인, 아니면 에러
        if(_newBlock.previousHash !== _previousBlock.hash){
            return { isError : true, error : "Hash of previous Block is incorrect."};
        }

        // 해시를 다시 생성해봐서 현재 생성된 블록의 hash와 맞는지 확인하고 아니면 에러
        if(this.createHash(_newBlock) !== _newBlock.hash){
            return { isError : true, error : "Hash of block is incorrect."}
        }

        // 모두 통과하여 문제가 없으면 에러가 없다고 표시하고 value로 새로운 블록을 반환한다.
        return { isError : false, value : _newBlock };

    }

}