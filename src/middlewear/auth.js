import jwt from "jsonwebtoken";
import { TOKEN_KEY } from "../../config/index.js";

export const verifyToken = async (req, res, next) => {
  const authHeader =  await req.headers.authorization
  console.log("authHeader", authHeader)
    if(authHeader && authHeader.startsWith('Bearer ')){
      const token = authHeader.substring(7)
      req.auth=  {token}
  // const token =
  //   req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
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
