import { Component, OnInit } from '@angular/core';
import { MenuService } from '../service/menu.service';
import { DataService } from '../service/data.service';
import { Cafe } from '../model/cafe.model';
import { FoodItem } from '../model/fooditem.model';
import { Router } from '@angular/router';
import { LoginServiceService } from '../service/login-service.service';
import { Order } from '../model/order.model';
import { CafeService } from '../service/cafe.service';

@Component({
  selector: 'app-view-menu',
  templateUrl: './view-menu.component.html',
  styleUrls: ['./view-menu.component.css']
})
export class ViewMenuComponent implements OnInit {

  amount:number=0;
  private dishName:string;
  private cafe:Cafe;
  private menu:FoodItem[];
  private order:FoodItem[]=[];
  private finalOrder:Order;
 
  constructor(private dataService:DataService, 
              private rotue:Router,
              private loginService:LoginServiceService,
              private cafeService:CafeService) { 

      this.finalOrder = new Order();
  }

  ngOnInit() {
    this.dataService.data.subscribe(cafe => {this.cafe = cafe});
    this.menu = this.cafe.menu;
  }

  addItem(dish:FoodItem){
    this.order.push(dish);
    this.amount += dish.price;
      
    
  }

  removeItem(dish:FoodItem){
    if(this.order.indexOf(dish)!=-1){
      this.order.splice(this.order.indexOf(dish),1);
      this.amount -= dish.price; 
    }
  }

  payment(){
    this.finalOrder.cafe = this.cafe;
    this.finalOrder.employee = this.loginService.getEmpSession();
    this.finalOrder.cart = this.order;
    this.finalOrder.totalAmount = this.amount;
    if(this.loginService.getEmpSession().wallet<this.amount){
      if(confirm("Not Enough amount in Wallet! Want to add money?")){
        console.log("Yesssssssssss");
        this.rotue.navigate(['/add-money']);
      }
          
    }else{
      if(this.amount==0){
        alert("Nothing added in Cart!");
      }
      else{
        this.dataService.updateOrder(this.finalOrder);
        this.rotue.navigate(['/transaction']);
    
      }
    }
      
    
    
  }

  searchDish(){
    this.cafeService.getDishFromCafe(this.cafe.cafeId,this.dishName).subscribe(data => {this.menu = data})
  }

  sortDish(){
    this.menu = this.menu.sort((obj1, obj2) => {
      if (obj1.price > obj2.price) {
          return 1;
      }
  
      if (obj1.price < obj2.price) {
          return -1;
      }
  
      return 0;
  });
  
  }

  



}
