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

    it('add a new block ',() => {
        const   data = 'data';
        bc.addBlock(data);
        expect(bc.chain[bc.chain.length -1].data).toEqual(data);
    });

    it('Is it a valid chain? ',() => {
        bc2.addBlock('foo');
        expect(bc.isValidChain(bc2.chain)).toBe(false);
    });

    it('Invalid a chain with corrupt genesis block ', () => {
        bc2.chain[0].data = 'bad data';
        expect(bc.isValidChain(bc2.chain)).toBe(false);
    });

    it('invalides a corrupt chain ', ()=> {
        bc2.addBlock('foo');
        expect(bc.isValidChain(bc2.chain)).toBe(false);
    });

    it('replace the chain with a valid chain ',() => {
        bc2.addBlock('goo');
        bc.replaceChain(bc2.chain);
        expect((bc.chain).toEqual(bc2.chain));
    });



}); 

