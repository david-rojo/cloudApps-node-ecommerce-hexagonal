const mapper = require('../../mapper');
const ProductDomainModel = require('../../../domain/products/model');

const productStore = {

    async findProductById(options) {
        try {
            const {Product: productSchema} = this.getSchemas();
            const product = await productSchema.findOne({_id : options.id});
            if (!product) {
                throw new Error(`Product with id ${options.id} not found`);
            }
            return mapper.toDomainModel(product, ProductDomainModel);
        }
        catch (error) {
            throw error;
        }        
    },

    async findAllProducts() {
        try{ 
            const {Product: productSchema} = this.getSchemas();
            const products = await productSchema.find();
            return products.map(product => mapper.toDomainModel(product, ProductDomainModel));
        }
        catch (error) {
            throw error;
        }
    },

    async deleteProductById(options) {
        try{ 
            const {Product: productSchema} = this.getSchemas();
            const product = await productSchema.findOne({_id : options.id});
            if (!product) {
                throw new Error(`Product with id ${options.id} not found`); 
            }
            await productSchema.deleteOne({_id : options.id});
            return mapper.toDomainModel(product, ProductDomainModel);
        }
        catch (error) {
            throw error;
        }
    },

    async createProduct(options) {
        try{
            const { Product: productSchema } = this.getSchemas();
            const newProduct = new productSchema({
                name: options.name,
                description: options.description,
                price: options.price,
            });
            const savedProduct = await newProduct.save();
            return mapper.toDomainModel(savedProduct, ProductDomainModel);
        }
        catch (error) {
            throw error;
        }        
    }
};

module.exports.init = ({ Product }) => Object.assign(Object.create(productStore), {
    getSchemas() {
        return {
            Product,
        };
    },
});