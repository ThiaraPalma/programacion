import { Component,OnInit } from '@angular/core';
//IMPORTAMOS NUESTRA INTERFAZ
import{TarjetasInicio} from'src/app/models/modelos';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  //PROPIEDAD PUBLICA (TIPO ARRAY)
  public info:TarjetasInicio[];

  //INICIALIZA LA PROPIEDAD INFO
  constructor(){
    this.info = [
      {
        titulo:"Tarjeta 1",
        descripcion:"Foto de una serpiente gravemente peligrosa encontrada en la patagonia Argentina",
        imagen:"https://deserpientes.net/wp-content/uploads/v%C3%ADbora-de-arbusto.jpg",
        alt:"Serpiente Patagonica"
      }
    ]
  }

  //EVENTO DE CONTRUCCION INICIALIZACION
 ngOnOnit(): void{


}
}
