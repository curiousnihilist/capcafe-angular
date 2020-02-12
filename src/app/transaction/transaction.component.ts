import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { Order } from '../model/order.model';
import { Transaction } from '../model/transaction.model';
import { TransactionService } from '../service/transaction.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  private order:Order;
  private transaction : Transaction;
  paymentForm : FormGroup;
  

  constructor(private dataService:DataService, private route:Router, private paymentService:TransactionService) { 
    this.order = new Order();
    this.transaction = new Transaction();
  }

  ngOnInit() {
    this.dataService.orderData.subscribe(order => {this.order = order});
    console.log(this.order);
    this.paymentForm = new FormGroup
    ({
       empName: new FormControl(null,[Validators.required,Validators.pattern('^[a-zA-Z \-\']+')]),

       empId:new FormControl(null,[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(6),Validators.maxLength(6)])

    })  
  }

  paymentOrder(){
    this.transaction.order = this.order;
    this.paymentService.addTransaction(this.transaction).subscribe(data => {console.log(data);alert("Payment Successfull! Thank You for Ordering!");
    this.paymentService.saveOrder(this.order).subscribe(data => {console.log(data)});
    console.log(this.transaction);
    this.route.navigate(['/cust-home'])});
  }


}
