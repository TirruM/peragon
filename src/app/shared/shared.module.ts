
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule, MatCardModule, MatInputModule, MatCheckboxModule, MatSelectModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    MatInputModule, 
    ReactiveFormsModule,
    MatButtonModule, MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatCardModule, MatButtonModule, MatCheckboxModule, MatSelectModule
  ]
})
export class SharedModule { }