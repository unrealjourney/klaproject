import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestDashboardComponent } from './request-dashboard.component';

const routes: Routes = [
  { path: 'request-dashboard', component: RequestDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestDashboardRoutingModule { }
