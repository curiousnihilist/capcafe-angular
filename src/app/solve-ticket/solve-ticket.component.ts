import { Component, OnInit } from '@angular/core';
import { Ticket } from '../model/ticket.model';
import { Router } from '@angular/router';
import { TransactionService } from '../service/transaction.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-solve-ticket',
  templateUrl: './solve-ticket.component.html',
  styleUrls: ['./solve-ticket.component.css']
})
export class SolveTicketComponent implements OnInit {

  tickets : Ticket[];
  private toSolve:boolean = false;
  singleTicket_form : FormGroup;

  constructor(public route:Router,private ticketService:TransactionService) { }

  ngOnInit() {
    this.getAllQueries();
    this.singleTicket_form = new FormGroup
    ({
      solution : new FormControl(null,[Validators.required,Validators.pattern('^[a-zA-Z \-\']+')])
    })
  }

  back()
  {
    this.route.navigate(['/adminDashboard'])
  }

  getSingleTicket(ticket:Ticket)
  {
    this.toSolve=true;
    this.ticketSolved(ticket);
    
  }


  getAllQueries()
  {
    this.ticketService.getAllQueries().subscribe
    ((data)=>console.log(this.tickets = data))
    
  }

  ticketSolved(ticket:Ticket)
  {
    ticket.response = this.singleTicket_form.value.solution;
    this.ticketService.solveTicket(ticket).subscribe(ticket => {alert("Ticket Solved!")});
    this.getAllQueries();
    this.toSolve=true;
  }

}
