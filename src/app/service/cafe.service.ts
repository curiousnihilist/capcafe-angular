import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cafe } from '../model/cafe.model';
import { Observable, throwError } from 'rxjs';
import { FoodItem } from '../model/fooditem.model';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CafeService {

  private ADD_CAFE_URI = "http://localhost:8888/front/add-cafe";
  private UPDATE_CAFE_URI = "http://localhost:8888/front/update-cafe";
  private DELETE_CAFE_URI = "http://localhost:8880/cafe/delete-cafe";
  private GET_ALL_CAFE_URI = "http://localhost:8888/front/get-all-cafe";
  private GET_CAFE_BY_ID = "http://localhost:8888/front/get-by-id";
  private GET_CAFE_BY_NAME = "http://localhost:8888/front/get-by-name";
  private GET_CAFE_BY_LOCATION = "http://localhost:8888/front/get-by-location";
  private GET_CAFE_BY_DISH = "http://localhost:8888/front/get-by-dish";
  private GET_CAFE_BY_PRICE_RANGE = "http://localhost:8888/front/get-by-price-range";
  private GET_CAFE_BY_RATING_RANGE = "http://localhost:8888/front/get-by-rating-range";
  private GET_FOOD_URI = "http://localhost:8880/cafe/get-food";
  private GET_DISH_FROM_CAFE = "http://localhost:8880/cafe/get-dish-from-cafe";


  constructor(private http:HttpClient) { }

  addCafe(cafe:Cafe):Observable<Cafe>{
    return this.http.post<Cafe>(this.ADD_CAFE_URI,cafe).pipe(retry(1), catchError(this.errorHandler));
  }

  updateCafe(cafe:Cafe):Observable<Cafe>{
    return this.http.put<Cafe>(this.UPDATE_CAFE_URI,cafe).pipe(retry(1), catchError(this.errorHandler));
  }

  deleteCafe(cafeId:number):Observable<boolean>{
    return this.http.delete<boolean>(this.DELETE_CAFE_URI+"?cafeId="+cafeId).pipe(retry(1), catchError(this.errorHandler));
  }

  getAllCafe():Observable<Cafe[]>{
    return this.http.get<Cafe[]>(this.GET_ALL_CAFE_URI).pipe(retry(1), catchError(this.errorHandler));
  }

  getCafeById(cafeId:number):Observable<Cafe>{
    return this.http.get<Cafe>(this.GET_CAFE_BY_ID+"?cafeId="+cafeId).pipe(retry(1), catchError(this.errorHandler));
  }

  getCafeByName(name:string):Observable<Cafe[]>{
    return this.http.get<Cafe[]>(this.GET_CAFE_BY_NAME+"?name="+name).pipe(retry(1), catchError(this.errorHandler));
  }

  getCafeByLocation(location:string):Observable<Cafe[]>{
    return this.http.get<Cafe[]>(this.GET_CAFE_BY_LOCATION+"?location="+location).pipe(retry(1), catchError(this.errorHandler));
  }

  getCafeByDish(dish:string):Observable<Cafe[]>{
    return this.http.get<Cafe[]>(this.GET_CAFE_BY_DISH+"?dish="+dish).pipe(retry(1), catchError(this.errorHandler));
  }

  getCafeByRatingRange(min:number,max:number):Observable<Cafe[]>{
    return this.http.get<Cafe[]>(this.GET_CAFE_BY_RATING_RANGE+"?min="+min+"&max="+max).pipe(retry(1), catchError(this.errorHandler));
  }

  getCafeByPriceRange(min:number,max:number):Observable<Cafe[]>{
    return this.http.get<Cafe[]>(this.GET_CAFE_BY_PRICE_RANGE+"?min="+min+"&max="+max).pipe(retry(1), catchError(this.errorHandler));
  }

  getFood(location:string, name:string):Observable<Cafe[]>{
    return this.http.get<Cafe[]>(this.GET_FOOD_URI+"?location="+location+"&name="+name).pipe(retry(1), catchError(this.errorHandler));
  }

  getDishFromCafe(cafeId:number, dish:string):Observable<FoodItem[]>{
  return this.http.get<FoodItem[]>(this.GET_DISH_FROM_CAFE+"?cafeId="+cafeId+"&dish="+dish).pipe(retry(1), catchError(this.errorHandler));
  }

  errorHandler(error) {
    //console.log(error.)
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) { //client side error
      errorMessage = `Error: ${error.error.message}`;
    }
    else { //server side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.error.error}`;
    }
    window.alert(errorMessage);
    return throwError(error.error)
  }
}
