import { BuyerModule } from './buyer/buyer.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SliderModule } from 'angular-image-slider';
import { MainModule } from './main/main/main.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    BuyerModule,
    HttpClientModule,
    SlickCarouselModule,
    SliderModule, MainModule
  ],
  exports: [BuyerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
