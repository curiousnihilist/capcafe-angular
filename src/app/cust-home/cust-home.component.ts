import { Component, OnInit } from '@angular/core';
import { CafeService } from '../service/cafe.service';
import { Cafe } from '../model/cafe.model';
import { FoodItem } from '../model/fooditem.model';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { Login } from '../model/login.model';
import { LoginServiceService } from '../service/login-service.service';

@Component({
  selector: 'app-cust-home',
  templateUrl: './cust-home.component.html',
  styleUrls: ['./cust-home.component.css']
})
export class CustHomeComponent implements OnInit {

  location:string;
  searchText:string;
  private cafeList:Cafe[] = [];
  private locations:string[]=["Pune","Mumbai","Bangalore","Kolkata","Gurugram"];

  constructor(private cafeService:CafeService, private dataService:DataService, private route:Router,
              private loginService:LoginServiceService) {
   }

  ngOnInit() {
    this.cafeService.getAllCafe().subscribe(cafes => {this.cafeList = cafes});
    console.log(this.loginService.getEmpSession());
  }

  searchCafe(){
    this.cafeService.getFood(this.location,this.searchText).subscribe(cafes => {this.cafeList = cafes});
  }

  viewMenu(cafe:Cafe){
    this.dataService.updateData(cafe);
    this.route.navigate(['/view-menu']);
  }

  viewReview(cafe:Cafe){
    this.dataService.updateData(cafe);
    this.route.navigate(['/add-review']);
  }

}
