const { Sequelize, DataTypes } = require('sequelize');

// const sequelize = new Sequelize(
//   'btq0bqe5hehum2y35jpu', /* epiz_34087261_projectRestaurant - shop_food */ /* name db */
//   'uuxwcxvoaamlxqam', /* 	epiz_34087261- root  */ /* user */
//   '5mEbrayTW7MW7HQh2H4c', { /* 	UVVBdnBoCbix0Hv -  */  /* pass */
//   host: "btq0bqe5hehum2y35jpu-mysql.services.clever-cloud.com", /* sql206.epizy.com - localhost */
//   dialect: 'mysql',
// });

const sequelize = new Sequelize(
  'shop_food', 
  'root',  
  '', { 
  host: "localhost", 
  dialect: 'mysql',
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Kết nối database thành công!");

  } catch (error) {
    console.error("Xảy ra lỗi khi kết nối với database:", error);
  }
}

// module.exports = db
module.exports = { connectDB, sequelize }