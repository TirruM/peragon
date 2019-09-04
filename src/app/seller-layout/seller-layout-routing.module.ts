import { NewsFeedComponent } from './news-feed/news-feed.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SellerLayoutComponent } from './seller-layout.component';
import { SellerMessagesComponent } from './seller-messages/seller-messages.component';
import { RfqComponent } from './rfq/rfq.component';
import { BookMarksComponent } from './book-marks/book-marks.component';
import { ShowRoomsComponent } from './show-rooms/show-rooms.component';
import { RfqHomeComponent } from './rfq-home/rfq-home.component';
import { SellerProfileComponentt } from './seller-profile/seller-profile.component';
import { SearchComponent } from './search/search.component';
import { DashboardTestComponent } from './dashboard-test/dashboard-test.component';
//import { DashboardTestComponent } from './dashboard-test/dashboard-test.component';

const sellerRouter: Routes = [
  {
    path: '',
    component: SellerLayoutComponent,
    children: [
      { path: '', redirectTo: 'dasboard', pathMatch: 'prefix' },
      { path: 'profile1', component: SellerProfileComponentt },
      { path: 'dasboard', component: DashboardTestComponent },
      { path: 'messages', component: SellerMessagesComponent },
      { path: 'rfq', component: RfqComponent },
      { path: 'bookmarks', component: BookMarksComponent },
      { path: 'showrooms', component: ShowRoomsComponent },
      { path: 'rfqHome', component: RfqHomeComponent },
      { path: 'search', component: SearchComponent },
      { path: 'newsfeed', component: NewsFeedComponent },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(sellerRouter)
  ],
  exports: [RouterModule]
})
export class SellerLayoutRoutingModule { }
