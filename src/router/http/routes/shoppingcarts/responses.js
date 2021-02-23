class ShoppingCartResponse {
    
    constructor({ id, completed, products } = {}) {
        this.id = id;
        this.completed = completed;
        this.products = products;
    }
}
  
module.exports = ShoppingCartResponse;