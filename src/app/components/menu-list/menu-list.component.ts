import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Restaurant, MenuItem } from '../../models/models';
import { CartService } from '../../services/cart.service';
import { RestaurantService } from '../../services/restaurant.service';
import { FilterPipe } from '../../pipes/filter.pipe';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatDividerModule, MatSnackBarModule, FilterPipe],
  template: `
    <div style="max-width: 800px; margin: 2rem auto; padding: 0 1rem;">
      <h2 style="margin-bottom: 1.5rem; font-family: Roboto, sans-serif;">Menu Items</h2>
      
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <mat-card *ngFor="let item of menuItems" style="display: flex; flex-direction: row; justify-content: space-between; padding: 1rem;">
          <div>
            <mat-card-title style="font-size: 1.2rem;">{{ item.name }}</mat-card-title>
            <mat-card-subtitle>{{ item.description }}</mat-card-subtitle>
            <p style="font-weight: bold; margin-top: 0.5rem; color: #e91e63;">₹{{ item.price }}</p>
          </div>
          <div style="display: flex; align-items: center;">
            <button mat-raised-button color="primary" (click)="addToCart(item)">Add to Cart</button>
          </div>
        </mat-card>

        <div *ngIf="menuItems.length === 0" style="text-align: center; padding: 2rem; color: #666;">
          <p>Loading menu or no items found.</p>
        </div>
      </div>
    </div>
  `
})
export class MenuListComponent implements OnInit {
  restaurantId: number | null = null;
  menuItems: MenuItem[] = [];

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private restaurantService: RestaurantService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.restaurantId = +id;
        this.restaurantService.getRestaurantById(this.restaurantId).subscribe(res => {
          if (res) this.menuItems = res.menu;
        });
      }
    });
  }

  addToCart(item: MenuItem) {
    this.cartService.addToCart(item);
    this.snackBar.open(`${item.name} added to cart!`, 'Close', { duration: 2000 });
  }
}