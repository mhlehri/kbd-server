import { RequestHandler } from "express";
import {
  createProductIntoDB,
  deleteProductFromDB,
  getProductBySlugFromDB,
  getProductsFromDB,
} from "./products.service";

export const addProduct: RequestHandler = async (req, res) => {
  console.log(req.body);
  try {
    await createProductIntoDB(req.body);
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

export const deleteProduct: RequestHandler = async (req, res) => {
  try {
    await deleteProductFromDB(req.params.id);
    res.json({
      success: true,
      message: "Successfully deleted.",
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to delete.",
    });
  }
};
