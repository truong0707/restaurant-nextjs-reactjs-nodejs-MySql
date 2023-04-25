const express = require('express');
const ProductController= require('../controller/CategoryController');
const multer = require('multer');
const upload = multer();

let router = express.Router();

const initCategory = (app) => {
    router.post('/category', ProductController.createCategoty);
    router.get('/category', ProductController.getCategoty);
    router.delete('/category', ProductController.deleteCategory);

    return app.use('/api/v1/', router);
}

module.exports = initCategory;