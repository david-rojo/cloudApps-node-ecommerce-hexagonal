const ShoppingCartResponse = require('./responses');

const toResponseModel = function toResponseModel(shoppingCartDoc) {
    return new ShoppingCartResponse({ ...shoppingCartDoc });
};

module.exports = {
  toResponseModel,
};