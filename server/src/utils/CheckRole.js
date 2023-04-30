const db = require("../models/index");

const checkRole = async (user) => {
  const role = await db.roles.findOne({
    where: {
      role_id: user.role_id,
    },
  });
  return role.role_name;
};
module.exports = checkRole;
