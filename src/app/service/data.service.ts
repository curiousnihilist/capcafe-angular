import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cafe } from '../model/cafe.model';
import { FoodItem } from '../model/fooditem.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private cafeSource = new BehaviorSubject(new Cafe());
  private menuSource:BehaviorSubject<FoodItem[]> = new BehaviorSubject([]);
  data = this.cafeSource.asObservable();
  menuData = this.menuSource.asObservable();


  constructor() { }

  updateData(cafe:Cafe){
    this.cafeSource.next(cafe);
  }

  updateMenu(menu:FoodItem[]){
    this.menuSource.next(menu);
  }
}
