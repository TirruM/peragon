import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { SellerSidebarComponent } from './seller-sidebar/seller-sidebar.component';
import { SellerProfileComponent } from './seller-profile/seller-profile.component';
import { SellerBidsComponent } from './seller-bids/seller-bids.component';
import { SellerQuotationsComponent } from './seller-quotations/seller-quotations.component';
import { SellerMyproductsComponent } from './seller-myproducts/seller-myproducts.component';

const sellerRoutes: Routes = [
  { path: 'seDashboard', component: SellerDashboardComponent, data: { title: 'Dashboard' } },
  { path: 'seBids', component: SellerBidsComponent, data: { title: 'Bids' } },
  { path: 'seMyproducts', component: SellerMyproductsComponent, data: { title: 'Myproducts' } },
  { path: 'seProfile', component: SellerProfileComponent, data: { title: 'Profile' } },
  { path: 'seQuotations', component: SellerQuotationsComponent, data: { title: 'Quotations' } }
];


@NgModule({
  declarations: [SellerDashboardComponent, SellerSidebarComponent, SellerProfileComponent, SellerBidsComponent, SellerQuotationsComponent, SellerMyproductsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(sellerRoutes)
  ]
})
export class SellerModule { }
