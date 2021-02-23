const ProductResponse = require('./responses');

const toResponseModel = function toResponseModel(productDoc) {
    return new ProductResponse({ ...productDoc });
};

module.exports = {
  toResponseModel,
};