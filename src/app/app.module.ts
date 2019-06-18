import { BuyerModule } from './buyer/buyer.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './shared/signin/signin.component';
import { SignupComponent } from './shared/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';
import { SellerModule } from './seller/seller.module';
import { ForBuyerComponent } from './for-buyer/for-buyer.component';
import { ForManufacturersComponent } from './for-manufacturers/for-manufacturers.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { PricingComponent } from './pricing/pricing.component';
import { SellerDashboardModule } from './sellerDashboard/seller-dashboard/seller-dashboard.module';
import { SellerDashboardComponent } from './seller/seller-dashboard/seller-dashboard.component';
import { RfqComponent } from './sellerDashboard/rfq/rfq.component';
import { BookMarksComponent } from './sellerDashboard/book-marks/book-marks.component';
import { ShowRoomsComponent } from './sellerDashboard/show-rooms/show-rooms.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    SearchComponent,
    ForBuyerComponent,
    ForManufacturersComponent, HowItWorksComponent, PricingComponent, SellerDashboardComponent, RfqComponent, BookMarksComponent, ShowRoomsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    BuyerModule,
    SellerDashboardModule
  ],
  exports: [BuyerModule,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
