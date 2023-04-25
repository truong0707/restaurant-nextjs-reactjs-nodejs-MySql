// const { Sequelize, DataTypes } = require('sequelize');

// const sequelize = new Sequelize(
//     'shop_food',
//     'root',
//     '', {
//     host: "localhost",
//     dialect: 'mysql',
// });

// const connectDB = () => {
//     // sequelize.authenticate()
//     //     .then(() => {
//     //         console.log('connected..')
//     //     })
//     //     .catch(err => {
//     //         console.log('Error' + err)
//     //     })

//     const db = {}
//     db.Sequelize = Sequelize
//     db.sequelize = sequelize

//     db.users = require('../models/UserModel')(sequelize, DataTypes)
//     db.roles = require('../models/RoleModel')(sequelize, DataTypes)

//     db.sequelize.sync({ force: false })
//         .then(() => {
//             console.log('connect db thành công!')
//         });


//     // 1 to Many Relation
//     db.roles.hasMany(db.users, {
//         foreignKey: 'role_id',
//         as: 'users'
//     });

//     db.users.belongsTo(db.roles, {
//         foreignKey: 'role_id',
//         as: 'roles'
//     });
//     return db
// }

// // module.exports = db
// module.exports = connectDB