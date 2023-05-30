const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Food extends Model {}
  Food.init(
    {
      food_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      food_name: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      price_promotional: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      image: {
        type: DataTypes.BLOB("long"),
        allowNull: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM("food", "drink"),
      },
    },
    {
      sequelize,
      modelName: "foods",
    }
  );
  return Food;
};
