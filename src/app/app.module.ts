import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarJuegoComponent } from './componentes/agregar-juego/agregar-juego.component';
import { EditarJuegoComponent } from './componentes/editar-juego/editar-juego.component';
import { ListarJuegoComponent } from './componentes/listar-juego/listar-juego.component';
import { VerJuegoComponent } from './componentes/ver-juego/ver-juego.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ListarJuegosUsuarioComponent } from './componentes/listar-juegos-usuario/listar-juegos-usuario.component';
import { JuegosUsuarioComponent } from './componentes/juegos-usuario/juegos-usuario.component';
import { LoginComponent } from './componentes/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarJuegoComponent,
    EditarJuegoComponent,
    ListarJuegoComponent,
    VerJuegoComponent,
    ListarJuegosUsuarioComponent,
    JuegosUsuarioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
