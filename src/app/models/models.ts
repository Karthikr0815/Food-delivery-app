export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
}

export interface Restaurant {
  id: number;
  name: string;
  cuisineType: string;
  rating: number;
  deliveryTime: string;
  imageUrl: string;
  menu: MenuItem[];
}

export interface User {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
}

export enum OrderStatus {
  PENDING = 'Pending',
  PREPARING = 'Preparing',
  OUT_FOR_DELIVERY = 'Out for Delivery',
  DELIVERED = 'Delivered',
  CANCELLED = 'Cancelled'
}

export interface Order {
  id: number;
  userId: number;
  restaurantId: number;
  items: MenuItem[];
  totalAmount: number;
  status: OrderStatus;
  orderDate: Date;
}
