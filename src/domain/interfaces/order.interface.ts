import { OrderEntity } from "../entities/order.entity";

export interface OrderInterface {
    createOrder(order: OrderEntity): Promise<OrderEntity | null>;
    getAllOrders(): Promise<OrderEntity[]>;
    updateStatusOrder(id: string): Promise<OrderEntity | null>;
}
