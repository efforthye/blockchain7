//  과제!
// 1. 10진수를 16진수로
// 2. 10진수를 2진수로
// 3. 16진수를 10진수로
// 4. 2진수를 10진수로


// 1. 10진수를 16진수로
let tempArr2 = [];
function tenTo16(num) {

    switch (Math.floor(num % 16)) {
        case 10:
            tempArr2.unshift("a");
            break;
        case 11:
            tempArr2.unshift("b");
            break;
        case 12:
            tempArr2.unshift("c");
            break
        case 13:
            tempArr2.unshift("d");
            break;
        case 14:
            tempArr2.unshift("e");
            break;
        case 15:
            tempArr2.unshift("f");
            break;
        default:
            tempArr2.unshift(Math.floor(num % 16));
            break;
    }

    // 몫이 1 이상 이면
    // 몫이 0이어도됨
    if (num >= 16) {
        num = num / 16;
        tenTo16(num);
    }

    console.log(tempArr2.join(""));
    return tempArr2.join("");
}
tenTo16(18888);



// 2. 10진수를 2진수로
let tempArr = [];
function tenToTwo(num) {
    if (num >= 1) {
        tempArr.unshift(Math.floor(num % 2));
        num = num / 2;
        tenToTwo(num);
        if (num <= 1) {
            // console.log(tempArr.join(""));
            return tempArr.join("");
        }
    }
}
tenToTwo(23);


// 3. 16진수를 10진수로





// 4. 2진수를 10진수로







function decimalToHex(d) {
    var hex = "0123456789ABCDEF";
    var result = "";
    while (d > 0) {
        var lastDigit = d % 16;
        result = hex[lastDigit] + result;
        d = Math.floor(d / 16);
    }
    console.log(result);
    return result;
}

decimalToHex(1231231);