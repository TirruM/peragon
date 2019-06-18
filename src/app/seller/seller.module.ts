import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { SellerSidebarComponent } from './seller-sidebar/seller-sidebar.component';
import { SellerProfileComponent } from './seller-profile/seller-profile.component';
import { SellerBidsComponent } from './seller-bids/seller-bids.component';
import { SellerQuotationsComponent } from './seller-quotations/seller-quotations.component';
import { SellerMyproductsComponent } from './seller-myproducts/seller-myproducts.component';
import { SellerAddproductComponent } from './seller-addproduct/seller-addproduct.component';
import { SharedModule } from '../shared/shared.module';
import { SellerCustomersComponent } from './seller-customers/seller-customers.component';
import { SellerHistoryComponent } from './seller-history/seller-history.component';
import { SellerOpportunitiesComponent } from './seller-opportunities/seller-opportunities.component';
import { SellerProspectsComponent } from './seller-prospects/seller-prospects.component';
import { SellerSearchesComponent } from './seller-searches/seller-searches.component';

const sellerRoutes: Routes = [
  // { path: 'seDashboard', component: SellerDashboardComponent, data: { title: 'Dashboard' } },
  { path: 'preformance', component: SellerBidsComponent, data: { title: 'Bids' } },
  { path: 'seMyproducts', component: SellerMyproductsComponent, data: { title: 'Myproducts' } },
  { path: 'seProfile', component: SellerProfileComponent, data: { title: 'Profile' } },
  { path: 'messages', component: SellerQuotationsComponent, data: { title: 'Quotations' } },
  { path: 'addProduct', component: SellerAddproductComponent, data: { title: 'Add Product' } },
  { path: 'customers', component: SellerCustomersComponent, data: { title: 'Add Product' } },
  { path: 'history', component: SellerHistoryComponent, data: { title: 'Add Product' } },
  { path: 'opportunities', component: SellerOpportunitiesComponent, data: { title: 'Add Product' } },
  { path: 'prospects', component: SellerProspectsComponent, data: { title: 'Add Product' } },
  { path: 'searches', component: SellerSearchesComponent, data: { title: 'Add Product' } },
];


@NgModule({
  declarations: [SellerSidebarComponent,
    SellerDashboardComponent, SellerProfileComponent, SellerBidsComponent, SellerQuotationsComponent, SellerMyproductsComponent, SellerAddproductComponent, SellerCustomersComponent, SellerHistoryComponent, SellerOpportunitiesComponent, SellerProspectsComponent, SellerSearchesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(sellerRoutes),
    SharedModule
  ],
  exports: [
    SharedModule,
    SellerDashboardComponent,
  ]
})
export class SellerModule { }
