import { Component, OnInit } from '@angular/core';
import { UserService } from '../@core/data/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {

   }

  ngOnInit() {
    UserService.loggedIn=false;
    UserService.user={name:'',picture:''};
    this.userService.saveUserData();
    this.router.navigateByUrl('/auth/login');
  }

}
