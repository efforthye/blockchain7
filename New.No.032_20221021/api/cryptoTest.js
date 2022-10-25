// 암호화 라이브러리
const crypto = require("crypto-js");

// # 단방향 : 복호화 불가능하다.
// SHA256, 가장 많이 사용한다. 
// 이유 : 너무 짧으면 중복이 쉽고, 너무 길면 데이터를 많이 차지하는데 길이가 적당해서..
console.log("# 단방향 해시, 복호화 불가능")
console.log("SHA256 : "+crypto.SHA256("cutieee").toString());
// e6e09e8a8d3c0828c41a3a87dc62a5a58219bbb04eab673368f7735c25dd81b6

// MD5
console.log("MD5 : "+crypto.MD5("cutieee").toString());
// 49e8335187ce5cec02790d9babc76fdb

// SHA1
console.log("SHA1 : "+crypto.SHA1("cutieee").toString());
// ac786fb67f6bac485803d83ae9a5143d086215d2

// SHA512
console.log("SHA512 : "+crypto.SHA512("cutieee").toString());
// a61c02a022214b5d756430204613bf59024fd15d4528df6aca64b48756c9210db06967226fff0ecd74d47edb7d6f2895831a1b469569e7e9658edd0fb00aaa8b

// RIPEMD160
console.log("RIPEMD160 : "+crypto.RIPEMD160("cutieee").toString());
// 5603dd36b91543ef12bd07a0f50ea21220a1a79d


// # 양방향 : 복호화 가능하다.
// 암호화 : encrypt("암호화시킬문자", "key : 비밀번호")
const tempAES = crypto.AES.encrypt("sdjfklsdfsfd", "key").toString();
console.log("# 양방향, 복호화 가능")
console.log(tempAES); // U2FsdGVkX18qX/DW25dkdRDa45HPU1Gz/hyGrWm0mdI=
// 복호화 : decrypt("암호화된거", "비밀번호");
console.log(crypto.AES.decrypt(tempAES, "key").toString(crypto.enc.Utf8)); // sdjfklsdfsfd




