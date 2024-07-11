import { Product } from "./products.model";
import { TProduct } from "./products.type";

export const createProductIntoDB = async (data: TProduct) => {
  const res = await Product.create(data);
  return res;
};
export const getProductsFromDB = async () => {
  const products = await Product.find();
  return products;
};
export const getProductByIdFromDB = async (id: string) => {
  const product = await Product.findById(id);
  return product;
};
export const deleteProductFromDB = async () => {};
export const updateProductIntoDB = async () => {};
