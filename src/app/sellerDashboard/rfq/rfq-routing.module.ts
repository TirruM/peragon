import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RfqComponent } from './rfq.component';
import { RfqHomeComponent } from '../rfq-home/rfq-home.component';
import { SellerMessagesComponent } from '../seller-messages/seller-messages.component';

export const routes: Routes = [
  {
    path: '', component: RfqHomeComponent,
  },
    // children: [
        {
            path: 'rfqhome', component: RfqHomeComponent
        },
        {
            path: 'rfqresponses', component: SellerMessagesComponent
        },
        
    // ]
// },
];


