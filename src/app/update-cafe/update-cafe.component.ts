import { Component, OnInit } from '@angular/core';
import { Cafe } from '../model/cafe.model';
import { FoodItem } from '../model/fooditem.model';
import { CafeService } from '../service/cafe.service';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-update-cafe',
  templateUrl: './update-cafe.component.html',
  styleUrls: ['./update-cafe.component.css']
})
export class UpdateCafeComponent implements OnInit {

  private carray:number[]=[1];
  private cafe:Cafe;
  private addedCafe:Cafe;
  private foodItem:FoodItem;
  private menu:FoodItem[]=[];
  private locations:string[]=["Pune","Mumbai","Bangalore","Kolkata","Gurugram"];

  constructor(private cafeService:CafeService, private dataService:DataService) { 
    this.cafe = new Cafe();
    this.addedCafe = new Cafe();
    this.foodItem = new FoodItem();
  }

  ngOnInit() {
    this.dataService.data.subscribe(cafe =>{this.cafe = cafe});
    this.menu = this.cafe.menu;

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


  updateCafe(){
    console.log(this.cafe);
    this.cafeService.updateCafe(this.cafe).subscribe();
  }

}
