const fizzBuzz = require('./fizzBuzz')

describe('fizzBuzz', () => {
    it('returns Fizz if a number is divisible by three', () => {
        expect(fizzBuzz(3)).toBe('Fizz')
    })

    it('returns Buzz if a number is divisible by five', () => {
        expect(fizzBuzz(5)).toBe('Buzz')
    })

    it('returns FizzBuzz if a number is divisible by three and by five', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz')
    })

    it('returns the number input if a number is neither divisible by three or by 5', () => {
        expect(fizzBuzz(8)).toBe('8')
    })
})