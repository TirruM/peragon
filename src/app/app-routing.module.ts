import { HomeComponent } from './home/home.component';
import { SigninComponent } from './shared/signin/signin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './shared/signup/signup.component';
import { SearchComponent } from './search/search.component';
import { ForBuyerComponent } from './for-buyer/for-buyer.component';
import { ForSellerComponent } from './for-seller/for-seller.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'search', component: SearchComponent },
  { path: 'forBuyer', component: ForBuyerComponent },
  { path: 'forSeller', component: ForSellerComponent },
  { path: 'howitworks', component: HowItWorksComponent },
  { path: 'pricing', component: PricingComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',

  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
