/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { UserService } from './@core/data/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-gem-app',
  template: '<signup-form></signup-form><br/><br/><router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private userService: UserService,private analytics: AnalyticsService,private router: Router) {
    
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
    if(!UserService.loggedIn){
      this.router.navigateByUrl('/auth/login');
    }
  }
}
