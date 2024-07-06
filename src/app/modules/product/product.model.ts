import { model, Schema } from "mongoose";
import { Inventory, TProduct, Variant } from "./product.interface";

const variantSchema = new Schema<Variant>({
  type: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

const inventorySchema = new Schema<Inventory>({
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
});

const productSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  tags: {
    type: String,
    enum: ["smartphone", "Apple", "iOS"],
    required: true,
  },
  variants: {
    type: [variantSchema],
    required: true,
  },
  inventory: {
    type: inventorySchema,
    required: true,
  },
});
export const Product = model<TProduct>("Product", productSchema);
