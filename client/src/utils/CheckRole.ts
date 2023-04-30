import jwt, { JwtPayload } from "jsonwebtoken";

export const checkRole = (token: any) => {
  const decoded = jwt.decode(token) as JwtPayload;

  if (decoded) {
    return decoded.role;
  }
};
