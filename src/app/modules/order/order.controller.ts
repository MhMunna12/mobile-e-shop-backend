import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import { orderValidationSchema } from "./order.validation";

const createOrder = async (req: Request, res: Response) => {
  try {
    const { order } = req.body;
    //zod validation
    const zodParseData = orderValidationSchema.parse(order);
    const result = await OrderServices.createOrderInToDB(zodParseData);
    res.status(200).json({
      success: true,
      message: "Order Created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: "Something went wrong",
      error: error,
    });
  }
};
const getAllOrder = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.getAllOrderInToDB(
      req.query.email as string
    );
    res.status(200).json({
      success: true,
      message: "Orders fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: "Something went wrong",
      error: error,
    });
  }
};

// const getEmailByOrder = async (req: Request, res: Response) => {
//   try {
//     const orders = await OrderServices.getEmailByOrderDB(
//       req.query.email as string
//     );
//     res.status(200).json({
//       success: true,
//       message: "Orders by email successfully!",
//       data: orders,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: true,
//       message: "Something went wrong",
//       error: error,
//     });
//   }
// };
export const orderController = {
  createOrder,
  getAllOrder,
  // getEmailByOrder,
};
