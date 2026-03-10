import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, MatToolbarModule, MatButtonModule, MatIconModule, MatBadgeModule, CommonModule],
  template: `
    <mat-toolbar color="primary">
      <span routerLink="/restaurants" style="cursor: pointer; font-weight: bold;">🍔 FoodieApp</span>
      <span style="flex: 1 1 auto;"></span>
      
      <button mat-button routerLink="/restaurants">Restaurants</button>
      <button mat-button routerLink="/orders">My Orders</button>
      
      <button mat-icon-button routerLink="/cart">
        <mat-icon [matBadge]="(cartItemCount$ | async)" matBadgeColor="warn" [matBadgeHidden]="(cartItemCount$ | async) === 0">shopping_cart</mat-icon>
      </button>
      
      <button *ngIf="!isLoggedIn" mat-button routerLink="/login">Login</button>
      
      <button *ngIf="isLoggedIn" mat-button (click)="logout()">Logout</button>
    </mat-toolbar>
  `
})
export class NavbarComponent {
  cartItemCount$: Observable<number>;

  constructor(private cartService: CartService, private router: Router) {
    this.cartItemCount$ = this.cartService.cart$.pipe(
      map(items => items.length)
    );
  }

  // Dynamically checks the localStorage for the login state
  get isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  // Clears the session and sends the user back to the login page
  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }
}