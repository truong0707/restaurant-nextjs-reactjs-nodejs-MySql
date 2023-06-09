module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define("roles", {
        role_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        role_name: {
            type: DataTypes.STRING
        },
    })

    return Role;
}