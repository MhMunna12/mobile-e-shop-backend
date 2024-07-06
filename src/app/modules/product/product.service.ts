import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDB = async (product: TProduct) => {
  const result = await Product.create(product);
  return result;
};

const getAllProductIntoDB = async () => {
  const result = await Product.find();
  return result;
};

const getSingleProductIntoDB = async (id: string) => {
  const result = await Product.findOne({ _id: id });
  return result;
};
const updateProductIntoDB = async (id: string, update: TProduct) => {
  const result = await Product.updateOne({ _id: id }, update, { new: true });
  return result;
};
const deleteProductIntoDB = async (id: string) => {
  const result = await Product.deleteOne({ _id: id });
  return result;
};
export const ProductServices = {
  createProductIntoDB,
  getAllProductIntoDB,
  getSingleProductIntoDB,
  deleteProductIntoDB,
  updateProductIntoDB,
};
