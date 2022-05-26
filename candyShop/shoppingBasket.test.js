// const Candy = require('./candy');
const ShoppingBasket = require('./shoppingBasket')

describe('ShoppingBasket', () => {
    const marsDouble = { 
        name: 'Mars',
        price: 4}

    const maltesersDouble = {
        name: 'Maltesers',
        price: 5};

    it('adds a candy to the basket', () => {
        let basket = new ShoppingBasket();
        basket.addItem(marsDouble);
        expect(basket.basket[0].name).toBe(marsDouble.name);
    })

    it('gives a total', () => {
        let basket = new ShoppingBasket();
        basket.addItem(maltesersDouble);
        expect(basket.getTotal()).toBe(5);
    })

    it('returns the price of all the items in the basket', () => {
        let basket = new ShoppingBasket();
        basket.addItem(maltesersDouble);
        basket.addItem(marsDouble)
        expect(basket.getTotal()).toBe(9);
    })

    it('returns 0 if the basket is empty', () => {
        let basket = new ShoppingBasket();
        expect(basket.getTotal()).toBe(0);
    })

    it('applies a discount', () => {
        let basket = new ShoppingBasket();
        basket.addItem(maltesersDouble)
        basket.applyDiscount(2)
        expect(basket.getTotal()).toBe(3)
    }) 
})