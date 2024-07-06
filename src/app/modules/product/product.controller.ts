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

export const ProductController = {
  createProduct,
};
