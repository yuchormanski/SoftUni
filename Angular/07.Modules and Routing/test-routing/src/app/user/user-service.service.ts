import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../types/User';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getUsers() {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
