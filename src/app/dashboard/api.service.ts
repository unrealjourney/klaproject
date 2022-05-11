import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User } from './user.model';

// Get response URL
// const API_URL = 'https://reqres.in';
// const API_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // constructor(private http: HttpClient) {}

  // public get(url: string): Observable<any> {
  //   return this.http.get(API_URL + url).pipe(map((res) => res));
  // }


  // Json server
  endPoint = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // getFacilitys(): Observable<facilityRequest> {
  //   return this.httpClient
  //     .get<facilityRequest>(this.endPoint + '/users')
  //     .pipe(retry(1), catchError(this.httpError));
  // }

  // getFacility(refid): Observable<facilityRequest> {
  //   return this.httpClient
  //     .get<facilityRequest>(this.endPoint + '/users/' + refid)
  //     .pipe(retry(1), catchError(this.httpError));
  // }

  // trying post
  addUser(user: User): Observable<User> {
    return this.httpClient.post<User>(
      this.endPoint, user, this.httpHeader);
  }

  getFacilitys() {
    return this.httpClient
      .get<User[]>(this.endPoint + '/users')
      .pipe(catchError(this.httpError));
  }
  
  getFacility(refid): Observable<User> {
    return this.httpClient
      .get<User>(this.endPoint + '/users/' + refid)
      .pipe(retry(1), catchError(this.httpError));
  }

  // create(employee): Observable<facilityRequest> {
  //   return this.httpClient
  //     .post<facilityRequest>(
  //       this.endPoint + '/users',
  //       JSON.stringify(employee),
  //       this.httpHeader
  //     )
  //     .pipe(retry(1), catchError(this.httpError));
  // }

  // update(id, data): Observable<facilityRequest> {
  //   return this.httpClient
  //     .put<facilityRequest>(
  //       this.endPoint + '/users/' + id,
  //       JSON.stringify(data),
  //       this.httpHeader
  //     )
  //     .pipe(retry(1), catchError(this.httpError));
  // }

  // delete(id) {
  //   return this.httpClient
  //     .delete<facilityRequest>(this.endPoint + '/users/' + id, this.httpHeader)
  //     .pipe(retry(1), catchError(this.httpError));
  // }

  httpError(error) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }
}
// /api/users
