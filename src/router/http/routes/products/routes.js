const express = require('express');
const {
    toResponseModel,
} = require('./mapper');
const router = new express.Router();

function init({productsService}) {

    router.get('/:id', async (req, res) => {
        const productDoc = await productsService.findById({
            id: req.params.id
        });
        return res.send(toResponseModel(productDoc));
    });

    router.get('/', async (req, res) => {
        const productDocs = await productsService.findAll();
        return res.send({product: productDocs
            .map(productDoc => toResponseModel(productDoc))});
    });

    router.delete('/:id', async (req, res) => {
        const deletedProduct = await productsService.deleteById({ id: req.params.id });
        return res.send(toResponseModel(deletedProduct));
    });

    router.post('/', async (req, res) => {
        const newProduct = await productsService.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
        });
        return res.send(toResponseModel(newProduct));
    });

    return router;
}

module.exports.init = init;