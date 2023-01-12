// Hex : 16진수 Hexadecimal
// - SHA256 등으로 암호화했을 때 나오는 수
// Dex : 10진수 Decimal
// Oct : 8진수 Octal
// Bin : 2진수 Binary
// - 컴퓨터가 사용하는 수(bit < byte == 8bit)

// 숫자의 소수점을 버리는 함수
function changeInt(number) {
    let str = `${number}`;
    let value = 0;
    for (let i = 0; i < str.length; ++i) {
        let tempNumber = +str[i];
        if (tempNumber > -1 && tempNumber < 10) {
            value *= 10;
            value += tempNumber;
        } else {
            // 숫자가 아님
            break;
        }
    }
}

// pow(x를 n승으로 제곱하는 함수)
function pow(x, n){
    let value = 1;
    for( let i = 0; i<n; i++){
        // value  ?? 쓰다말았음
    }
}


// 10진수를 16진수로
function dec2hex(dec) {

    let value = "";
    while (dec) {
        // 10진수를 16으로 나눠서 그 나머지를 사용한다.
        // 0~15까지 사용한다. 0~9까지는 그대로 사용한다.
        // 10~15 : 한 자리로 나타내야 하기 때문에 영어의 A~F
        switch (dec % 16) {

            // 나머지가 10~15일 경우 해당 영문으로 변환
            case 10:
                value = "A" + value;
                break;
            case 11:
                value = "B" + value;
                break;
            case 12:
                value = "C" + value;
                break;
            case 13:
                value = "D" + value;
                break;
            case 14:
                value = "E" + value;
                break;
            case 15:
                value = "F" + value;
                break;

            // 0~9까지는 default로 처리한다.
            default:
                value = (dec % 16) + value; //앞자리에 나머지를 추가
                break;
        }

        // 나누면 소수점으로 나타내므로 소수점을 버린다. Math.floor() 대신 parseInt()를 사용해도 된다.
        dec = Math.floor(dec / 16);

    }

    return value;
}




// 보통 프로그래밍 상에서 Hex, 즉 16진수는 string(문자열, 문장)으로 정의된다.
// 16진수를 10진수로
function hex2dec(hex) {
    // 10진수를 저장할 변수
    let value = 0;
    for (let i = 0; i < hex.length; ++i) {
        let temp = 0;
        switch (hex[i]) {
            case "A":
                temp = 10;
                break;
            case "B":
                temp = 11;
                break;
            case "C":
                temp = 12;
                break;
            case "D":
                temp = 13;
                break;
            case "E":
                temp = 14;
                break;
            case "F":
                temp = 15;
                break;
            // default : hex의 i번째를 숫자로 바꾼 것
            default:
                temp = +hex[i];
                break;
        }

        // 더해줘야 한다. 
        // 만약 123이면 첫 자리를 계산할 때 temp는 1이고
        // 100의 자리면 16**2를 해줘야 하는데 2를 어떻게 구할 것인가?
        // i <= 1
        // hex.length - i 는 3이니까 1을 더 빼준다.
        // **은 제곱이다.
        value += temp * (16 ** (hex.length - i - 1));

        // value += temp * pow(16, hex.length - i - 1); -> 우리가 만든pow() 함수
        // hex == '123'

        // i == 0 이면/ hex[i] == '1' 임/ 1은 100의자리수이기 때문에 16의 제곱이다.
        // 10진수 바꿀 때 1에 16의 제곱을 곱해서 더해야한다.
        // i == 1 / hex[i] == '2' / 2는 10의 자리 수이기 때문에 16의 1승이다.
        // i == 1 / hex[i] == '3' / 3은 1의 자리 수이기 때문에 16의 0승이다.

        // 각 자리수에 대해서 16의 n승 곱해야 한다. 
        // 그 n은 각 자리수가 바뀔 때 함께 바뀌는 것은 i이니까 i를 이용하여 n을 구한다.
        // i가 증가할 때마다 n은 감소한다.
        // 그 기준은 hex.length - 1 이다.

        // hex를 기준으로 0의 자리부터 16제곱을 생각하면 0, 1, 2, 3, 4, 5,  ... 식으로 된다.
        //  4        5       6        8
        // 16의3승 16의2승 16의1승 16의0승(제곱)
    }

    return value;

}


// 10진수를 2진수로
function dec2bin(dec){
    let value = "";
    while(dec){
        value = (dec%2) + value;
        dec = parseInt(dec/2);
    }
    return value;
}

// 2진수를 10진수로
function bin2dec(bin){
    let value = 0;
    for(let i = 0; i<bin.length; ++i){
        value += +bin[i] * 2 ** (bin.length - 1 -i);
    }
    return value;
}

// console.log(dec2hex(23489));
// console.log(hex2dec(23489));

// 배우는 이유 : 블록체인 퀴즈를 풀때 어떻게 문제풀이를 하느냐와 같아서

// 1
console.log(dec2hex(4123)); // 101B
console.log(hex2dec(dec2hex(4123))); // 4123
console.log(dec2bin(4123)); // 1000000011011
console.log(bin2dec(dec2bin(4123))); // 4123


// 10진수를 기준으로 
