import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicio/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-listar-juegos-usuario',
  templateUrl: './listar-juegos-usuario.component.html',
  styleUrls: ['./listar-juegos-usuario.component.css']
})
export class ListarJuegosUsuarioComponent implements OnInit {
  elId:any;
  Juegos:any;
  constructor(
    private activeRoute:ActivatedRoute,
    private crudService:CrudService
  ) { 
    this.elId=this.activeRoute.snapshot.paramMap.get('idUsuario');
    console.log(this.elId)
    this.crudService.ObtenerJuegosDeUsuario(this.elId).subscribe(
      respuesta=>{
        //console.log(respuesta)
        //this.crudService.getUserLogged();//Recupera el token de las cookies
        this.Juegos=respuesta;
        //console.log(this.Juegos)
        console.log('El token es:'+this.crudService.getToken());
      }
    );
  }

  ngOnInit(): void {
    /*this.crudService.ObtenerJuegosDeUsuario(this.formularioDeJuegos.value).subscribe(respuesta=>
      console.log(respuesta)
      //this.Juegos=respuesta
  );  */  
  }

}
