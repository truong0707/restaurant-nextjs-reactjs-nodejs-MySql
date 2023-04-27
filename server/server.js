const express = require('express');
const { connectDB } = require("./src/configs/ConnectDb");
const configViewEngine = require('./src/configs/viewsEngine'); // sử dụng configviewEngine
require('dotenv').config(); // sử dụng dotenv
const cookieParser = require("cookie-parser");

const app = express(); // khởi tạo app từ express
const port = process.env.PORT; // sử dụng PORT ở file .env

var cors = require('cors') // cho phép sử dụng port
app.use(cors({ credentials: true, origin: true })) // Use thư viện cors để có thể gọi api từ bên front

//limit mb file blog DB
app.use(express.json({ limit: "50mb" })); // use express json (khi post lên), dòng này phải nằm trên router
app.use(cookieParser()); // 
app.use(express.urlencoded({ limit: "50mb" }, { extended: true }));

/*  */
const initApiUser = require("./src/routes/UserRoutes");
const initApiFood = require("./src/routes/FoodRoutes");
const initProduct = require('./src/routes/ProductRoutes.js');
const initCategory = require('./src/routes/CategoryRoutes');

connectDB()

configViewEngine(app); // set up view engine (chính là express)


/* static Images Folder */
app.use('Images', express.static('./Images'));

/* router */
initApiUser(app);
initApiFood(app);
initCategory(app);
initProduct(app);

// lắng nghe port
app.listen(port, () => {
    console.log(`Lắng nge port ở http://localhost:${port}`)
})