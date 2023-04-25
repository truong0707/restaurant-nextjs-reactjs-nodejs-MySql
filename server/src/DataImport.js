const express = require("express");
const User = require("./models/UserModel");
const users = require("./datas/users");
const asyncHandler = require("express-async-handler");


const ImportData = express.Router()

ImportData.post("/user", asyncHandler(
    async (req, res) => {
        await User.remove({})
        const importUser = await User.insertMany(users)
        res.send({ importUser });
    }
))

module.exports = ImportData;