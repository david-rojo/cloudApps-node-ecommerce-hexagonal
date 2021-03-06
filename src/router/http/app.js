const bodyParser = require('body-parser');
const express = require('express');
const http = require('http')
const productRoutes = require('./routes/products/routes');
const shoppingCartRoutes = require('./routes/shoppingcarts/routes');

const app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json({
    limit: '5mb'
}));

module.exports.init = (services) => {
    app.use('/api/products', productRoutes.init(services));
    app.use('/api/shoppingcarts', shoppingCartRoutes.init(services));
    const httpServer = http.createServer(app);
    return httpServer;
}