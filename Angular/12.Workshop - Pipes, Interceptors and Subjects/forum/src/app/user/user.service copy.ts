import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  //създаваме събджект
  private user$$ = new BehaviorSubject<User | undefined>(undefined);

  //user$ е Observable
  user$ = this.user$$.asObservable();

  user: User | undefined;
  USER_KEY = '[user]';

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private router: Router, private http: HttpClient) {
    // try {
    //   const lsUser = localStorage.getItem(this.USER_KEY) || '';
    //   this.user = JSON.parse(lsUser);
    // } catch (error) {
    //   this.user = undefined;
    // }
  }

  login(email: string, password: string) {
    // this.user = {
    //   email: 'john.doe@gmail.com',
    //   firstName: 'John',
    //   _id: '5fa64b162183ce1728ff371d',
    //   tel: '67868779878',
    // };
    // localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
    // this.router.navigate(['/home']);

    return this.http
      .post<User>('/api/login', { email, password })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  register(
    username: string,
    email: string,
    password: string,
    rePassword: string,
    tel: string
  ) {
    return this.http.post('/api/register', {
      username,
      email,
      password,
      rePassword,
      tel,
    });
  }

  logout(): void {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
    this.router.navigate(['/']);
  }
}
