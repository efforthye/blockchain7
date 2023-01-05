const merkle = require("merkle");

const data = ["efforthye gave Yesung 100 won", "Yesung gave efforthye 10 billion"];

const merkleTree = merkle("sha256").sync(data);

// const root = merkleTree.root();

console.log("root : ", root);
console.log("root.length : ", root.length);




const root = merkleTree.root();
const level = merkleTree.level();
const depth = merkleTree.depth();
const levels = merkleTree.levels();
const nodes = merkleTree.nodes();
const getProofPath = merkleTree.getProofPath();
console.log("merkleTree : ", merkleTree);
console.log("root : ", root);
console.log("level : ", level);
console.log("depth : ", depth);
console.log("levels : ", levels);
console.log("nodes : ", nodes);
console.log("getProofPath : ", getProofPath);