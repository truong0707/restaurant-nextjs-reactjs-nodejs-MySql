const express = require('express');
const FoodController = require('../controller/FoodController');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { authAdmin, authChefOrAdmin } = require('../Middleware/VerifyToken');

let router = express.Router();
const initFood = (app) => {
    // Tạo danh mục
    router.post('/food', authChefOrAdmin, FoodController.createFood); //
    router.get('/food', FoodController.getFood); // http://localhost:8080/api/v1/food?foodId=2
    router.delete('/food', FoodController.deleteFoodById); 

    // router.get('/food', FoodController.getProductFood);
    // router.get('/food/:foodId', FoodController.getProductFoodByID);
    // router.delete('/food/:foodId', FoodController.deleteProductFoodByID);


    // Tạo danh mục
    // router.post('/food/category/list', FoodController.postCateProduct);
    // // Lấy tất cả danh mục thức ăn
    // router.get('/food/category/list', FoodController.getCateProduct);
    // // lấy tất cả món ăn theo danh mục
    // router.get('/category/food/list', FoodController.getAllCateFood);
    // // Tạo thức ăn và thêm 1 món ăn mới vào danh mục
    // router.post('/product/food/cate-add', FoodController.postAddFoodCate);


    // 
    router.post('/upload_images', FoodController.postImageFood)

    return app.use('/api/v1/', router);
}

module.exports = initFood;