function create(mongoose) {

    let cartItemSchema = mongoose.Schema({
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
        },
        quantity: {
            type: Number,
        }
    });

    const shoppingCartSchema = mongoose.Schema({
        completed: {
            type: Boolean,
        },
        products: [cartItemSchema]
    });

    return mongoose.model('ShoppingCart', shoppingCartSchema);
}

module.exports = create;
