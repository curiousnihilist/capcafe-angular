import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../service/review.service';
import { Employee } from '../model/employee.model';
import { Cafe } from '../model/cafe.model';
import { Review } from '../model/review.model';

@Component({
  selector: 'app-admin-reviews',
  templateUrl: './admin-reviews.component.html',
  styleUrls: ['./admin-reviews.component.css']
})
export class AdminReviewsComponent implements OnInit {
  review: any
  rating: number;
  cafe: Cafe;
  employee: Employee;
  search1:any;
  search2:any;
  search3:any;

  constructor(private reviewService:ReviewService) {
    this.review = new Review();
    this.cafe = new Cafe();
    this.employee = new Employee();
   }

  ngOnInit() {
    this.reviewService.getAllReviews().subscribe(data => {this.review=data})
    this.review.employee = this.employee.empId
    this.review.cafe = this.cafe.cafeId;
  }

}
