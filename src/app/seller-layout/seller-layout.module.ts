import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerLayoutRoutingModule } from './seller-layout-routing.module';
import { SellerLayoutComponent } from './seller-layout.component';
import { DashboardTestComponent } from './dashboard-test/dashboard-test.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SharedModule } from '../shared/shared.module';
import { SellerMessagesComponent } from './seller-messages/seller-messages.component';
import { RfqComponent } from './rfq/rfq.component';
import { BookMarksComponent } from './book-marks/book-marks.component';
import { ShowRoomsComponent } from './show-rooms/show-rooms.component';
import { RfqHomeComponent } from './rfq-home/rfq-home.component';
import { SellerProfileComponentt } from './seller-profile/seller-profile.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { LocationsComponent } from './locations/locations.component';
import { MatChipsModule, MatAutocompleteModule } from '@angular/material';
import { ModalModule } from 'ngx-bootstrap';
import { AddProductModelComponent } from './add-product-model/add-product-model.component';


@NgModule({
  declarations: [
    SellerLayoutComponent, 
    DashboardTestComponent, 
    SideBarComponent, 
    SellerProfileComponentt,
    SellerMessagesComponent,
    RfqComponent,
    BookMarksComponent,
    ShowRoomsComponent,
    RfqHomeComponent,
    AboutComponent,
    ProductsComponent,
    ServicesComponent,
    CertificatesComponent,
    LocationsComponent,
    AddProductModelComponent
  ],
  imports: [
    CommonModule,
    SellerLayoutRoutingModule,
    SharedModule,
    MatChipsModule,
    MatAutocompleteModule,
    ModalModule.forRoot()
  ],
  entryComponents: [ AddProductModelComponent ],
  exports: [
    AboutComponent,
    ProductsComponent,
    ServicesComponent,
    CertificatesComponent,
    LocationsComponent,
    ShowRoomsComponent,
    AddProductModelComponent
  ]
})
export class SellerLayoutModule { }