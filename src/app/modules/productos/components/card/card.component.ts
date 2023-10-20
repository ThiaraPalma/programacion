import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
 
  collectionProductos : Producto[] = []
  
  productoSeleccionado!: Producto;
  modalVisible: boolean = false;

  constructor(
    public servicioCrud: CrudService
  ){}

  ngOnInit(): void{
    this.servicioCrud.obtenerProducto().subscribe(producto =>{
      this.collectionProductos = producto; 
    })
  }

  mostrarVer(info:Producto){// biton dela card -> ver mas informacion
    this.modalVisible = true;

    //mostranos a informacion del producto
    this.productoSeleccionado = info;
  }


}
