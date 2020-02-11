import { Employee } from './employee.model';
import { Cafe } from './cafe.model';

export class Review{

    public reviewId:number;
    public cafe:Cafe;
    public rating:number;
    public employee:Employee;
    public review:string;
}