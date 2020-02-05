import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cafe } from '../model/cafe.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CafeService {

  private ADD_CAFE_URI = "http://localhost:8880/cafe/add-cafe";
  private UPDATE_CAFE_URI = "http://localhost:8880/cafe/update-cafe";
  private DELETE_CAFE_URI = "http://localhost:8880/cafe/delete-cafe";
  private GET_ALL_CAFE_URI = "http://localhost:8880/cafe/get-all-cafe";
  private GET_CAFE_BY_ID = "http://localhost:8880/cafe/get-by-id";
  private GET_CAFE_BY_NAME = "http://localhost:8880/cafe/get-by-name";
  private GET_CAFE_BY_LOCATION = "http://localhost:8880/cafe/get-by-location";
  private GET_CAFE_BY_DISH = "http://localhost:8880/cafe/get-by-dish";
  private GET_CAFE_BY_PRICE_RANGE = "http://localhost:8880/cafe/get-by-price-range";
  private GET_CAFE_BY_RATING_RANGE = "http://localhost:8880/cafe/get-by-rating-range";


  constructor(private http:HttpClient) { }

  addCafe(cafe:Cafe):Observable<Cafe>{
    return this.http.post<Cafe>(this.ADD_CAFE_URI,cafe);
  }

  updateCafe(cafe:Cafe):Observable<Cafe>{
    return this.http.put<Cafe>(this.UPDATE_CAFE_URI,cafe);
  }

  deleteCafe(cafeId:number):Observable<boolean>{
    return this.http.delete<boolean>(this.DELETE_CAFE_URI+"?cafeId="+cafeId);
  }

  getAllCafe():Observable<Cafe[]>{
    return this.http.get<Cafe[]>(this.GET_ALL_CAFE_URI)
  }

  getCafeById(cafeId:number):Observable<Cafe>{
    return this.http.get<Cafe>(this.GET_CAFE_BY_ID+"?cafeId="+cafeId);
  }

  getCafeByName(name:string):Observable<Cafe[]>{
    return this.http.get<Cafe[]>(this.GET_CAFE_BY_NAME+"?name="+name);
  }

  getCafeByLocation(location:string):Observable<Cafe[]>{
    return this.http.get<Cafe[]>(this.GET_CAFE_BY_LOCATION+"?location="+location);
  }

  getCafeByDish(dish:string):Observable<Cafe[]>{
    return this.http.get<Cafe[]>(this.GET_CAFE_BY_DISH+"?dish="+dish);
  }

  getCafeByRatingRange(min:number,max:number):Observable<Cafe[]>{
    return this.http.get<Cafe[]>(this.GET_CAFE_BY_RATING_RANGE+"?min="+min+"&max="+max);
  }

  getCafeByPriceRange(min:number,max:number):Observable<Cafe[]>{
    return this.http.get<Cafe[]>(this.GET_CAFE_BY_PRICE_RANGE+"?min="+min+"&max="+max);
  }

}
