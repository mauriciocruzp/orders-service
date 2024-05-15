import { CreateOrderUseCase } from "../application/use-cases/create-order.use-case";
import { MysqlOrderRepository } from "./repositories/mysql-order.repository";
import { GetAllOrdersUseCase } from "../application/use-cases/get-all-orders.use.case";
import { UpdateOrderStatusUseCase } from "../application/use-cases/update-order-status.use-case";
import { OrderController } from "./controllers/order.controller";

const mysqlOrderRepository = new MysqlOrderRepository();

const createOrderUseCase = new CreateOrderUseCase(mysqlOrderRepository);
const getAllOrdersUseCase = new GetAllOrdersUseCase(mysqlOrderRepository);
const updateOrderStatusUseCase = new UpdateOrderStatusUseCase(mysqlOrderRepository);

export const orderController = new OrderController(createOrderUseCase, getAllOrdersUseCase, updateOrderStatusUseCase);
