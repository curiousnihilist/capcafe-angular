import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from '../model/review.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ReviewService {

    private ADD_REVIEW_URI = "http://localhost:8882/order/addReview";

    constructor(private http:HttpClient){}

    addreview(review:Review):Observable<Review>{
        return this.http.post<Review>(this.ADD_REVIEW_URI,review);
    }

}
