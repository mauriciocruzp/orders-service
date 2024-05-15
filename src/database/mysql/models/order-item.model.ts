import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import OrderModel from "./order.model";

@Table({
    tableName: 'order_items',
    modelName: 'OrderItem',
    timestamps: false
})

export default class OrderItemModel extends Model {
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
    declare productId: string;

    @Column({
        allowNull: false,
        type: DataType.INTEGER,
    })
    declare amount: number;

    @ForeignKey(() => OrderModel)
    @Column
    declare orderId: string;

    @BelongsTo(() => OrderModel)
    declare order: OrderModel;
}
