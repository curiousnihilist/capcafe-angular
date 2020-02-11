import { Cafe } from './cafe.model';
import { Employee } from './employee.model';

export class Review{

    public reviewId:number;
    public cafe:Cafe;
    public rating:number;
    public employee:Employee;
    public review:string;
}