import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  //referenciar Autentificacion de Firebase
  constructor (public auth: AngularFireAuth){ }
   

   //funcion  para retornar nueva informacion para nombre y contraseña
   registrar (nombre: string, contrasena: string) {
    //retorna nueva informacion  de registrar
    return this.auth.createUserWithEmailAndPassword(nombre, contrasena);
  }
}
