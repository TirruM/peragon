import { BuyerSideNavbarComponent } from './buyer/buyer-side-navbar/buyer-side-navbar.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './shared/signin/signin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './shared/signup/signup.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'search', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
