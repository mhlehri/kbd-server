import { RequestHandler } from "express";
import {
  createProductIntoDB,
  getProductBySlugFromDB,
  getProductsFromDB,
} from "./products.service";

export const addProduct: RequestHandler = async (req, res) => {
  const slug = req.body.name.replace(/\s/g, "-").lowercase();
  try {
    await createProductIntoDB({ slug, ...req.body });
    res.json({
      success: true,
      message: "Product added successfully!",
    });
  } catch (error) {
    res.json({
      success: false,
      message: (error as Error).message,
    });
  }
};
export const getProducts: RequestHandler = async (req, res) => {
  const data = await getProductsFromDB();
  res.json({
    success: true,
    message: "Data retrieved successfully!",
    data,
  });
};
export const getProductBySlug: RequestHandler = async (req, res) => {
  const data = await getProductBySlugFromDB(req.params.slug);
  res.json({
    success: true,
    message: "Data retrieved successfully!",
    data,
  });
};
export const updateProduct: RequestHandler = () => {};
export const deleteProduct: RequestHandler = () => {};
