import { Component,OnInit } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import { UserService } from '../@core/data/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent  implements OnInit {

  menu = MENU_ITEMS;
  constructor(private userService: UserService, private router: Router){
    

  }
 
  ngOnInit() {
    if(!UserService.loggedIn){
      this.router.navigateByUrl('/auth/login');
    }
  }
  
}
