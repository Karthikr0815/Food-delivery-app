import { Injectable } from '@angular/core';
import { MenuItem } from '../models/models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private cartItems: MenuItem[] = [];
    private cartSubject = new BehaviorSubject<MenuItem[]>([]);

    cart$ = this.cartSubject.asObservable();

    addToCart(item: MenuItem) {
        this.cartItems.push(item);
        this.cartSubject.next([...this.cartItems]);
        console.log('Item added to cart:', item.name);
    }

    getCartItems() {
        return this.cartItems;
    }

    clearCart() {
        this.cartItems = [];
        this.cartSubject.next([]);
    }
}
