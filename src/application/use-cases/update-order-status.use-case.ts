import { OrderEntity } from "../../domain/entities/order.entity";
import { OrderInterface } from "../../domain/interfaces/order.interface";
import signale from "signale";

export class UpdateOrderStatusUseCase {
    constructor(readonly repository: OrderInterface) {}

    async execute(id: string): Promise<OrderEntity | null> {
        const response = await this.repository.updateStatusOrder(id);

        if (!response) {
            signale.error("Failed to update order status");
            return null;
        }

        return response;
    }
}
