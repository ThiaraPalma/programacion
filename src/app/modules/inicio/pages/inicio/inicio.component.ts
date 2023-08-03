import { Component,OnInit } from '@angular/core';
import{TarjetasInicio} from'src/app/models/modelos';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  public info:TarjetasInicio[];

  constructor(){
    this.info = []
  }
 ngOnOnit(): void{


}
}
