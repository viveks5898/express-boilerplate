import jwt from "jsonwebtoken";
import { TOKEN_KEY } from "../../config/index.js";
import customError from "../utils/customerror.js";

export const verifyToken = async (req, res, next) => {
  const authHeader =  await req.headers.authorization
    if(authHeader && authHeader.startsWith('Bearer ')){
      const token = authHeader.substring(7)
      req.auth=  {token}
  // const token =
  //   req.body.token || req.query.token || req.headers["x-access-token"];

  console.log("authHeader", token)
   
  if (authHeader === undefined) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
}

  return next();
};

export const authMiddle = (req, res, next) => {
  if (req.url == "/createProduct") {
    next();
  } else {
    res.sendStatus(401);
  }
};
