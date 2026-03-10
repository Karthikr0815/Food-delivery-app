import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Restaurant } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private apiUrl = 'http://localhost:3000/restaurants';

  constructor(private http: HttpClient) {}

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.apiUrl).pipe(
      catchError(this.handleError<Restaurant[]>('getRestaurants', []))
    );
  }

  getRestaurantById(id: number): Observable<Restaurant | undefined> {
    return this.http.get<Restaurant>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError<Restaurant>(`getRestaurantById id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}