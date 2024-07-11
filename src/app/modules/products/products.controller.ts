import { RequestHandler } from "express";
import {
  createProductIntoDB,
  getProductByIdFromDB,
  getProductsFromDB,
} from "./products.service";

export const addProduct: RequestHandler = async (req, res) => {
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
export const getProductById: RequestHandler = async (req, res) => {
  const data = await getProductByIdFromDB(req.params.id);
  res.json({
    success: true,
    message: "Data retrieved successfully!",
    data,
  });
};
export const updateProduct: RequestHandler = () => {};
export const deleteProduct: RequestHandler = () => {};
