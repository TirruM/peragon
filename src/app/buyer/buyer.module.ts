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
import { MatDatepickerModule } from '@angular/material';
import { BuyerRfqDetailsComponent } from './buyer-rfq-details/buyer-rfq-details.component';

const appRoutes: Routes = [
  { path: 'profile', component: BuyerProfileComponent, data: { title: 'Profile' } },
  { path: 'buyerDashboard', component: BuyerDashboardComponent, data: { title: 'Dashboard' } },
  { path: 'favourites', component: BuyerFavouritesComponent, data: { title: 'Favourites' } },
  { path: 'notifications', component: BuyerNotificationsComponent, data: { title: 'Notifications' } },
  { path: 'rfqCreate', component: BuyerRfqCreateComponent},
  { path: 'rfq', component: BuyerBidsComponent},
  { path: 'rfqDetails', component: BuyerBidsComponent}
];

@NgModule({
  declarations: [BuyerFavouritesComponent, BuyerProfileComponent, BuyerBidsComponent, BuyerNotificationsComponent, BuyerSideNavbarComponent, BuyerDashboardComponent, BuyerRfqCreateComponent, BuyerRfqDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    MatDatepickerModule,
    RouterModule.forChild(appRoutes)
  ],
  exports: [BuyerSideNavbarComponent]
})
export class BuyerModule { }
