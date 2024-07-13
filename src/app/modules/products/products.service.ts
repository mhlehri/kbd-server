import { Product } from "./products.model";
import { TProduct } from "./products.type";

export const createProductIntoDB = async (data: TProduct) => {
  const isExists = await Product.exists({ name: data.name });
  if (isExists) {
    throw new Error("This product already exits.");
  }
  const res = await Product.create(data);
  return res;
};
export const getProductsFromDB = async (search: string) => {
  const query: any = {};
  console.log(search);
  if (search) {
    query.$or = [
      { name: { $regex: search, $options: "i" } },
      { brand: { $regex: search, $options: "i" } },
    ];
  }

  const products = await Product.find(query);
  return products;
};

export const getProductBySlugFromDB = async (slug: string) => {
  const product = await Product.findOne({ slug });
  return product;
};

export const deleteProductFromDB = async (id: string) => {
  const res = await Product.findByIdAndDelete(id);
  return res;
};

export const updateProductIntoDB = async (
  id: string,
  body: Partial<TProduct>
) => {
  const res = await Product.findByIdAndUpdate(id, body, { new: true });
  return res;
};
