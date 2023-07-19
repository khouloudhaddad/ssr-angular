import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersTableComponent } from './users-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsersTableComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule 
  ]
})
export class UsersTableModule { }
