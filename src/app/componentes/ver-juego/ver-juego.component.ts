import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-ver-juego',
  templateUrl: './ver-juego.component.html',
  styleUrls: ['./ver-juego.component.css']
})
export class VerJuegoComponent implements OnInit {

  constructor(
    private crudService:CrudService
  ) {}

  ngOnInit(): void {
    console.log('El token es:'+this.crudService.getToken());
    //this.crudService.ObtenerJuegosDeUsuario().subscribe(respuesta=>
      //console.log(respuesta);
      //this.Juegos=respuesta
  //);
    
  }

}
