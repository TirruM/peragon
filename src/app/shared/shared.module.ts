
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule, MatCardModule, MatInputModule, MatCheckboxModule, MatSelectModule,
  MatSlideToggleModule, MatExpansionModule, MatMenuModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SideBarComponent } from '../sellerInternal/side-bar/side-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule, MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatMenuModule,

  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule, MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule,
    MatCardModule, MatButtonModule, MatCheckboxModule, MatSelectModule, MatSlideToggleModule, MatExpansionModule,
    MatMenuModule
  ]
})
export class SharedModule { }