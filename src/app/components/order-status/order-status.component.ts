import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/models';

import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-order-status',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatChipsModule, MatIconModule],
  template: `
    <div style="max-width: 800px; margin: 2rem auto; padding: 0 1rem;">
      <h2 style="margin-bottom: 1.5rem; font-family: Roboto, sans-serif;">Order History</h2>
      
      <div *ngIf="orders.length > 0; else noOrders" style="display: flex; flex-direction: column; gap: 1rem;">
        <mat-card *ngFor="let order of orders" style="padding: 1rem;">
          <mat-card-header style="display: flex; justify-content: space-between; width: 100%;">
            <mat-card-title>Order #{{ order.id }}</mat-card-title>
            <mat-chip-set>
              <mat-chip [color]="order.status === 'Delivered' ? 'primary' : 'accent'" highlighted>
                {{ order.status }}
              </mat-chip>
            </mat-chip-set>
          </mat-card-header>
          
          <mat-card-content style="margin-top: 1rem;">
            <p><mat-icon inline>receipt</mat-icon> <strong>Items:</strong> {{ order.items.length }}</p>
            <p><mat-icon inline>payments</mat-icon> <strong>Total:</strong> ₹{{ order.totalAmount }}</p>
            <p><mat-icon inline>calendar_today</mat-icon> <strong>Date:</strong> {{ order.orderDate | date:'medium' }}</p>
          </mat-card-content>
        </mat-card>
      </div>

      <ng-template #noOrders>
        <mat-card style="text-align: center; padding: 3rem;">
          <mat-icon style="font-size: 48px; height: 48px; width: 48px; color: #ccc;">receipt_long</mat-icon>
          <p style="color: #666; margin-top: 1rem;">You haven't placed any orders yet.</p>
        </mat-card>
      </ng-template>
    </div>
  `
})
export class OrderStatusComponent implements OnInit {
  orders: Order[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.orders$.subscribe(orders => {
      this.orders = orders;
    });
  }
}