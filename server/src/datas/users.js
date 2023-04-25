const bcrypt = require('bcryptjs');
const users = [
    {
        name: "Admin",
        email: "truongnguyendep@gmail.com",
        password: bcrypt.hashSync("19062001", 10),
        isAdmin: true
    },
    {
        name: "User",
        email: "user@gmail.com",
        password: bcrypt.hashSync("19062001", 10),
    }
]
module.exports = users;
