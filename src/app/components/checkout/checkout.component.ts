import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';
import { OrderStatus } from '../../models/models';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  checkoutForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {
    this.checkoutForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      const cartItems = this.cartService.getCartItems();
      const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);

      const newOrder = {
        id: Math.floor(Math.random() * 100000),
        userId: 1, // Mock user ID
        restaurantId: 1, // Mock restaurant ID
        items: [...cartItems],
        totalAmount: totalAmount,
        status: OrderStatus.PENDING,
        orderDate: new Date()
      };

      this.orderService.addOrder(newOrder);
      this.cartService.clearCart();
      alert('Order placed successfully!');
      this.router.navigate(['/orders']);
    }
  }
}
