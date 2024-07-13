import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  getProductBySlug,
  getProducts,
  updateProduct,
  updateProducts,
} from "./products.controller";

const router = Router();

router.get("/products", getProducts);
router.get("/products/:slug", getProductBySlug);
router.post("/products", addProduct);
router.put("/products/:id", updateProduct);
router.put("/products", updateProducts);
router.delete("/products/:id", deleteProduct);

export default router;
