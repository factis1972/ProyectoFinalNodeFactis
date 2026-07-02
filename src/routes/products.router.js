import { Router } from "express";

const router = Router();

import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controller.js";

//import { auth } from "../middlewares/auth.middleware.js";

// Prefijo: /api/products

//router.post("/", auth, createProduct);

router.get("/", getProducts);
router.get("/:id", getProductById);
// router.get("/:sku", getProductBySKU);

//router.put("/:id", auth, updateProduct);
router.put("/:id", updateProduct);

//router.delete("/:id", auth, deleteProduct);
router.delete("/:id", deleteProduct);

export default router;