import { Component } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/models/producto';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  collectionProductos : Producto[] = []; //creamos collection basada en interfaz

  productoSeleccionado ! : Producto // ! -> recibir valores vacios

  modalVisibleProdcuto: boolean = false;

  //modalVisible: boolean =false;
  // eliminarVisible:  false;

  producto = new FormGroup({
    nombre: new FormControl('',Validators.required),
    imagen: new FormControl('',Validators.required),
    alt: new FormControl('',Validators.required),
    descripcion: new FormControl('',Validators.required),
    precio: new FormControl(0,Validators.required),
    categoria: new FormControl('',Validators.required),
    
  })
  constructor(public servicioCrud: CrudService){ }// patentamos servicio de forma local 

  ngOnInit(): void{
    this.servicioCrud.obtenerProducto().subscribe(producto =>{
     this.collectionProductos = producto;
    })
  }

  async agregarProducto(){

  }
}
