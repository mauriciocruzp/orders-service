import signale from "signale";
import { OrderEntity } from "../../domain/entities/order.entity";
import { OrderInterface } from "../../domain/interfaces/order.interface";

export class GetAllOrdersUseCase {
    constructor(readonly repository: OrderInterface) {}

    async execute(): Promise<OrderEntity[] | null> {
        const response = await this.repository.getAllOrders();

        if (!response) {
            signale.error("Failed to get all orders");
            return null;
        }

        return response;
    }
}
