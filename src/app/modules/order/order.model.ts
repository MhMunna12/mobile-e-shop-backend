import { model, Schema } from "mongoose";
import { TOrder } from "./oder.interface";

const orderSchema = new Schema<TOrder>({
  email: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});
export const Order = model<TOrder>("Order", orderSchema);
