import { Cafe } from './cafe.model';
import { FoodItem } from './fooditem.model';
import { Employee } from './employee.model';

export class Order{

    public orderId:number;
    public totalAmount:number;
    public cafe:Cafe;
    public employee:Employee;
    public cart:FoodItem[];
    public timestamp:string;
}