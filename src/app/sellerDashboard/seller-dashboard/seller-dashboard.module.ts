import { SellerProfileComponentt } from './../seller-profile/seller-profile.component';
import { SideBarModule } from './../../sellerInternal/side-bar.module';
import { NgModule } from '@angular/core';
import { SellerDashboardComponentNew } from './seller-dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { SellerLayoutRoutes } from './seller-dashboard-routing';
import { SellerMessagesComponent } from '../seller-messages/seller-messages.component';
import { RfqModule } from '../rfq/rfq.module';


@NgModule({
    imports: [SideBarModule,
        RouterModule.forChild(SellerLayoutRoutes),
        RfqModule,
    ],
    declarations: [SellerDashboardComponentNew, SellerProfileComponentt, SellerMessagesComponent],
    exports: []
})

export class SellerDashboardModule { }