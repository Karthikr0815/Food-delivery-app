import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/models';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:3000/orders';
  private ordersSubject = new BehaviorSubject<Order[]>([]);
  
  orders$ = this.ordersSubject.asObservable();

  constructor(private http: HttpClient) {
    this.fetchOrders();
  }

  private fetchOrders() {
    this.http.get<Order[]>(this.apiUrl).subscribe(orders => {
      // Show the newest orders at the top
      this.ordersSubject.next(orders.reverse());
    });
  }

  addOrder(order: Order) {
    this.http.post<Order>(this.apiUrl, order).pipe(
      tap((newOrder) => {
        const currentOrders = this.ordersSubject.value;
        this.ordersSubject.next([newOrder, ...currentOrders]);
      }),
      catchError(this.handleError<Order>('addOrder'))
    ).subscribe();
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}