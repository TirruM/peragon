import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../shared/footer/footer.component';
import { HomeComponent } from './../home/home.component';
import { MainLayoutComponent } from './main-layout.component';
import { SigninComponent } from '../shared/signin/signin.component';
import { SignupComponent } from '../shared/signup/signup.component';
import { ForBuyerComponent } from '../for-buyer/for-buyer.component';
import { ForSellerComponent } from '../for-seller/for-seller.component';
import { HowItWorksComponent } from '../how-it-works/how-it-works.component';
import { PricingComponent } from '../pricing/pricing.component';
import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    FooterComponent,
    HomeComponent,
    MainLayoutComponent,
    SigninComponent,
    SignupComponent,
    ForBuyerComponent,
    ForSellerComponent,
    HowItWorksComponent,
    PricingComponent
  ],
  imports: [
    CommonModule,
    MainLayoutRoutingModule,
    SlickCarouselModule,
    SharedModule
  ],
  exports: [
    FooterComponent,
    HomeComponent
  ]
})
export class MainLayoutModule { }
