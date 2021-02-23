const express = require('express');
const {
    toResponseModel,
} = require('./mapper');
const router = new express.Router();

function init({shoppingCartsService}) {

    router.post('/', async (req, res) => {
        const newShoppingCart = await shoppingCartsService.create();
        return res.send(toResponseModel(newShoppingCart));
    });

    return router;
}

module.exports.init = init;