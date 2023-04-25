const express = require("express");

// Cấu hình 
const configViewEngine = (app) => { // tham số app này ta sẽ truyền vào express
    // Cấu hình static file
    app.use(express.static('./src/public')) // set quyền truy cập vào thư mục public

    // cấu hình views engine
    app.set("view engine", "ejs");
    app.set("views", "./src/views"); // chỉ cho express biết là thư mục sử dụng views engine
}

module.exports = configViewEngine;