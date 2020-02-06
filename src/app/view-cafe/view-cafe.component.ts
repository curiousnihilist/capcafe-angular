import { Component, OnInit } from '@angular/core';
import { Cafe } from '../model/cafe.model';
import { CafeService } from '../service/cafe.service';
import { FoodItem } from '../model/fooditem.model';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-cafe',
  templateUrl: './view-cafe.component.html',
  styleUrls: ['./view-cafe.component.css']
})
export class ViewCafeComponent implements OnInit {

  private searchBy:string;
  private cafeList:Cafe[]=[];
  //private menuList:FoodItem[]=[];
  private hideMenu:boolean = true;
  private currentId:number = 0;
  private searchText:string;

  constructor(private cafeService:CafeService, private dataService:DataService,private route:Router) { }


  ngOnInit() {
    this.loadAllCafe();
  }

  loadAllCafe(){
    this.cafeService.getAllCafe().subscribe( cafes => {this.cafeList = cafes});
  }

  showMenu(currentId:number){
     if(this.hideMenu == true){
       this.hideMenu = false;
       this.currentId = currentId;
     }else{
       this.hideMenu = true;
       this.currentId = 0;
     }

  }

  updateCafe(cafe:Cafe){
    this.dataService.updateData(cafe);
    this.route.navigate(['/update-cafe']);
  }

  deleteCafe(cafeId:number){
    this.cafeService.deleteCafe(cafeId).subscribe();
    this.loadAllCafe();
  }

  searchByCafeId(){
    this.cafeService.getCafeById(+this.searchText).subscribe(cafe => {this.cafeList = [];
                                                                      this.cafeList.push(cafe)});

  }

  searchByCafeName(){
    this.cafeService.getCafeByName(this.searchText).subscribe(cafes => {this.cafeList = cafes});
  }

  searchByCafeLocation(){
    this.cafeService.getCafeByLocation(this.searchText).subscribe(cafes => {this.cafeList = cafes});
  }
  
  searchCafe(){
    console.log(1);
    if(this.searchBy == "cafeId")
      this.searchByCafeId();
    if(this.searchBy == "name")
      this.searchByCafeName();
    if(this.searchBy == "location")
      this.searchByCafeLocation();

  }

}
