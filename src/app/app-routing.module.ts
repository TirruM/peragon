import { SigninComponent } from './shared/signin/signin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './shared/signup/signup.component';

const routes: Routes = [
  { path: 'login', component: SigninComponent },
  { path: 'signup', component: SignupComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
