module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define(
      "orders",
      {
        order_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        delivery_address: {
          type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.ENUM("unconfimred", "confirmed", "processing", "transporting", "complete", "canceled"),
        },
        note: {
          type: DataTypes.STRING,
        },
        total_price: {
            type: DataTypes.INTEGER,
        },
      },
      {
        freezeTableName: true,
      }
    );
  
    return Order;
  };
  