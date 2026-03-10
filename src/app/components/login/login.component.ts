import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  template: `
    <div style="display: flex; justify-content: center; padding: 3rem;">
      <mat-card style="width: 400px; padding: 2rem;">
        <mat-card-title>Login</mat-card-title>
        <form #loginForm="ngForm" (ngSubmit)="onSubmit(loginForm.value)">
          <mat-form-field appearance="outline" style="width: 100%; margin-top: 1rem;">
            <mat-label>Email</mat-label>
            <input matInput type="email" name="email" ngModel required email>
          </mat-form-field>
          <mat-form-field appearance="outline" style="width: 100%;">
            <mat-label>Password</mat-label>
            <input matInput type="password" name="password" ngModel required minlength="6">
          </mat-form-field>
          <button mat-raised-button color="primary" type="submit" [disabled]="!loginForm.valid" style="width: 100%;">Sign In</button>
        </form>
      </mat-card>
    </div>
  `
})
export class LoginComponent {
  constructor(private router: Router) {}

  onSubmit(formValue: any) {
    localStorage.setItem('isLoggedIn', 'true');
    this.router.navigate(['/restaurants']);
  }
}