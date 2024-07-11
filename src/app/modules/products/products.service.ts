import { Product } from "./products.model";
import { TProduct } from "./products.type";

export const createProductIntoDB = async (data: TProduct) => {
  const res = await Product.create(data);
  return res;
};
export const getProductsFromDB = async () => {
  const res = await Product.find();
  return res;
};
export const getProductByIdFromDB = async () => {};
export const deleteProductFromDB = async () => {};
export const updateProductIntoDB = async () => {};
