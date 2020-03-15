import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public login: string;
  public password: string;

  constructor(private loginService: LoginService) { }

  public ngOnInit(): void {
  }

  public onSubmit(): void {
    this.loginService.addUser(this.login, this.password);
  }

}
