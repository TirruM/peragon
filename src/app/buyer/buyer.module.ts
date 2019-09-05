//import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BuyerFavouritesComponent } from "./buyer-favourites/buyer-favourites.component";
import { BuyerProfileComponent } from "./buyer-profile/buyer-profile.component";
import { BuyerBidsComponent } from "./buyer-bids/buyer-bids.component";
import { BuyerNotificationsComponent } from "./buyer-notifications/buyer-notifications.component";
import { BuyerSideNavbarComponent } from "./buyer-side-navbar/buyer-side-navbar.component";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { BuyerDashboardComponent } from "./buyer-dashboard/buyer-dashboard.component";
import { BuyerRfqCreateComponent } from "./buyer-rfq-create/buyer-rfq-create.component";
import { MatDatepickerModule } from "@angular/material";
import { BuyerRfqDetailsComponent } from "./buyer-rfq-details/buyer-rfq-details.component";
import { BuyerComponent } from "./buyer.component";
import { ChartsModule } from "ng2-charts";

const buyerRoutes: Routes = [
  {
    path: "",
    component: BuyerComponent,
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "prefix" },
      {
        path: "dashboard",
        component: BuyerDashboardComponent,
        data: { title: "Dashboard" }
      },
      {
        path: "notifications",
        component: BuyerNotificationsComponent,
        data: { title: "Notifications" }
      }
    ]
  }
];

@NgModule({
  declarations: [
    BuyerFavouritesComponent,
    BuyerProfileComponent,
    BuyerBidsComponent,
    BuyerNotificationsComponent,
    BuyerSideNavbarComponent,
    BuyerDashboardComponent,
    BuyerRfqCreateComponent,
    BuyerRfqDetailsComponent,
    BuyerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ChartsModule,
    MatDatepickerModule,
    RouterModule.forChild(buyerRoutes)
  ],
  exports: [BuyerSideNavbarComponent, SharedModule]
})
export class BuyerModule {}
