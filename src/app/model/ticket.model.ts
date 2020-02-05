import { Employee } from './employee.model';

export class Ticket{

    public ticketId:string;
    public query:string;
    public employee:Employee;
    public response:string;
    public status:string;
}