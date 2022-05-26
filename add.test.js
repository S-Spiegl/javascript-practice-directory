// const can = {
//     name: 'pamplemousse',
//     ounces: 12,
//   };

// describe('can', () => {
//     it('has 12 ounces', () => {
//         expect(can.ounces).toBe(12);
//     })

//     it('has a name beginning with p', () => {
//         expect(can.name.charAt(0)).toBe('p');
//     })
// });

const add = require('./add.js')

describe('add', () => {
    it('adds 2 and 2', () => {
        expect(add(2,2)).toBe(4) 
    })

    it('adds 0 and 5', () => {
        expect(add(0,5)).toBe(5)
    })
})