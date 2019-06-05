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
import { BuyerDashboardComponent } from './buyer-dashboard/buyer-dashboard.component';
import { BuyerRfqCreateComponent } from './buyer-rfq-create/buyer-rfq-create.component';

const appRoutes: Routes = [
  { path: 'profile', component: BuyerProfileComponent, data: { title: 'Profile' } },
  { path: 'buyerDashboard', component: BuyerDashboardComponent, data: { title: 'Dashboard' } },
  { path: 'favourites', component: BuyerFavouritesComponent, data: { title: 'Favourites' } },
  { path: 'notifications', component: BuyerNotificationsComponent, data: { title: 'Notifications' } },
  { path: 'rfqCreate', component: BuyerRfqCreateComponent}
];

@NgModule({
  declarations: [BuyerFavouritesComponent, BuyerProfileComponent, BuyerBidsComponent, BuyerNotificationsComponent, BuyerSideNavbarComponent, BuyerDashboardComponent, BuyerRfqCreateComponent],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    RouterModule.forChild(appRoutes)
  ],
  exports: [BuyerSideNavbarComponent]
})
export class BuyerModule { }
