const Candy = require('./Candy'); 

describe('Candy', () => {
    const candy = new Candy('Mars', 2);

    it('returns the candy name', () => {
        expect(candy.getName()).toEqual('Mars')
    })

    it('returns the candy price', () => {
        expect(candy.getPrice()).toEqual(2)
    })

})