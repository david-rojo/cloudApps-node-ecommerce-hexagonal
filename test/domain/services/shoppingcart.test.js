const ShoppingCart = require('../../../src/domain/shoppingcarts/model');
const shoppingCartsServiceFactory = require('../../../src/domain/shoppingcarts/service');

function createTestShoppingCart() {
    const shoppingCart = new ShoppingCart({
        _id: '5a3b9a95e9f13308a30740a3',
        completed: false,
        products: []
    });
    return shoppingCart;
}

test('When create new shopping cart then return new shopping cart not completed and with any products, expected ok', () => {

    const createdShoppingCart = createTestShoppingCart();
    const createShoppingCart = jest.fn();
    createShoppingCart.mockReturnValue(createdShoppingCart);
    let shoppingCartsRepository = { createShoppingCart };
    let shoppingCartsService = shoppingCartsServiceFactory.init({shoppingCartsRepository});

    shoppingCartsService.create().then((sp) => {
        expect(sp).not.toBeNull;
        expect(sp.completed).toEqual(false);
        expect(sp.products).toHaveLength(0);
    });

});