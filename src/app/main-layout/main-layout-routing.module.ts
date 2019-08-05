import { NgModule } from '@angular/core';
import { MainLayoutComponent } from './main-layout.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { SigninComponent } from '../shared/signin/signin.component';
import { SignupComponent } from '../shared/signup/signup.component';
import { ForBuyerComponent } from '../for-buyer/for-buyer.component';
import { ForSellerComponent } from '../for-seller/for-seller.component';
import { HowItWorksComponent } from '../how-it-works/how-it-works.component';
import { PricingComponent } from '../pricing/pricing.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'prefix' },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: SigninComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'forBuyer', component: ForBuyerComponent },
      { path: 'forSeller', component: ForSellerComponent },
      { path: 'howitworks', component: HowItWorksComponent },
      { path: 'pricing', component: PricingComponent },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
