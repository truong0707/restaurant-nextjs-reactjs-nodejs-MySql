module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define("categorys", {
        category_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        category_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category_image: {
            type: DataTypes.BLOB('long'),
            allowNull: true
        },
    })

    return Category;
}
