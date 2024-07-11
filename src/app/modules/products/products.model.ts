import { Model, Schema } from "mongoose";

const productSchema = new Schema({
  name: String,
  brand: String,
  description: String,
  price: Number,
  quantity: Number,
  rating: Number,
});

export const Product = new Model("Products", productSchema);
