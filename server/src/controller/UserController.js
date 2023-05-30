const { Users } = require("../models/UserModel");
const db = require("../models/index");
const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const generateToken = require("../utils/generateToken");
const { sequelize } = require("../configs/ConnectDb");

/*  create User (admin) */
const postCreateUser = async (req, res) => {
  const { name, email, password, confirmPass, role_id } = req.body;

  if (!name || !email || !password || !confirmPass || !role_id) {
    return res.status(400).json({ message: "Vui lòng nhập đầy đủ thông tin!" });
  }

  if (password !== confirmPass)
    return res
      .status(400)
      .json({ message: "Mật khẩu và nhập lại Password không khớp!" });

  /* check email and phoneNumber exists */
  const userExists = await db.users.findOne({
    where: {
      email: email,
    },
  });

  if (userExists) {
    return res.status(400).json({ message: "Email này đã được sử dụng!" });
  } else {
    /* create user */
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
      await db.users.create({
        name: name,
        email: email,
        password: hashPassword,
        role_id: role_id,
      });

      res.json({ message: "Tạo tài khoản thành công!" });
    } catch (error) {
      console.log("err", error);
    }
  }
};

/* Create Role */
const postCreateRole = async (req, res) => {
  /* create role */;
  try {
    await db.roles.create({
      role_id: 3,
      role_name: 'customer',
    });

    res.json({ message: "Tạo tài role thành công!" });
  } catch (error) {
    console.log("err", error);
  }
};

/* User Login */
const postLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res
      .status(400)
      .json({ success: false, message: "Vui lòng nhập email!" });
  } else if (!password) {
    return res
      .status(400)
      .json({ success: false, message: "Vui lòng nhập mật khẩu!" });
  }

  try {
    let userLogin = {};
    const user = await db.users.findOne({
      where: {
        email: email,
      },
    });

    if (user) {
      /* check password */
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        userLogin = {
          name: user.name,
          email: user.email,
        };
        /* generate token with info role_id */
        const accessToken = await generateToken.generateToken(user);
        userLogin.token = accessToken;
      } else {
        return res.status(400).json({ message: "password ko đúng!" });
      }

      return res
        .status(200)
        .json({ data: userLogin, code: 0, message: "Đăng nhập thành công!" });
    } else {
      
      return res
        .status(400)
        .json({ message: "Tài khoản không tồn tại trên hệ thống!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Lỗi server!" });
  }
};

// get user (admin)
let getUsers = async (req, res) => {
  const idQuery = req.query.id;
  const { role } = req.query;
  let Alluser = null;
  let user = null;

  try {
    if (idQuery === "ALL") {
      if (role) {
        Alluser = await db.users.findAll({
          where: { role_id: role },
          attributes: ["user_id", "name", "email"],
        });
        console.log(Alluser, "cos");
      } else {
        Alluser = await db.users.findAll({
          attributes: ["user_id", "name", "email"],
        });
      }
    } else {
      user = await db.users.findByPk(idQuery, {
        include: [
          {
            model: db.user_details,
            attributes: [
              "phone_number",
              "gender",
              "address",
              "avatar",
              "national",
            ],
            as: "user_detail",
          },
        ],
        raw: true,
        nest: true,
      });
    }

    if (Alluser) {
      res.status(200).json({
        code: 0,
        message: "Get all users completed",
        data: Alluser,
      });
    } else if (user) {
      delete user.password;
      res.status(200).json({
        code: 0,
        message: "Get user completed",
        data: user,
      });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.log("Lỗi server:", error);
  }
};

/* User register */
const postRegister = async (req, res) => {
  const { name, email, password, confirmPass, role } = req.body;
  if (!name || !email || !password || !confirmPass) {
    return res.status(400).json({ message: "Vui lòng nhập đầy đủ thông tin!" });
  }

  if (password !== confirmPass)
    return res
      .status(400)
      .json({ msg: "Password và comfirm Password không khớp!" });

  if (role === 1) {
    return res.status(400).json({ message: "Chọn role không hợp lệ!" });
  }

  if (role > 3) {
    return res.status(400).json({ message: "Chọn role không hợp lệ!" });
  }

  /* check email and phoneNumber exists */
  const userExists = await db.users.findOne({
    where: {
      email: email,
    },
  });

  if (userExists) {
    return res.status(400).json({ message: "Email đã tồn tại!" });
  } else {
    /* create user */
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
      const newUser = await db.users.create({
        name: name,
        email: email,
        password: hashPassword,
        role_id: role ? role : 3,
      });

      return res
        .status(200)
        .json({ message: "Register thành công!", data: newUser });
    } catch (error) {
      console.log("err", error);
    }
  }
};

/* delete user */
const deleteUserById = async (req, res) => {
  const paramIdUser = req.params.userId;

  try {
    if (!paramIdUser) {
      return res.status(404).json({
        message: "Server chưa nhận được prams id user",
      });
    } else {
      const user = await db.users.findByPk(paramIdUser);

      if (user) {
        await user.destroy();

        return res.status(200).json({
          message: "Xoá user thành công!",
        });
      } else {
        return res.status(404).json({
          message: "Không tìm thấy user!",
        });
      }
    }
  } catch (error) {
    console.log();
    return res.status(500).json("Lỗi server!");
  }
};

/* edit User */
const EditUserById = async (req, res) => {
  const { userId } = req.params;
  const { name, phone_number, address, avatar, gender, national } = req.body;
  const t = await sequelize.transaction();

  if (!userId) {
    return res.status(400).json({ message: "Param không đúng!" });
  } else {
    try {
      // Update user
      await db.users.update({ name }, { where: { userId }, transaction: t });
      if (phone_number || address || avatar || gender || national) {
        // Update user_detail
        const [userDetail, created] = await db.user_details.findOrCreate({
          where: { user_id: userId },
          defaults: {
            user_id: userId,
            phone_number,
            address,
            avatar,
            national,
            gender,
          },
          transaction: t,
        });

        if (!created) {
          await userDetail.update(
            {
              phone_number,
              address,
              avatar,
              national,
              gender,
            },
            { transaction: t }
          );
        }
      }

      // Commit transaction
      await t.commit();

      res
        .status(200)
        .send({ code: 0, message: "Cập nhật thông tin thành công!" });
    } catch (error) {
      // Rollback transaction if there is any error
      console.log(error);
      await t.rollback();
      res.status(500).send({ message: "Cập nhật thông tin thất bại!" });
    }
  }
};

// const getUsersAdmin = async (req, res) => {
//     if (req.user.isAdmin) {
//         try {
//             const users = await Users.findAll({
//                 attributes: ['id', 'name', 'email']
//             });
//             res.json(users);
//         } catch (error) {
//             console.log("err", error)
//         }
//         // res.status(200).json("Get User Sussces!");
//     } else {
//         res.status(403).json("You are not allowed to get users! ")
//     }
// }

/* Logout */
const Logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);

  const user = await Users.findAll({
    where: {
      refresh_token: refreshToken,
    },
  });

  if (!user[0]) return res.sendStatus(204);

  const userId = user[0].id;
  await Users.update(
    { refresh_token: null },
    {
      where: {
        id: userId,
      },
    }
  );
  res.clearCookie("refreshToken");
  return res.sendStatus(200);
};

module.exports = {
  postCreateUser,
  getUsers,
  postRegister,
  postLogin,
  deleteUserById,
  postCreateRole,
  // getUsersAdmin,
  EditUserById,
  Logout,
};
