import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formularioDeLogin:FormGroup;
  DatosLogin:any;
  textoLogin:string | undefined;
    constructor(
      public formulario:FormBuilder ,
      private crudService:CrudService,
      private ruteador:Router
      ) {
        
      this.formularioDeLogin=this.formulario.group({
        usuario:[''],
        clave:['']
  
      });
  
     }
  
    ngOnInit(): void {
    }
    enviarDatosLogin():any{
      console.log("Me presionaste");
      console.log(this.formularioDeLogin.value);
      this.crudService.Login(this.formularioDeLogin.value).subscribe(
        respuesta=> {
          console.log(respuesta)
          if(respuesta.estadoUsuario=='autentificado'){//Si el logueo fue exitoso
            this.crudService.setToken(respuesta.id_usuario);//Setea el token para las cookies
            this.ruteador.navigateByUrl('listar-juegos-usuario/'+respuesta.id_usuario);
          }else{
            this.textoLogin='Usuario y/o Claves incorrectos';
          }
        }
        
      ); //hace la peticion
    
    }
  
  }
