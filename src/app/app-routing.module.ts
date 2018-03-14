import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { PostsComponent } from './posts/posts.component';


const routes: Routes = [
  { path: 'user/signup',component:SignupComponent},
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
  { path: 'auth/login',component:LoginComponent},
  { path: 'auth/logout',component:LogoutComponent},
  { path: 'user/posts',component:PostsComponent},
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
