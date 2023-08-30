import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Usuario } from 'src/app/models/usuario';
import { FirestoreService } from 'src/app/shared/services/firestore.services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    hide = true; //input de contraseña

    //definimos de forma publica el servicioAuth
    constructor (
      public servicioAuth: AuthService,
      public servicioFirestore: FirestoreService
      ){}
       
    //importacion del modulo
    usuarios: Usuario = {
      uid: '',
      nombre: '',
      contrasena: ''
    
    }
     uid= '';
     coleccionUsuarios: Usuario[] = [];
  

    //tomando nuevo registro
    // async = ASINCRONICO
   async registrarse(){
    const credenciales ={
      nombre: this.usuarios.nombre,
      contrasena: this.usuarios.contrasena
    };
    const res = await this.servicioAuth.registrar(credenciales.nombre,credenciales.contrasena)
    //metdo THEN devuelve misma promesa
    .then(res=>{
      alert("Ha agregado un nuevo usuario con exito:) ")
    })

    //metodo CATCH creara un error en caso de que algo salga mal
    .catch(error => 
      alert("Hubo un error al crear el usuario :(  \n" + error)
      )
    //creamos constante UID para el UID que obtengamos
    const uid = await this.servicioAuth.getUid();
    
    //referenciamos el uid nuevo con el de usuario
    this.usuarios.uid = uid;

    //llamamos funcion guardarUser
    this.guardaUser();
  }

  //funcion asincronica para guardar usuarios 
  async guardaUser(){
    this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
    .then(res =>{
      console.log(this.usuarios);
    })
    .catch(error => {
      console.log('Error =>', error);
    })
  }
}
