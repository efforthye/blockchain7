// 초기화 패키지제이슨설치 npm init -y

// 설치 명령어 npm i merkle crypto-js

// 라이브러리들을 가져온다.
const merkle = require("merkle");
const SHA256 = require("crypto-js").SHA256;

// 암호화 
// hex 방식(0~F)으로 지정된 데이터를 바이너리 방식의 (0~1)으로 변환시켜준다.
const hexToBinary = require("hex-to-binary");





// 기본값들을 정의해준다.

// 블록 생성 시간을 조절하기 위해서 난이도 조절용 수치를 미리 정해놓는다. 

// 최초 블록에서 10번째 블록까지는 난이도가 0이다.
// 다시 10번째로 돌아갔을때 20까지 난이도 높임
// 생성 시간에 따라서

// 최초블록 이후에 생성되는 20번째 부터 난이도 수치가 조절될 수 있게  요 아래 변수 사용
// 최초에 난이도 조절할 때 최초 블록부터 이 수치까지는 난이도 증가 없이 0으로 만든 값?
// 난이도 조절에 사용된다.
// 단위계산 : DIFFICULTY_ADJUSTMENT_INTERVAL를 2개로 곱함

// 둘다 블록의 생성 시간을 조절하기 위해 사용하는 건데
// 첫번쨰는 최초값이고 두번째는 난이도 조절을 위한 표본값??


// 블롱 생성 시간 : 총 10분
const DIFFICULTY_ADJUSTMENT_INTERVAL = 10;

// 10분동안 블록 1개를 만들 수 있게 개수를 지정한다.
const BLOCK_GENRATION_INTERVAL = 10;

// 블록 하나당 걸리는 시간(1분)
const TIME_UNIT = 60 * 1000;


module.exports = {
    lib : {
        merkle, SHA256, hexToBinary,
    },
    constant : {
        DIFFICULTY_ADJUSTMENT_INTERVAL, 
        BLOCK_GENRATION_INTERVAL,
        TIME_UNIT,
    }
}