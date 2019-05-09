
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule, MatCardModule, MatInputModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule, MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule,
    MatInputModule,
    MatCardModule, MatButtonModule,
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    MatInputModule, 
    ReactiveFormsModule,
    MatButtonModule, MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatCardModule, MatButtonModule,
  ]
})
export class SharedModule { }