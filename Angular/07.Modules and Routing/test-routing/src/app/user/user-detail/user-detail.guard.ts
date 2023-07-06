import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    // мястото, където се извършва автентикация
    return this.checkIsAuth(state.url) || this.router.createUrlTree(['**']); //ако се извършва с модул в интернет; ако се добави ИЛИ , може да се редирецтне до конкретна страница, в случая до Error Page
  }

  checkIsAuth(url: string): boolean {
    return true;
  }
}
