const Block = require('./block');

describe('Block', () => {
    let data , lastBlock , block;

    beforeEach(()=>{
        data = 'testdata';
        lastBlock = Block.genesis();
        block = Block.mineBlock(lastBlock,data);
    });

    it('sets the `data` to match the input',() => {
        expect(block.data).toEqual(data);
    });

    it('sets the `last hash` to matched with the last hash ',() =>{
        expect(block.lastHash).toEqual(lastBlock.hash);
    })
})