import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    FontAwesomeModule,
    MdbCollapseModule,
    MdbDropdownModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent
  ]
})
export class LayoutModule { }
