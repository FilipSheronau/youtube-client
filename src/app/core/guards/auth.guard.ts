import { Injectable, Inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router }
  from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  public isLogin: boolean;
  constructor(private loginService: LoginService, private router: Router) {}
  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    this.loginService.isUser.subscribe((sub) => {
      this.isLogin = sub;
    });
    if (!this.isLogin) {
      this.router.navigate(['/login']);
    }
    return this.isLogin;
  }
  public canActivateChild (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.canActivate(next, state)) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
