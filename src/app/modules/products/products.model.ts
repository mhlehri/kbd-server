import mongoose, { Schema } from "mongoose";
import { TProduct } from "./products.type";

const productSchema = new Schema<TProduct>({
  name: { type: String, required: true, unique: true },
  slug: { type: String, required: true },
  brand: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  rating: { type: Number, required: true },
  image: { type: String, required: true },
});

export const Product = mongoose.model("Products", productSchema);
