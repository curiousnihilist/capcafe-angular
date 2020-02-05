import { Component, OnInit } from '@angular/core';
import { Cafe } from '../model/cafe.model';
import { FoodItem } from '../model/fooditem.model';

@Component({
  selector: 'app-add-cafe',
  templateUrl: './add-cafe.component.html',
  styleUrls: ['./add-cafe.component.css']
})
export class AddCafeComponent implements OnInit {
  
  private carray:number[]=[1];
  private cafe:Cafe;
  private foodItem:FoodItem;
  private menu:FoodItem[]=[];
  private locations:string[]=["Pune","Mumbai","Bangalore","Kolkata","Gurugram"];

  constructor() {
    this.cafe = new Cafe();
    this.foodItem = new FoodItem();
   }

  ngOnInit() {
  }

  addDish(){
    this.menu.push(this.foodItem);
    console.log(this.menu);
    this.foodItem = new FoodItem(); 
  }

  removeDish(idx:number){
    this.menu.splice(idx,1);
    console.log(this.menu);
  }

}
