import { Routes } from '@angular/router';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderStatusComponent } from './components/order-status/order-status.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'restaurants', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'restaurants', component: RestaurantListComponent },
    { path: 'menu/:id', component: MenuListComponent },
    { path: 'cart', component: CartComponent },
    { path: 'orders', component: OrderStatusComponent, canActivate: [authGuard] },
    { path: 'checkout', component: CheckoutComponent, canActivate: [authGuard] },
    { path: '**', redirectTo: 'restaurants' }
];