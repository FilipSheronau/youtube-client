import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public isUser: BehaviorSubject<boolean> =
    this.islogin() ? new BehaviorSubject(true) : new BehaviorSubject(false);
  public userName: BehaviorSubject<string> =
    this.islogin() ? new BehaviorSubject(
      JSON.parse(localStorage.getItem('token')).user) : new BehaviorSubject('');

  constructor(private router: Router) { }

  public addUser(user: string, password: string): void {
    if (user && password) {
      localStorage.setItem('token', JSON.stringify({ user, password }));
      if (localStorage.getItem('token')) {
        this.isUser.next(true);
        this.userName.next(user);
        this.router.navigate(['/main']);
      }
    } else {
      alert('Please Fill out the form');
    }
  }

  public islogin(): boolean {
    return (localStorage.getItem('token')) ? true : false;
  }

  public login(): void {
    this.router.navigate(['/login']);
  }

  public logout(): void {
    localStorage.removeItem('token');
    if (!localStorage.getItem('token')) {
      this.userName.next('');
      this.isUser.next(false);
      this.router.navigate(['/login']);
    }
  }
}
