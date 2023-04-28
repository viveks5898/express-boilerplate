
import { Router } from "express";
import { productController } from "../controller/productController.js";
 import { authMiddle } from "../middlewear/auth.js";
 const router = Router()

 router.post('/createProduct', authMiddle, productController)

 

export default router;
