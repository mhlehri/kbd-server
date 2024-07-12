import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  getProductBySlug,
  getProducts,
  updateProduct,
} from "./products.controller";

const router = Router();

router.get("/products", getProducts);
router.get("/products/:slug", getProductBySlug);
router.post("/products", addProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

export default router;
