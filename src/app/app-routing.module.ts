import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './main/main/main.module#MainModule' },
  { path: 'seller', loadChildren: './seller-layout/seller-layout.module#SellerLayoutModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',

  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
