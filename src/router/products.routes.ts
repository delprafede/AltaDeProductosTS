import { Router } from "express";
import { createProduct, getProducts, getProductId, updateProduct, updateAvailable,deleteProduct } from "../controllers/product.controller";
import { productImputValidate, validateProductId } from "../middleware/productImput.validate";


const router = Router()

router.get("/products", getProducts)
router.get("/product/:id", validateProductId, getProductId )
router.post("/createProducts",productImputValidate, createProduct)
router.put("/product/:id",validateProductId, updateProduct )
router.patch("/product/:id", validateProductId,updateAvailable )
router.delete("/product/:id",validateProductId, deleteProduct)  

export default router