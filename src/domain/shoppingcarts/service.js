function init({
    shoppingCartsRepository,
  }) {

    async function create() {
        return await shoppingCartsRepository.createShoppingCart();
    }

    return {
        create
    };
}
  
module.exports.init = init;