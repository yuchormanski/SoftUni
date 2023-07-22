import { Injectable, OnDestroy } from '@angular/core';
import { User } from '../types/user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  //създаваме събджект
  private user$$ = new BehaviorSubject<User | undefined>(undefined);

  //user$ е Observable
  user$ = this.user$$.asObservable();

  user: User | undefined;
  USER_KEY = '[user]';

  get isLogged(): boolean {
    return !!this.user;
  }

  subscription: Subscription;

  constructor(private router: Router, private http: HttpClient) {
    this.subscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  login(email: string, password: string) {
    return this.http
      .post<User>('/api/login', { email, password }) // изпраща данни към базата
      .pipe(tap((user) => this.user$$.next(user))); // регистрира токен
  }

  register(
    username: string,
    email: string,
    password: string,
    rePassword: string,
    tel: string
  ) {
    return this.http
      .post<User>('/api/register', {
        username,
        email,
        password,
        rePassword,
        tel,
      })

      .pipe(tap((user) => this.user$$.next(user))); // добавя се за да се логне потребителя атоматично
  }

  logout() {
    return this.http
      .post<User>('/api/logout', {})
      .pipe(tap((user) => this.user$$.next(undefined)));
  }

  //за да не се изтрива потребителя при рефреш
  getProfile() {
    return this.http
      .get<User>('/api/users/profile')
      .pipe(tap((user) => this.user$$.next(user)));
  }

  updateProfile(username: string, email: string, tel?: string) {
    return this.http
      .put<User>('/api/users/profile', { username, email, tel })
      .pipe(tap((user) => this.user$$.next(user)));
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe(); //изтриване на кукито
  }
}
