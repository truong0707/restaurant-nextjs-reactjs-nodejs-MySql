module.exports = (sequelize, Sequelize) => {
  const OrderFoods = sequelize.define("order_foods", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    quantity: {
      type: Sequelize.INTEGER,
    },
  });

  return OrderFoods;
};
