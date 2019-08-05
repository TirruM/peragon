import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
const routes: Routes = [
  { path: '', loadChildren: './main-layout/main-layout.module#MainLayoutModule' },
  { path: 'seller', loadChildren: './seller-layout/seller-layout.module#SellerLayoutModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    useHash: true
  })],
  // providers: [{ pro: LocationStrategy, useClass: HashLocationStrategy }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
