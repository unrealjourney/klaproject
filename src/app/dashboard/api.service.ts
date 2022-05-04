import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Get response URL
// const API_URL = 'https://reqres.in';
const API_URL = 'http://localhost:8080';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public get(url: string): Observable<any> {
    return this.http.get(API_URL + url).pipe(map((res) => res));
  }

  /** POST: add a new hero to the database */
  // addRequest(request: Request): Observable<Request> {
  //   return this.http
  //     .post<Request>(this.requestsUrl, request, httpOptions)
  //     .pipe(catchError(this.handleError('addRequest', request)));
  // }
}
// /api/users
