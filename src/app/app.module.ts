import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardModule } from './dashboard/dashboard.module';
import { AccountSettingsModule } from './account-settings/account-settings.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RequestDashboardModule } from './request-dashboard/request-dashboard.module';
import { HttpClientModule } from '@angular/common/http';
import { CrudModule } from './crud/crud.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    FlexLayoutModule,
    LayoutModule,
    DashboardModule,
    AccountSettingsModule,
    BrowserAnimationsModule,
    RequestDashboardModule,
    HttpClientModule,
    CrudModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
