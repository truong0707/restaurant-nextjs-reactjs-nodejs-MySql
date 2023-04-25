const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../configs/ConnectDb");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./UserModel")(sequelize, DataTypes);
db.roles = require("./RoleModel")(sequelize, DataTypes);
db.user_details = require("./UserDetailModel")(sequelize, DataTypes);
db.categorys = require("./CategoryModel")(sequelize, DataTypes);
db.foods = require("./FoodModel")(sequelize, DataTypes);
db.orders = require("./OrderModel")(sequelize, DataTypes);
// định nghĩa model cho bảng OrderFoods (bảng chi tiết)
db.order_foods = require("./OrderFood.Model")(sequelize, DataTypes);
// db.drinks = require('./DrinkModel')(sequelize, DataTypes);

db.sequelize.sync({ force: false });
// đồng bộ hóa cơ sở dữ liệu
// sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// Q.hệ giữa role và user
db.roles.hasMany(db.users, {
  foreignKey: "role_id",
  as: "user",
});
db.users.belongsTo(db.roles, {
  foreignKey: "role_id",
  as: "role",
});

/* Q. hệ giữa user và user detail */
db.users.hasOne(db.user_details, {
  foreignKey: "user_id",
  as: "user_detail",
  onDelete: "cascade",
});
db.user_details.belongsTo(db.users, {
  foreignKey: "user_id",
  as: "user_detail",
});

/* Q.hệ User và Foods */
db.users.hasMany(db.foods, {
  foreignKey: "user_id",
  as: "food",
});
db.foods.belongsTo(db.users, {
  foreignKey: "user_id",
  as: "user",
});

/* category vs food  */
db.categorys.hasMany(db.foods, {
  foreignKey: "category_id",
  as: "food",
});
db.foods.belongsTo(db.categorys, {
  foreignKey: "category_id",
  as: "category",
});

/* Q.hệ giữa order-User  */
db.users.hasMany(db.orders, {
  foreignKey: "user_id",
  as: "order",
});
db.orders.belongsTo(db.users, {
  foreignKey: "user_id",
  as: "user",
});

// thiết lập quan hệ giữa bảng Order và Food thông qua bảng OrderFoods
db.orders.belongsToMany(db.foods, {
  through: db.order_foods,
  foreignKey: "order_id",
  otherKey: "food_id",
});
db.foods.belongsToMany(db.orders, {
  through: db.order_foods,
  foreignKey: "food_id",
  otherKey: "order_id",
});

module.exports = db;
