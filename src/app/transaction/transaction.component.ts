import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { Order } from '../model/order.model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  private order:Order;

  constructor(private dataService:DataService, private route:Router) { 
    this.order = new Order();
  }

  ngOnInit() {
    this.dataService.orderData.subscribe(order => {this.order = order});
  }



}
