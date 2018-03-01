import { Component, OnInit } from '@angular/core';
import { UserService } from '../@core/data/users.service';
import {Router} from '@angular/router';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  errors= [];
  messages= [];
  showMessages= false;
  user= {email: '', password: '', rememberMe: true};


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
      // this.themeService.changeTheme("default");
  }

  login= function(){
      this.userService.login().subscribe((data) => {
        UserService.user = data;
        this.router.navigateByUrl('/page');
      });
  }

}
