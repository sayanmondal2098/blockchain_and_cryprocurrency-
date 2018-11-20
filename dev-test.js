const Block = require('./block');

const TestBlock = Block.mineBlock(Block.genesis(),'2nd mined block');

console.log(TestBlock.toString());
// console.log(TestBlock.hash());   