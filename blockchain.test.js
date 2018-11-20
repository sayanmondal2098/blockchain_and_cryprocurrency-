const BlockChain = require('./blockchain');
const Block = require('./block');

describe('Blockchain', () => {
    let bc , bc2;

    beforeEach(() => {
        bc = new BlockChain();
        bc2 = new BlockChain();

    }); 

    it('it starts with genecis block',() => {
        expect(bc.chain[0]).toEqual(Block.genesis());
    });

    it('add a new block ',() =>{
        const   data = 'data';
        bc.addBlock(data);
        expect(bc.chain[bc.chain.length -1].data).toEqual(data);
    });

    it('Is it a valid chain? ',() =>{
        bc2.addBlock('data');
        expect(bc.isValidChain(bc2.chain)).toBe(false);
    });
}); 