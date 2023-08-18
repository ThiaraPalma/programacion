import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Usuario } from 'src/app/models/usuario';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  //referenciar Autentificacion de Firebase
  constructor (public auth: AngularFireAuth){ }
   
  //importacion del modulo
   usuarios: Usuario = {
    uid: '',
    nombre: '',
    contrasena: ''
   }

   //funcion 
   registrar (nombre: string, contrasena: string) {
    //retorna nueva informacion  de registrar
    return this.auth.createUserWithEmailAndPassword(nombre, contrasena);
  }
}
