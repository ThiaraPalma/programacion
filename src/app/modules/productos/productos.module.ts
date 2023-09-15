import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { AdminRoutingModule } from '../admin/admin-routing.module';
import { CardComponent } from './components/card/card.component';
import { ProductosComponent } from './pages/productos/productos.component';


@NgModule({
  declarations: [
    ProductosComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ], exports:[
    CardComponent
  ]
  
  
})
export class ProductosModule { }
