import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url = 'https://jsonplaceholder.typicode.com/comments';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://jsonplaceholder.typicode.com/comments');
  }
}
