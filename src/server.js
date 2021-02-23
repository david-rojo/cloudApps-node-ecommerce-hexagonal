const port = 3000;
const db = require('./data/infrastructure/db')({
    dbConnectionString: 'mongodb://localhost:27017/ecommerce'
});

const productsRepositoryContainer = require('./data/repositories/products');
const productsServiceContainer = require('./domain/products/service');
const productsRepository = productsRepositoryContainer.init(db.schemas);
const productsService = productsServiceContainer.init({productsRepository});

const shoppingCartsRepositoryContainer = require('./data/repositories/shoppingcarts');
const shoppingCartsServiceContainer = require('./domain/shoppingcarts/service');
const shoppingCartsRepository = shoppingCartsRepositoryContainer.init(db.schemas);
const shoppingCartsService = shoppingCartsServiceContainer.init({shoppingCartsRepository});

const appContainer = require('./router/http/app');
const app = appContainer.init({ productsService, shoppingCartsService });

let server = app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});

(async () => {
    try {
        await db.connect();
    } catch (error) {
        await db.close();
        await server.close();
    }
})();