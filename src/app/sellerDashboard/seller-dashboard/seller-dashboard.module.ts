import { ShowRoomsComponent } from './../show-rooms/show-rooms.component';
import { AboutComponent } from './../about/about.component';
import { AddProductModelComponent } from './../add-product-model/add-product-model.component';
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
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
    imports: [SideBarModule,
        RouterModule.forChild(SellerLayoutRoutes),
        SharedModule,
        ModalModule.forRoot(),
    ],
    declarations: [SellerDashboardComponentNew,
        SellerProfileComponentt,
        SellerMessagesComponent,
        RfqHomeComponent,
        AddProductModelComponent,
        AboutComponent,
        ShowRoomsComponent
    ],
    entryComponents: [AddProductModelComponent],
    exports: [RfqHomeComponent, AddProductModelComponent, AboutComponent,
        SellerProfileComponentt,
        ShowRoomsComponent]
})

export class SellerDashboardModule { }