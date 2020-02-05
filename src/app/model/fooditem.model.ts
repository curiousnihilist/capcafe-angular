import { Cafe } from './cafe.model';
import { Order } from './order.model';

export class FoodItem{

    public itemId:number;
    public itemType:string;
    public name:string;
    public price:number;
    public orders:Order[];
    public cafe:Cafe[];
}