import OrderModel from "../../database/mysql/models/order.model";
import { OrderEntity } from "../../domain/entities/order.entity";
import { OrderInterface } from "../../domain/interfaces/order.interface";
import signale from "signale";

export class MysqlOrderRepository implements OrderInterface {
    async createOrder(order: OrderEntity): Promise<OrderEntity | null> {
        try {
            const createdOrder = await OrderModel.create({
                total: order.total,
                date: order.date,
                status: order.status
            });
            return createdOrder;
        } catch (error) {
            signale.error(error);
            return null;
        }
    }

    async getAllOrders(): Promise<OrderEntity[]> {
        try {
            const orders = await OrderModel.findAll();

            if (!orders) {
                return [];
            }

            return orders;
        } catch (error) {
            signale.error(error);
            return [];
        }
    }
    async updateStatusOrder(id: string): Promise<OrderEntity | null> {
        try {
            const order = await OrderModel.findOne({ where: { id } });

            if (!order) {
                return null;
            }

            let status = order.status;

            if (order.status === "CREATED") {
                status = "PAID";
            } else if (order.status === "PAID") {
                status = "SHIPPED";
            }

            const updatedOrder = await OrderModel.update({ status: status }, { where: { id } });

            if (!updatedOrder) {
                return null;
            }

            const updatedOrderData = await OrderModel.findOne({ where: { id } });

            return updatedOrderData;
        } catch (error) {
            signale.error(error);
            return null;
        }
    }
}
