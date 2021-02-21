function init({
    productsRepository,
  }) {

    async function findById({id}) {
      return productsRepository.findById({id});
    }

    async function findAll({id}) {
        return productsRepository.findAll();
    }

    async function deleteById({id}) {
        return productsRepository.delete({id});
    }

    async function create({name, description, price}) {
        return productsRepository.create({
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