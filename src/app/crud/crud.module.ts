import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CrudRoutingModule } from './crud-routing.module';
import { CrudComponent } from './crud.component';
import { CrudService } from './crud.service';



@NgModule({
  declarations: [CrudComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    CrudRoutingModule
  ],
  providers: [HttpClient, CrudService],
})
export class CrudModule { }
