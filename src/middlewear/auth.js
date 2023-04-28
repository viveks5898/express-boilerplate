export const authMiddle = (req, res, next) => {
  if (req.url == "/createProduct") {
    next();
  } else {
    res.sendStatus(401);
  }
};
