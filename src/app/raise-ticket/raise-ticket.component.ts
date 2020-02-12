import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Employee } from '../model/employee.model';
import { Ticket } from '../model/ticket.model';
import { LoginServiceService } from '../service/login-service.service';
import { TransactionService } from '../service/transaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-raise-ticket',
  templateUrl: './raise-ticket.component.html',
  styleUrls: ['./raise-ticket.component.css']
})
export class RaiseTicketComponent implements OnInit {

  private employee:Employee;
  private ticket:Ticket;
  userDesk_form : FormGroup

  constructor(private loginService:LoginServiceService, private transactionService:TransactionService, private route:Router) { 
    this.ticket = new Ticket();
  }

  ngOnInit() {
    this.employee = this.loginService.getEmpSession();

    this.userDesk_form = new FormGroup
    ({
      comments : new FormControl(null,[Validators.required,Validators.pattern('^[a-zA-Z.,-\-\']+'),Validators.maxLength(200)])
    })
    
  }

  complaintRaised(){
    this.ticket.employee = this.employee;
    this.ticket.query = this.userDesk_form.value.comments;
    this.transactionService.raiseTicket(this.ticket).subscribe(
      data => {alert("Ticket Raised successfully!");
               this.route.navigate(['/cust-home'])}
    );

  }
}
