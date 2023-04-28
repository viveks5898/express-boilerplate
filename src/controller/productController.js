import Product from "../models/Product.js";
export const productController = async (req, res, next) => {
  const data = await Product.create({
    title: req.body.title,
    description: req.body.description,
  });

  res.status(201).send(data);
};
