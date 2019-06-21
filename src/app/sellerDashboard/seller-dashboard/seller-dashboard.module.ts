import { SharedModule } from './../../shared/shared.module';
import { RfqHomeComponent } from './../rfq-home/rfq-home.component';
import { RfqComponent } from './../rfq/rfq.component';
import { SellerProfileComponentt } from './../seller-profile/seller-profile.component';
import { SideBarModule } from './../../sellerInternal/side-bar.module';
import { NgModule } from '@angular/core';
import { SellerDashboardComponentNew } from './seller-dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { SellerLayoutRoutes } from './seller-dashboard-routing';
import { SellerMessagesComponent } from '../seller-messages/seller-messages.component';


@NgModule({
    imports: [SideBarModule,
        RouterModule.forChild(SellerLayoutRoutes),
        SharedModule
    ],
    declarations: [SellerDashboardComponentNew,
        SellerProfileComponentt,
        SellerMessagesComponent,
        RfqHomeComponent
    ],
    exports: [RfqHomeComponent]
})

export class SellerDashboardModule { }