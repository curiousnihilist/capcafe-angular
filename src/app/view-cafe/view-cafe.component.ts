import { Component, OnInit } from '@angular/core';
import { Cafe } from '../model/cafe.model';

@Component({
  selector: 'app-view-cafe',
  templateUrl: './view-cafe.component.html',
  styleUrls: ['./view-cafe.component.css']
})
export class ViewCafeComponent implements OnInit {

  private searchBy:string;
  private cafeList:Cafe[]=[]; 

  constructor() { }

  ngOnInit() {
  }

}
