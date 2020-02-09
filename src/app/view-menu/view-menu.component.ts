import { Component, OnInit } from '@angular/core';
import { MenuService } from '../service/menu.service';
import { DataService } from '../service/data.service';
import { Cafe } from '../model/cafe.model';
import { FoodItem } from '../model/fooditem.model';

@Component({
  selector: 'app-view-menu',
  templateUrl: './view-menu.component.html',
  styleUrls: ['./view-menu.component.css']
})
export class ViewMenuComponent implements OnInit {

  amount:number=0;
  private cafe:Cafe;
  private menu:FoodItem[];
  private order:FoodItem[]=[];
 
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.data.subscribe(cafe => {this.cafe = cafe});
    this.menu = this.cafe.menu;
  }

  addItem(dish:FoodItem){
    this.order.push(dish);
    console.log(this.order);
    this.amount += dish.price;
      
    
  }

  removeItem(dish:FoodItem){
    if(this.order.indexOf(dish)!=-1){
      this.order.splice(this.order.indexOf(dish),1);
      this.amount -= dish.price; 
    }
    
    console.log(this.order);
  }

  calculateAmount(){
    // this.amount = this.order.;
    
  }

  



}
