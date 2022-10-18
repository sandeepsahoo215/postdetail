import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})



export class ApiService {
   url = " https://gorest.co.in/public/v2/posts?page=1";

   detail = "https://gorest.co.in/public/v2/comments?post_id"

  constructor( private http: HttpClient) { }

  getAllPosts(): Observable<any> {
    return this.http.get(this.url);
  }

  getDetails(): Observable<any> {
    return this.http.get( this.detail)
  }
}
