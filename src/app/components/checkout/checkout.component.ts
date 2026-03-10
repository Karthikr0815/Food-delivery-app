import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';
import { OrderStatus } from '../../models/models';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSnackBarModule],
  template: `
    <div style="max-width: 600px; margin: 2rem auto;">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Checkout</mat-card-title>
        </mat-card-header>
        <mat-card-content style="padding-top: 1.5rem;">
          <form [formGroup]="checkoutForm" (ngSubmit)="onSubmit()">
            <mat-form-field appearance="outline" style="width: 100%;">
              <mat-label>Name</mat-label>
              <input matInput formControlName="name" placeholder="Enter your name">
            </mat-form-field>

            <mat-form-field appearance="outline" style="width: 100%;">
              <mat-label>Delivery Address</mat-label>
              <textarea matInput formControlName="address" rows="3"></textarea>
            </mat-form-field>

            <mat-form-field appearance="outline" style="width: 100%;">
              <mat-label>Phone Number</mat-label>
              <input matInput formControlName="phone" placeholder="10-digit number">
            </mat-form-field>

            <button mat-raised-button color="primary" type="submit" [disabled]="checkoutForm.invalid" style="width: 100%; padding: 1rem;">
              Place Order (₹{{totalAmount}})
            </button>
          </form>
        </mat-card-content>
      </mat-card>
    </div>
  `
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup;
  totalAmount: number = 0;

  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.checkoutForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }

  ngOnInit() {
    this.totalAmount = this.cartService.getCartItems().reduce((acc, item) => acc + item.price, 0);
  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      const cartItems = this.cartService.getCartItems();
      const newOrder = {
        id: Math.floor(Math.random() * 100000),
        userId: 1,
        restaurantId: 1,
        items: [...cartItems],
        totalAmount: this.totalAmount,
        status: OrderStatus.PENDING,
        orderDate: new Date()
      };
      
      this.orderService.addOrder(newOrder);
      this.cartService.clearCart();
      
      this.snackBar.open('Order placed successfully!', 'Close', { duration: 3000 });
      this.router.navigate(['/orders']);
    }
  }
}