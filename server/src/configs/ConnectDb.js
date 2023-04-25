const { Sequelize, DataTypes } = require('sequelize');

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