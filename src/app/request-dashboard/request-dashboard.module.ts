import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestDashboardRoutingModule } from './request-dashboard-routing.module';
import { RequestDashboardComponent } from './request-dashboard.component';



@NgModule({
  declarations: [RequestDashboardComponent],
  imports: [
    CommonModule,
    RequestDashboardRoutingModule,
  ],
})
export class RequestDashboardModule { }
