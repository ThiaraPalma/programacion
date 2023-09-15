import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { TableComponent } from './components/table/table.component';
import { AdminComponent } from './pages/admin/admin.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    TableComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule
  ],
  exports:[
    AdminComponent,
    TableComponent,
    MatIconModule
  ]
})
export class AdminModule { }
