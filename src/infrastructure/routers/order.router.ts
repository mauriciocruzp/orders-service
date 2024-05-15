import express from "express";
import { orderController } from "../order.dependencies";

export const orderRouter = express.Router();

orderRouter.post("/", orderController.createOrder.bind(orderController));
orderRouter.get("/", orderController.getAllOrders.bind(orderController));
orderRouter.put("/:id", orderController.updateOrderStatus.bind(orderController));
