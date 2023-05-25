import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedditService {
  private readonly BASE_URL = 'https://www.reddit.com/r/aww/.json';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get<any>(this.BASE_URL).pipe(
      tap((response) => {
        console.log('API Response:', response);
      })
    );
  }
}