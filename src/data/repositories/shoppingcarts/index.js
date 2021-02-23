const mapper = require('../../mapper');
const ShoppingCartDomainModel = require('../../../domain/shoppingcarts/model');

const shoppingCartStore = {

    async createShoppingCart() {
        try{
            const { ShoppingCart: shoppingCartSchema } = this.getSchemas();
            const newShoppingCart = new shoppingCartSchema({
                completed: false,
            });
            const savedShoppingCart = await newShoppingCart.save();
            return mapper.toDomainModel(savedShoppingCart, ShoppingCartDomainModel);
        }
        catch (error) {
            throw error;
        }        
    }

}

module.exports.init = ({ ShoppingCart }) => Object.assign(Object.create(shoppingCartStore), {
    getSchemas() {
        return {
            ShoppingCart,
        };
    },
});