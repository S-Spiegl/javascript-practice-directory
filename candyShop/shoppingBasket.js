class ShoppingBasket {
    constructor() {
        this.basket = [],
        this.discount = 0
    }

    addItem(item) {
        this.basket.push(item)
    }

    applyDiscount(discount) {
        this.discount += discount
      }

    getTotal() {
        let total = 0
        this.basket.map((item) => (total+= item.price));
        return total - this.discount 
    }
}

module.exports = ShoppingBasket;