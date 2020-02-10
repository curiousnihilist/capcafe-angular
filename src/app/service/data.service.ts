import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cafe } from '../model/cafe.model';
import { FoodItem } from '../model/fooditem.model';
import { Order } from '../model/order.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private cafeSource = new BehaviorSubject(new Cafe());
  private orderSource = new BehaviorSubject(new Order());
  data = this.cafeSource.asObservable();
  orderData = this.orderSource.asObservable();


  constructor() { }

  updateData(cafe:Cafe){
    this.cafeSource.next(cafe);
  }

  updateOrder(order:Order){
    this.orderSource.next(order);
  }
}
