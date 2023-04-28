

import { Router } from "express";
import { productController } from "../controller/productController.js";
 import { authMiddle } from "../middlewear/auth.js";
 import { userController } from "../controller/userController.js";
 import { verifyToken } from "../middlewear/auth.js";
 const router = Router()



 router.post('/createProduct', verifyToken, productController)
 router.post('/createUser',userController )


 

export default router;
