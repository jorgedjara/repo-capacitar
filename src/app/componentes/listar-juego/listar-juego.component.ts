import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-listar-juego',
  templateUrl: './listar-juego.component.html',
  styleUrls: ['./listar-juego.component.css']
})
export class ListarJuegoComponent implements OnInit {
  Juegos:any;

  constructor(
    private crudService:CrudService
  ) {}

  ngOnInit(): void {
    this.crudService.ObtenerJuegos().subscribe(respuesta=>
        //console.log(respuesta);
        this.Juegos=respuesta
    );
  }

}
