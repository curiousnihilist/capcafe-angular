import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from '../model/transaction.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Ticket } from '../model/ticket.model';
import { Order } from '../model/order.model';
import { Review } from '../model/review.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private ADD_TRANSACTION_URI = "http://localhost:8883/addTransaction";
  private RAISE_TICKET = "http://localhost:8883/userRaiseTicket";
  private SOLVE_TICKET = "http://localhost:8883/sendResponse"
  private ADD_ORDER = "http://localhost:8882/order/addNewOrder";
  private GET_ALL_QUERIES = "http://localhost:8883/getAllQueries";
  private GET_ALL_ORDERS = "http://localhost:8880/cafe/getAllOrders";
  private GET_CAFE_REVIEWS = "http://localhost:8882/order/get-review-by-cafeid";
  private ADD_MONEY = "http://localhost:8882/order/add-money"


  constructor(private route:Router, private http:HttpClient) { }

  addTransaction(transaction:Transaction):Observable<Transaction>{
    console.log(transaction);
    return this.http.post<Transaction>(this.ADD_TRANSACTION_URI,transaction);
  }

  raiseTicket(ticket:Ticket):Observable<Ticket>{
    return this.http.post<Ticket>(this.RAISE_TICKET,ticket);
  }

  saveOrder(order:Order):Observable<Order>{
    return this.http.post<Order>(this.ADD_ORDER,order);
  }

  getAllQueries():Observable<Ticket[]>{
    return this.http.get<Ticket[]>(this.GET_ALL_QUERIES)
  }

  solveTicket(ticket:Ticket):Observable<Ticket>{
    return this.http.post<Ticket>(this.SOLVE_TICKET,ticket);
  }

  getAllOrders(empId:number):Observable<Order[]>{
    return this.http.get<Order[]>(this.GET_ALL_ORDERS+"/"+empId);
  }

  getCafeReview(cafeId:number):Observable<Review[]>{
    return this.http.get<Review[]>(this.GET_CAFE_REVIEWS+"/"+cafeId);
  }

  addMoney(empid:number, wallet:number):Observable<number>{
    return this.http.get<number>(this.ADD_MONEY+"?money="+wallet+"&id="+empid,);
  }
}
