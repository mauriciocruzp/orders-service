export default class OrderItemEntity {
    public id: string;
    public productId: string;
    public amount: number;
    public orderId: string;

    constructor(
        id: string,
        productId: string,
        amount: number,
        orderId: string
    ) {
        this.id = id;
        this.productId = productId;
        this.amount = amount;
        this.orderId = orderId;
    }
}
