import { PricingComponent } from './../../pricing/pricing.component';
import { HowItWorksComponent } from './../../how-it-works/how-it-works.component';
import { ForSellerComponent } from './../../for-seller/for-seller.component';
import { ForBuyerComponent } from './../../for-buyer/for-buyer.component';
import { SearchComponent } from './../../seller-layout/search/search.component';
import { SignupComponent } from './../../shared/signup/signup.component';
import { SigninComponent } from './../../shared/signin/signin.component';
import { FooterComponent } from './../../shared/footer/footer.component';
import { HeaderComponent } from './../../shared/header/header.component';
import { HomeComponent } from './../../home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    // HeaderComponent,
    FooterComponent,
    HomeComponent,
    MainComponent,
    SigninComponent,
    SignupComponent,
    ForBuyerComponent,
    ForSellerComponent,
    HowItWorksComponent,
    PricingComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SlickCarouselModule,
    SharedModule
  ], exports: [
    // HeaderComponent,
    FooterComponent,
    HomeComponent]
})
export class MainModule { }
