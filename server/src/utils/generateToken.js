const jwt = require('jsonwebtoken');
const checkRole = require('./CheckRole');

const generateToken = async (user) => {
    const nameRole = await checkRole(user);

    return jwt.sign({
        id: user.id,
        role: nameRole,
        email: user.email,
        name: user.name,
        user_id: user.user_id
    }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "30d",
    });

};

module.exports = {
    generateToken,
}