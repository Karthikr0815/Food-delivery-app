import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { MenuItem } from '../../models/models';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatListModule, MatButtonModule, MatIconModule, MatDividerModule],
  template: `
    <div style="max-width: 600px; margin: 2rem auto; padding: 0 1rem;">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Your Shopping Cart</mat-card-title>
        </mat-card-header>
        <mat-card-content style="padding-top: 1rem;">
          
          <mat-list *ngIf="cartItems.length > 0; else emptyCart">
            <ng-container *ngFor="let item of cartItems; let last = last">
              <mat-list-item>
                <span matListItemTitle>{{ item.name }}</span>
                <span matListItemLine>₹{{ item.price }}</span>
              </mat-list-item>
              <mat-divider *ngIf="!last"></mat-divider>
            </ng-container>
            
            <div style="text-align: right; margin-top: 1.5rem;">
              <h3 style="font-size: 1.5rem; margin: 0;">Total: ₹{{ total }}</h3>
            </div>
          </mat-list>

          <ng-template #emptyCart>
            <div style="text-align: center; padding: 2rem;">
              <mat-icon style="font-size: 48px; height: 48px; width: 48px; color: #ccc;">remove_shopping_cart</mat-icon>
              <p style="color: #666; margin-top: 1rem;">Your cart is empty.</p>
              <button mat-button color="primary" routerLink="/restaurants">Browse Restaurants</button>
            </div>
          </ng-template>

        </mat-card-content>
        <mat-card-actions align="end" *ngIf="cartItems.length > 0">
          <button mat-button color="warn" (click)="clearCart()">Clear Cart</button>
          <button mat-raised-button color="primary" routerLink="/checkout">Proceed to Checkout</button>
        </mat-card-actions>
      </mat-card>
    </div>
  `
})
export class CartComponent implements OnInit {
  cartItems: MenuItem[] = [];
  total: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
      this.calculateTotal();
    });
  }

  calculateTotal() {
    this.total = this.cartItems.reduce((acc, item) => acc + item.price, 0);
  }

  clearCart() {
    this.cartService.clearCart();
  }
}