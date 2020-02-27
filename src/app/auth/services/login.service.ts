import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public user: string = '';

  constructor(private router: Router) {}

  public addUser(user: string, password: string): void {
    if (user && password) {
      localStorage.setItem('token', JSON.stringify({ user, password }));
      if (localStorage.getItem('token')) { this.router.navigate(['/main']); }
    } else {
      alert('Please Fill out the form');
    }
  }

  public isUser(): boolean {
    if (localStorage.getItem('token')) {
      const tokenObject: {user: string, password: string} = JSON.parse(localStorage.getItem('token'));
      this.user = tokenObject.user;
    }
    return localStorage.getItem('token') ? true : false;
  }

  public login(): void {
    this.router.navigate(['/login']);
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.user = '';
    if (!localStorage.getItem('token')) { this.router.navigate(['/login']); }
  }
}
