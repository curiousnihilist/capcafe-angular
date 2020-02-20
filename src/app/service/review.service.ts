import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from '../model/review.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ReviewService {

    private ADD_REVIEW_URI = "http://localhost:8882/order/addReview";
    private GET_ALL_REVIEWS = "http://localhost:8882/order/get-all-reviews"
    private GET_REVIEW_BY_CAFE = "http://localhost:8882/order/get-review-by-cafeid";

    constructor(private http:HttpClient){}

    addreview(review:Review):Observable<Review>{
        return this.http.post<Review>(this.ADD_REVIEW_URI,review);
    }

    getAllReviews():Observable<Review[]>{
        return this.http.get<Review[]>(this.GET_ALL_REVIEWS);
    }

    getReviewbyCafe(cafeId:number):Observable<Review>{
        return this.http.get<Review>(this.GET_REVIEW_BY_CAFE+"/"+cafeId);
    }
}
