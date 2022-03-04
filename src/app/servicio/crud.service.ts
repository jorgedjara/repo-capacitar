import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Juego } from './Juego';
import { Usuario } from './Usuario';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
//API: string="http://localhost/servidor_conexion/index.php/"; 
API: string="http://localhost/servidor_conexion/index.php"; 
  constructor(private clienteHttp:HttpClient, private cookies: CookieService) { }

    Login(datosUsuario:Usuario):Observable<any>{
      return this.clienteHttp.post(this.API+"?ingresar=1",datosUsuario);
    }

    AgregarJuego(datosJuego:Juego):Observable<any>{
      return this.clienteHttp.post(this.API+"?insertar=1",datosJuego);
      //return this.clienteHttp.post(this.API,datosJuego);
    }

    ObtenerJuegos(){
      return this.clienteHttp.get(this.API);   
    }    

    ObtenerJuegosDeUsuario(id:any):Observable<any>{
      return this.clienteHttp.get(this.API+"?juegosUs="+id); 
    }

    setToken(token: string) {
      this.cookies.set("token", token);
    }

    getToken() {
      return this.cookies.get("token");
    }  
    
    getUserLogged() {
      const token = this.getToken();
      // Aquí iría el endpoint para devolver el usuario para un token
    }
  
}
