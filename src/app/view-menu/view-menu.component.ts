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

  private cafe:Cafe;
  private menu:FoodItem[];

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.data.subscribe(cafe => {this.cafe = cafe});
    this.menu = this.cafe.menu;
  }

  



}
