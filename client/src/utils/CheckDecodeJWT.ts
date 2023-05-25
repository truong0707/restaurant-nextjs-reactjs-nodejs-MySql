import jwt, { JwtPayload } from "jsonwebtoken";

export const checkDecodeJWT = (token: any) => {
  const decoded = jwt.decode(token) as JwtPayload;

  if (decoded) {
    return decoded;
  }
};
