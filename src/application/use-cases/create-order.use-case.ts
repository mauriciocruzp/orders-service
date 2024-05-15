import { OrderEntity } from "../../domain/entities/order.entity";
import { OrderInterface } from "../../domain/interfaces/order.interface";
import signale from "signale";

export class CreateOrderUseCase {
    constructor(readonly repository: OrderInterface) {}

    async execute(total: string, date: Date, status: string): Promise<OrderEntity | null> {
        const id = "";
        const order = new OrderEntity(id, total, date, status)
        const response = await this.repository.createOrder(order);

        if (!response) {
            signale.error("Failed to create order");
            return null;
        }

        return response;
    }
}
