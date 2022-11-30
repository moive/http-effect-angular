import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'https://reqres.in/api';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(`${this.url}/users`).pipe(map((res: any) => res.data));
  }

  getUserById(id: string) {
    return this.http
      .get(`${this.url}/user/${id}`)
      .pipe(map((resp: any) => resp.data));
  }
}
