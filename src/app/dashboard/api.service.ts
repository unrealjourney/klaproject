import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


// Get response URL
// const API_URL = 'https://reqres.in';
const API_URL = 'http://localhost:8080'
@Injectable({
    providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public get(url: string): Observable<any> {
    return this.http.get(API_URL + '/api/' + url).pipe(map(res => res));
  }
}
// /api/users