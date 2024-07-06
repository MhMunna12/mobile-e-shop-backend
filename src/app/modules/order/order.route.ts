import express from "express";
import { orderController } from "./order.controller";
const router = express.Router();
router.post("/create-order", orderController.createOrder);
router.get("/", orderController.getAllOrder);
router.get("/:email", orderController.getEmailByOrder);
export const orderRoutes = router;
