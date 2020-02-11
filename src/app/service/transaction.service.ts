import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from '../model/transaction.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Ticket } from '../model/ticket.model';
import { Order } from '../model/order.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private ADD_TRANSACTION_URI = "http://localhost:8883/addTransaction";
  private RAISE_TICKET = "http://localhost:8883/userRaiseTicket";
  private SOLVE_TICKET = "http://localhost:8883/sendResponse"
  private ADD_ORDER = "http://localhost:8882/order/addNewOrder";
  private GET_ALL_QUERIES = "http://localhost:8883/getAllQueries";

  constructor(private route:Router, private http:HttpClient) { }

  addTransaction(transaction:Transaction):Observable<Transaction>{
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
}
