import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FoodItem } from '../model/fooditem.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http:HttpClient) { }

  private ADD_DISH_URI = "http://localhost:8880/menu/add-item";
  private UPDATE_DISH_URI = "http://localhost:8880/menu/update-item";
  private DELETE_DISH_URI = "http://localhost:8880/menu/delete-item";
  private GET_DISH_BY_ID_URI = "http://localhost:8880/menu/get-dish-by-id";
  private GET_ALL_DISH_URI = "http://localhost:8880/menu/get-all-dishes";

  addDish(dish:FoodItem):Observable<FoodItem>{
    return this.http.post<FoodItem>(this.ADD_DISH_URI,dish);
  }

  updateDish(dish:FoodItem):Observable<FoodItem>{
    return this.http.put<FoodItem>(this.UPDATE_DISH_URI,dish);
  }

  deleteDish(itemId:number):Observable<number>{
    return this.http.delete<number>(this.DELETE_DISH_URI+"?itemId="+itemId);
  }

  getDishById(itemId:number):Observable<FoodItem>{
    return this.http.get<FoodItem>(this.GET_DISH_BY_ID_URI+"?itemId="+itemId);
  }

  getAllDishes():Observable<FoodItem[]>{
    return this.http.get<FoodItem[]>(this.GET_ALL_DISH_URI);
  }

}
