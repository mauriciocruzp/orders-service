import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import OrderItemModel from "./order-item.model";

@Table({
    tableName: 'orders',
    modelName: 'Order',
    timestamps: false
})

export default class OrderModel extends Model {
    @Column({
        allowNull: false,
        primaryKey: true,
        type: DataType.STRING,
        defaultValue: DataType.UUIDV4,
        unique: true,
    })
    declare id: string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    declare total: string;

    @Column({
        allowNull: false,
        type: DataType.DATE,
    })
    declare date: Date;

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    declare status: string;

    @HasMany(() => OrderItemModel)
    declare order_items: OrderItemModel[];
}
