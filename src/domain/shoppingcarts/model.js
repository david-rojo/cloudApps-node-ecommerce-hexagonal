class ShoppingCart {

  constructor({ _id, completed, products } = {}) {
    this.id = _id;
    this.completed = completed;
    this.products = products;
  }
    
}
  
module.exports = ShoppingCart;