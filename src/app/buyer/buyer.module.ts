import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerFavouritesComponent } from './buyer-favourites/buyer-favourites.component';
import { BuyerProfileComponent } from './buyer-profile/buyer-profile.component';
import { BuyerBidsComponent } from './buyer-bids/buyer-bids.component';
import { BuyerNotificationsComponent } from './buyer-notifications/buyer-notifications.component';
import { BuyerSideNavbarComponent } from './buyer-side-navbar/buyer-side-navbar.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const appRoutes: Routes = [
  { path: 'profile', component: BuyerProfileComponent, data: { title: 'Buyer Profile' } },
  { path: 'buyerdashboard', component: BuyerSideNavbarComponent, data: { title: 'Buyer Profile' } },
  { path: 'favourites', component: BuyerFavouritesComponent, data: { title: 'Favourites' } },
  { path: 'notifications', component: BuyerNotificationsComponent, data: { title: 'Notifications' } }
];

@NgModule({
  declarations: [BuyerFavouritesComponent, BuyerProfileComponent, BuyerBidsComponent, BuyerNotificationsComponent, BuyerSideNavbarComponent],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    RouterModule.forChild(appRoutes)
  ],
  exports: [BuyerSideNavbarComponent]
})
export class BuyerModule { }
