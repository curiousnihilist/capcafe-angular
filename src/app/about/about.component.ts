import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../service/login-service.service';
import { Employee } from '../model/employee.model';
import { Ticket } from '../model/ticket.model';
import { Order } from '../model/order.model';
import { TransactionService } from '../service/transaction.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  private employee:Employee;
  private showAbout:boolean = true;
  private showOrders:boolean = false;
  private showTickets:boolean = false;
  tickets:Ticket[]=[];
  orders:Order[]=[];

  constructor(private loginService:LoginServiceService, private transactionService:TransactionService) { 
    this.employee = new Employee();
  }

  ngOnInit() {
    this.employee = this.loginService.getEmpSession();
    console.log(this.employee);
    this.tickets =  this.employee.ticketsRaised;
    this.transactionService.getAllOrders(this.employee.empId).subscribe(data => {this.orders =data});
  }

  showTicket(){
    this.showAbout=false;
    this.showTickets=true;
    this.showOrders=false;
  }

  showOrder(){
    this.showAbout=false;
    this.showTickets=false;
    this.showOrders=true;
  }

  back(){
    this.showAbout=true;
    this.showTickets=false;
    this.showOrders=false;
  }




}
