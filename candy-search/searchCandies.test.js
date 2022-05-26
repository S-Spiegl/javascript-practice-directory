const searchCandies = require('./searchCandies')

describe('searchCandies', () => {
    it('returns only the names of candies starting with the search string', () => {
        expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers'])
    })

    it('returns only the names of candies less than the maximum price', () => {
        expect(searchCandies('Ma', 2)).toEqual(['Mars'])
    })
    
    it('returns candies when prefix is given in lower case', () => {
        expect(searchCandies('ma', 10)).toEqual(['Mars', 'Maltesers'])
    })
})

// > searchCandies('S', 10); 
// [ 'Skitties', 'Skittles', 'Starburst' ]

// > searchCandies('S', 4); 
// [ 'Skitties', 'Skittles' ] // Starbust excluded: it's more than 4