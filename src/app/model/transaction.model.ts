import { Order } from './order.model';

export class Transaction{

    public tranactionId:number;
    public order:Order;
    public paymentMode:string;
    public timestamp:string;
}