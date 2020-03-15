import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../auth/services/login.service';

@Component({
  selector: 'app-login-block',
  templateUrl: './login-block.component.html',
  styleUrls: ['./login-block.component.scss']
})
export class LoginBlockComponent implements OnInit {

  public isLogin: boolean;
  public userName: string;

  constructor(public loginService: LoginService) { }

  public ngOnInit(): void {
    this.loginService.isUser.subscribe(sub => {
      this.isLogin = sub;
    });
    this.loginService.userName.subscribe(sub => {
      this.userName = sub;
    });
  }
}
