import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-juego',
  templateUrl: './agregar-juego.component.html',
  styleUrls: ['./agregar-juego.component.css']
})
export class AgregarJuegoComponent implements OnInit {
  formularioDeJuegos:FormGroup;

  constructor(
    public formulario:FormBuilder ,
    private crudService:CrudService,
    private ruteador:Router
    ) {

    this.formularioDeJuegos=this.formulario.group({
      nombre:[''],
      descripcion:[''],
      cant_n:['']

    });

   }

  ngOnInit(): void {
  }
  enviarDatos():any{
    console.log("Me presionaste");
    console.log(this.formularioDeJuegos.value);
    this.crudService.AgregarJuego(this.formularioDeJuegos.value).subscribe(); //hace la peticion
    this.ruteador.navigateByUrl('listar-juego');
  }

}
