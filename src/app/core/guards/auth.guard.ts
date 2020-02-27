import { Injectable, Inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router }
  from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(@Inject(LoginService) private login: LoginService, private router: Router) {}
  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.login.isUser()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
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
