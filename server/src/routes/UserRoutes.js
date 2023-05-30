const express = require('express') // use library express 
const UserController = require('../controller/UserController');
const { authAdmin, authUser } = require('../Middleware/VerifyToken');
const { refreshToken } = require('../controller/RefreshToken');


let router = express.Router();

const initUserRoutes = (app) => {
    /* admin */
    router.post('/user/role', UserController.postCreateRole);
    router.post('/user/create', authAdmin, UserController.postCreateUser); // http://localhost:8080/api/v1/user/create
    router.post('/user/login', UserController.postLogin);       // http://localhost:8080/api/v1/user/login
    router.post('/user/register', UserController.postRegister); // http://localhost:8080/api/v1/user/register
    router.get('/user', authAdmin, UserController.getUsers);  // http://localhost:8080/api/v1/user?id=ALL
    router.delete('/user/:userId', authAdmin, UserController.deleteUserById);    // http://localhost:8080/api/v1/user/3

    /* user */
    router.put('/user-edit/:userId', authUser, UserController.EditUserById); 











    router.get('/token', refreshToken);
    // router.get('/token', refreshToken);
    router.get('/cookies', (req, res) => {
        // Xem toàn bộ cookie
        // res.send(req.cookies);

        const users = {
            name: 'truong'
        }

        res.cookie('user', users);
        // res.send('<h3>Đã thêm thông tin user vào cookie</h3>');
        res.json(users)
    });

    return app.use('/api/v1/', router)
}

module.exports = initUserRoutes;