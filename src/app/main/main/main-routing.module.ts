import { PricingComponent } from './../../pricing/pricing.component';
import { HowItWorksComponent } from './../../how-it-works/how-it-works.component';
import { ForSellerComponent } from './../../for-seller/for-seller.component';
import { ForBuyerComponent } from './../../for-buyer/for-buyer.component';
import { SearchComponent } from './../../seller-layout/search/search.component';
import { SignupComponent } from './../../shared/signup/signup.component';
import { SigninComponent } from './../../shared/signin/signin.component';
import { MainComponent } from './main.component';
import { HomeComponent } from './../../home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
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
export class MainRoutingModule { }
