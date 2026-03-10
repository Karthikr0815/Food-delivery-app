import { HttpInterceptorFn } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const snackBar = inject(MatSnackBar);
  
  return next(req).pipe(
    catchError((error) => {
      snackBar.open('Network error occurred. Please try again.', 'Close', { duration: 3000 });
      return throwError(() => error);
    })
  );
};