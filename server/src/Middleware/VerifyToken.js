const jwt = require("jsonwebtoken");
const db = require("../models/index");

const verifyToken = (token) => {
  if (!token) {
    throw new Error("Invalid token!");
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    // console.log(decoded, 'decoded') /* { iat: 1680533726, exp: 1680535526 } */
    return decoded;
  } catch (err) {
    throw new Error("Token is not valid!");
  }
};

const authRole = (role_name) => async (req, res, next) => {
  try {
    const decoded = await verifyToken(
      req.headers["authorization"].split(" ")[1]
    ); // get info user

    /* find model role có id role khớp với admin hay không */
    const role = await db.roles.findByPk(+decoded.role_id);

    /* kiểm tra  */
    if (role.role_name !== role_name) {
      throw new Error(`${role_name} mới có quyền truy cập!`);
    }
    req.user = decoded;
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: err.message });
  }
};

const authUser = async (req, res, next) => {
  const paramIdUser = parseInt(req.params.userId);
  let token = null;
  const authHeader = req.headers["authorization"];

  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];
  }

  try {
    const decoded = await verifyToken(token);
    const user = await db.users.findByPk(+decoded.user_id);
    if (paramIdUser !== +decoded.user_id) {
      throw new Error("Bạn không có quyền chỉnh sửa thông tin của người khác!");
    }

    if (!user) {
      throw new Error("Không tim thấy User!");
    }

    req.user = decoded;
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: err.message });
  }
};

const authChefOrAdmin = async (req, res, next) => {
  try {
    const decoded = await verifyToken(
      req.headers["authorization"].split(" ")[1]
    ); // get info user

    // /* find model role có id role khớp với admin hay không */
    const findUser = await db.roles.findByPk(+decoded.role_id);

    // /* kiểm tra  */
    if (findUser.role_id == 1 || findUser.role_id == 2) {
      req.user = decoded;
      next();
    } else {
      throw new Error(`Ko có quyền truy cập!`);
    }
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: err.message });
  }
};

/*  */
const authAdmin = authRole("admin");
const authChef = authRole("chef");
// const authRoleAminAndChef = auth

module.exports = {
  verifyToken,
  authAdmin,
  authChef,
  authUser,
  authChefOrAdmin,
};
