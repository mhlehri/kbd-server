import { RequestHandler } from "express";
import {
  createProductIntoDB,
  deleteProductFromDB,
  getProductBySlugFromDB,
  getProductsFromDB,
  updateProductIntoDB,
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
  try {
    const data = await getProductsFromDB();
    res.json({
      success: true,
      message: "Data retrieved successfully!",
      data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to retrieve data!",
    });
  }
};

export const getProductBySlug: RequestHandler = async (req, res) => {
  try {
    const data = await getProductBySlugFromDB(req.params.slug);
    res.json({
      success: true,
      message: "Data retrieved successfully!",
      data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to retrieve data!",
    });
  }
};
export const updateProduct: RequestHandler = async (req, res) => {
  const data = await updateProductIntoDB(req.params.id, req.body);
  res.json({
    success: true,
    message: "Product updated successfully!",
    data,
  });
};

export const deleteProduct: RequestHandler = async (req, res) => {
  try {
    await deleteProductFromDB(req.params.id);
    res.json({
      success: true,
      message: "Successfully deleted!",
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to delete!",
    });
  }
};
