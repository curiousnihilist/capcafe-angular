import { Order } from './order.model';
import { Review } from './review.model';
import { Ticket } from './ticket.model';

export class Employee{

    public empId:number;
    public capgeminiId:number;
    public name:string;
    public email:string;
    public password:string;
    public gender:string;
    public wallet:number;
    public subscriptionDate:string;
    public ticketsRaised:Ticket[];
    public pastReviews:Review[];
    public pastOrders:Order[];
}