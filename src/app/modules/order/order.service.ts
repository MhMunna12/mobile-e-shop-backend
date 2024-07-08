import { Product } from "../product/product.model";
import { TOrder } from "./oder.interface";
import { Order } from "./order.model";

const createOrderInToDB = async (order: TOrder) => {
  const { productId, quantity } = order;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const findProduct: any = await Product.findOne({ _id: productId });
  if (findProduct?.inventory.quantity <= quantity) {
    throw "Insufficient quantity";
  }
  const remainingQuantity = findProduct.inventory.quantity - quantity;
  const sendData = {
    inventory: {
      quantity: remainingQuantity,
    },
  };
  await Product.updateOne({ _id: productId }, sendData);
  const result = await Order.create(order);
  return result;
};
const getAllOrderInToDB = async (email: string): Promise<TOrder[] | null> => {
  const result = await Order.find({ email });
  return result;
};

// const getEmailByOrderDB = async (email: string): Promise<TOrder[] | null> => {
//   const result = await Order.find({ email });
//   return result;
// };
export const OrderServices = {
  createOrderInToDB,
  getAllOrderInToDB,
};
