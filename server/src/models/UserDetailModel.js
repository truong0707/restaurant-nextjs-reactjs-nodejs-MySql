module.exports = (sequelize, DataTypes) => {
    const UserDetail = sequelize.define("User_details", {
        user_detail_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        gender: {
            type: DataTypes.ENUM('male', 'female', 'other')
        },
        national: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        },
        phone_number: {
            type: DataTypes.STRING
        },
        avatar: {
            type: DataTypes.STRING
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: sequelize.NOW
        },
        updated_at: {
            type: DataTypes.DATE,
            defaultValue: sequelize.NOW
        }
    })

    return UserDetail;
}