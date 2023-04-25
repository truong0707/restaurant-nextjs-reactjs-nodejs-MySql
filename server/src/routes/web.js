const express = require('express');
const homeController = require('../controller/HomeControler');

let router = express.Router() // sử dụng thằng Router của express

const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage);

    router.get('/about', (req, res) => {
        res.send('Đây là about')
    })

    return  app.use('/', router) // tham số đầu tiên chính là tiền tố mà ta muốn thêm vào "http://localhost:8080/truong/about"
}

module.exports = initWebRoute;