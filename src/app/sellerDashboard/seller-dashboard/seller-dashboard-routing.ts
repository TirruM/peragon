import { ShowRoomsComponent } from './../show-rooms/show-rooms.component';
import { BookMarksComponent } from './../book-marks/book-marks.component';
import { RfqComponent } from './../rfq/rfq.component';
import { SellerDashboardComponentNew } from './seller-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerDashboardModule } from './seller-dashboard.module';
import { SellerModule } from 'src/app/seller/seller.module';
import { SellerProfileComponentt } from '../seller-profile/seller-profile.component';
import { SellerMessagesComponent } from '../seller-messages/seller-messages.component';
import { RfqHomeComponent } from '../rfq-home/rfq-home.component';
export const SellerLayoutRoutes: Routes = [
    {
        path: 'sellerdashboard', component: SellerDashboardComponentNew,
        children: [
            {
                path: 'messages', component: SellerMessagesComponent
            },
            {
                path: 'rfq', component: RfqComponent,

            },
            {
                path: 'profile1', component: SellerProfileComponentt
            },
            {
                path: 'search', component: SellerProfileComponentt
            },
            {
                path: 'bookmarks', component: BookMarksComponent
            },
            {
                path: 'showrooms', component: ShowRoomsComponent
            },
            {
                path: 'rfqHome', component: RfqHomeComponent
            }


        ]
    },
    /* {
        path: 'buyerdashboardd', component: SellerDashboardComponentNew,
        children: [
            {
                path: 'profile1', component: SellerProfileComponentt

            },

        ]
    }, */
];



