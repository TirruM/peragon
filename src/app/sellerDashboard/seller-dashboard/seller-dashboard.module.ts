import { CertificatesComponent } from './../certificates/certificates.component';
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
import { ProductsComponent } from '../products/products.component';
import { LocationsComponent } from '../locations/locations.component';
import { ServicesComponent } from '../services/services.component';
import { TagInputModule } from 'ngx-chips';
import { MatChipsModule, MatAutocompleteModule } from '@angular/material';
import { NgSelectModule } from '@ng-select/ng-select'
@NgModule({
    imports: [SideBarModule,
        RouterModule.forChild(SellerLayoutRoutes),
        SharedModule,
        ModalModule.forRoot(),
        TagInputModule,
        MatChipsModule, MatAutocompleteModule,
        NgSelectModule
    ],
    declarations: [SellerDashboardComponentNew,
        SellerProfileComponentt,
        SellerMessagesComponent,
        RfqHomeComponent,
        AddProductModelComponent,
        AboutComponent,
        ShowRoomsComponent,
        CertificatesComponent,
        ProductsComponent,
        LocationsComponent,
        ServicesComponent
    ],
    entryComponents: [AddProductModelComponent],
    exports: [
        RfqHomeComponent,
        AddProductModelComponent,
        AboutComponent,
        ProductsComponent,
        LocationsComponent,
        ServicesComponent,
        SellerProfileComponentt,
        ShowRoomsComponent,
        NgSelectModule
    ]
})

export class SellerDashboardModule { }