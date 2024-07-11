import { RequestHandler } from "express";
import { createProductIntoDB, getProductsFromDB } from "./products.service";

export const addProduct: RequestHandler = async (req, res) => {
  try {
    await createProductIntoDB(req.body);
    res.json({
      success: true,
      message: "Product added successfully!",
    });
  } catch (error: any) {
    res.json({
      success: false,
      message: error.message,
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
export const getProductById: RequestHandler = () => {};
export const updateProduct: RequestHandler = () => {};
export const deleteProduct: RequestHandler = () => {};
