import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cafe } from '../model/cafe.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private cafeSource = new BehaviorSubject(new Cafe());
  data = this.cafeSource.asObservable();


  constructor() { }

  updateData(cafe:Cafe){
    this.cafeSource.next(cafe);
  }
}
