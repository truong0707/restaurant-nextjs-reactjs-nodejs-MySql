const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    // console.log("info user", user)
    return jwt.sign({
        id: user.id,
        role_id: user.role_id,
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