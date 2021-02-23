function init({
    productsRepository,
  }) {

    async function findById({id}) {
        return await productsRepository.findProductById({id});
    }

    async function findAll() {
        return await productsRepository.findAllProducts();
    }

    async function deleteById({id}) {
        return await productsRepository.deleteProductById({id});
    }

    async function create({name, description, price}) {
        return await productsRepository.createProduct({
            name,
            description,
            price
        });
    }
  
    return {
        findById,
        findAll,
        deleteById,
        create
    };

}
  
 module.exports.init = init;