import { CreateOrderUseCase } from "../../application/use-cases/create-order.use-case";
import { GetAllOrdersUseCase } from "../../application/use-cases/get-all-orders.use.case";
import { UpdateOrderStatusUseCase } from "../../application/use-cases/update-order-status.use-case";
import { Request, Response } from "express";

export class OrderController {
    constructor(readonly createOrderUseCase: CreateOrderUseCase, readonly getAllOrdersUseCase: GetAllOrdersUseCase, readonly updateOrderStatusUseCase: UpdateOrderStatusUseCase) {}

    async createOrder(req: Request, res: Response) {
        const total = "0";
        const date = new Date();
        const status = "CREATED";
        const response = await this.createOrderUseCase.execute(total, date, status);

        if (!response) {
            return res.status(400).json({ message: "Failed to create order" });
        }

        return res.status(201).json(response);
    }

    async getAllOrders(req: Request, res: Response) {
        const response = await this.getAllOrdersUseCase.execute();

        if (!response) {
            return res.status(404).json({ message: "Orders not found" });
        }

        return res.status(200).json(response);
    }

    async updateOrderStatus(req: Request, res: Response) {
        const response = await this.updateOrderStatusUseCase.execute(req.params.id);

        if (!response) {
            return res.status(400).json({ message: "Failed to update order status" });
        }

        return res.status(200).json(response);
    }
}
