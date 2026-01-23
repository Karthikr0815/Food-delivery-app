import { Injectable } from '@angular/core';
import { Order, OrderStatus } from '../models/models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    private orders: Order[] = [];
    private ordersSubject = new BehaviorSubject<Order[]>([]);

    orders$ = this.ordersSubject.asObservable();

    addOrder(order: Order) {
        this.orders.unshift(order); // Add new orders to the top
        this.ordersSubject.next([...this.orders]);
    }

    getOrders() {
        return this.orders;
    }
}
