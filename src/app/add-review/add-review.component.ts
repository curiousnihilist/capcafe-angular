import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Review } from '../model/review.model';
import { DataService } from '../service/data.service';
import { Cafe } from '../model/cafe.model';
import { ReviewService } from '../service/review.service';
import { LoginServiceService } from '../service/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  employeereview_form : FormGroup;
  review:Review;
  rating:number;
  cafe:Cafe;

  constructor(private dataService:DataService,
              private reviewService:ReviewService, 
              private loginService:LoginServiceService,
              private route:Router) {
    this.review = new Review();
    this.cafe = new Cafe();
   }

  ngOnInit() {
    this.dataService.data.subscribe(data => {this.cafe = data;
                                            console.log(this.cafe);
                                            });
    this.employeereview_form = new FormGroup
    ({
        empreview : new FormControl(null,[Validators.required,Validators.pattern('^[a-zA-Z \-\']+'),Validators.maxLength(200)]),
        rating : new FormControl()

    })
  }

  reviewAdd(){
     alert("Thanks for the Review!!");
     this.review.review = this.employeereview_form.value.empreview;
     this.review.rating = this.employeereview_form.value.rating;
     this.review.employee = this.loginService.getEmpSession();
     this.review.cafe = this.cafe;
     
     console.log(this.review)
     this.reviewService.addreview(this.review).subscribe(data => {this.route.navigate(['/cust-home'])})
     
  }

}
