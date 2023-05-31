import jwt, { JwtPayload } from "jsonwebtoken";

export const parserDecodeJWT = (token: any) => {
  const decoded = jwt.decode(token) as JwtPayload;

  if (decoded) {
    return decoded;
  }
};
