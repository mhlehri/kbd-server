import { RequestHandler } from "express";
import { createProductIntoDB } from "./products.service";

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
export const getProducts: RequestHandler = () => {};
export const getProductById: RequestHandler = () => {};
export const updateProduct: RequestHandler = () => {};
export const deleteProduct: RequestHandler = () => {};
