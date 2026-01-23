import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Restaurant } from '../../models/models';

@Component({
  selector: 'app-restaurant-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restaurant-list.component.html',
  styleUrl: './restaurant-list.component.css'
})
export class RestaurantListComponent {
  restaurants: Restaurant[] = [
    {
      id: 1,
      name: 'Pizza Palace',
      cuisineType: 'Italian',
      rating: 4.5,
      deliveryTime: '30-40 min',
      imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400',
      menu: [
        { id: 101, name: 'Margherita Pizza', description: 'Classic cheese and tomato', price: 299, category: 'Main', imageUrl: '' },
        { id: 102, name: 'Pepperoni Pizza', description: 'Spicy pepperoni with mozzarella', price: 449, category: 'Main', imageUrl: '' },
        { id: 103, name: 'Garlic Bread', description: 'Toasted bread with garlic butter', price: 149, category: 'Starter', imageUrl: '' },
        { id: 104, name: 'Paneer Tikka Pizza', description: 'Indian style paneer pizza', price: 399, category: 'Main', imageUrl: '' }
      ]
    },
    {
      id: 2,
      name: 'Burger King',
      cuisineType: 'Fast Food',
      rating: 4.2,
      deliveryTime: '20-30 min',
      imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400',
      menu: [
        { id: 201, name: 'Whopper', description: 'Flame-grilled beef patty', price: 199, category: 'Main', imageUrl: '' },
        { id: 202, name: 'Chicken Royale', description: 'Crispy chicken fillet', price: 179, category: 'Main', imageUrl: '' },
        { id: 203, name: 'French Fries', description: 'Classic salted fries', price: 99, category: 'Side', imageUrl: '' },
        { id: 204, name: 'Veggie Burger', description: 'Delicious plant-based patty', price: 149, category: 'Main', imageUrl: '' }
      ]
    },
    {
      id: 3,
      name: 'Sushi Zen',
      cuisineType: 'Japanese',
      rating: 4.8,
      deliveryTime: '40-50 min',
      imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400',
      menu: [
        { id: 301, name: 'Salmon Roll', description: 'Fresh salmon and avocado', price: 599, category: 'Main', imageUrl: '' },
        { id: 302, name: 'Miso Soup', description: 'Traditional Japanese soup', price: 199, category: 'Starter', imageUrl: '' },
        { id: 303, name: 'Tempura Prawns', description: 'Crispy fried prawns', price: 499, category: 'Starter', imageUrl: '' },
        { id: 304, name: 'Green Tea Ice Cream', description: 'Refreshing matcha dessert', price: 249, category: 'Dessert', imageUrl: '' }
      ]
    },
    {
      id: 4,
      name: 'Taco Town',
      cuisineType: 'Mexican',
      rating: 4.4,
      deliveryTime: '25-35 min',
      imageUrl: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400',
      menu: [
        { id: 401, name: 'Beef Tacos', description: 'Three soft shell beef tacos', price: 349, category: 'Main', imageUrl: '' },
        { id: 402, name: 'Nachos', description: 'Cheesy nachos with jalapenos', price: 249, category: 'Starter', imageUrl: '' },
        { id: 403, name: 'Chicken Quesadilla', description: 'Grilled tortilla with cheese and chicken', price: 399, category: 'Main', imageUrl: '' },
        { id: 404, name: 'Churros', description: 'Sweet fried dough with cinnamon', price: 199, category: 'Dessert', imageUrl: '' }
      ]
    }
  ];

  constructor(private router: Router) { }

  selectRestaurant(restaurant: Restaurant) {
    this.router.navigate(['/menu', restaurant.id]);
  }
}
