import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User | undefined;
  USER_KEY = '[user]';

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private router: Router) {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch (error) {
      this.user = undefined;
    }
  }

  login(): void {
    this.user = {
      email: 'john.doe@gmail.com',
      firstName: 'John',
      _id: '5fa64b162183ce1728ff371d',
    };
    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
    // this.router.navigate(['/home']);
  }

  logout(): void {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
    this.router.navigate(['/']);
  }
}
