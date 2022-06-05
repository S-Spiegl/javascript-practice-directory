class ShoppingBasket {
    constructor() {
        this.contents = [],
        this.discount = 0
    }

    addItem(item) {
        this.contents.push(item)
    }

    applyDiscount(discount) {
        this.discount += discount
      }

    getTotal() {
        let total = 0
        this.contents.map((item) => (total+= item.price));
        return total - this.discount 
    }
}

module.exports = ShoppingBasket;