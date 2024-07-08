import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import productValidationSchema from "./product.zod.validation";

const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = await req.body;
    // const result = await ProductServices.createProductIntoDB(product);
    const zodParseData = productValidationSchema.parse(productData);
    const result = await ProductServices.createProductIntoDB(zodParseData);
    res.status(200).json({
      success: true,
      message: "Product is created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error,
    });
  }
};

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string;
    const result = await ProductServices.getAllProductIntoDB(searchTerm);
    res.status(200).json({
      success: true,
      message: "Product are get successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error,
    });
  }
};
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getSingleProductIntoDB(productId);
    res.status(200).json({
      success: true,
      message: "Single Product get successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error,
    });
  }
};
const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updateData = req.body;
    const result = await ProductServices.updateProductIntoDB(
      productId,
      updateData
    );
    res.status(200).json({
      success: true,
      message: "Product Update successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error,
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.deleteProductIntoDB(productId);
    res.status(200).json({
      success: true,
      message: "Product delete successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error,
    });
  }
};
export const ProductController = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  deleteProduct,
  updateProduct,
};
