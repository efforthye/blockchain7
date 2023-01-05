const SHA256 = require("crypto-js/sha256");

const str = "안녕하세요";

console.log("hash : ", SHA256(str).toString());