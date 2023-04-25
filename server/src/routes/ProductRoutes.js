const express = require('express');
const ProductController = require('../controller/ProductController');
const multer = require('multer');


let router = express.Router();

const initImage = (app) => {
    router.post('/addProduct', ProductController.upload, ProductController.addProduct);

    return app.use('/api/v1/', router);
}

module.exports = initImage;