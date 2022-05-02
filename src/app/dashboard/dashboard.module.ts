import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent, DialogElements } from './dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {  MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FontAwesomeModule,
    MatPaginatorModule,
    MatDialogModule,

    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatOptionModule,
    MatNativeDateModule,
    HttpClientModule
    
  ],
  declarations: [DashboardComponent, DialogElements],
  providers: [HttpClient, ApiService],
})
export class DashboardModule {}
