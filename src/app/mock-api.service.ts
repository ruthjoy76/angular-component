import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class MockApiService {
  private apiUrl = 'https://dummyjson.com';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`)
      .pipe(
        catchError(error => {
          console.error('Error fetching users:', error);
          return throwError('Error fetching users. Please try again later.');
        })
      );
  }
}
