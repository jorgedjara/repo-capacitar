import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgregarJuegoComponent } from './componentes/agregar-juego/agregar-juego.component';
import { EditarJuegoComponent } from './componentes/editar-juego/editar-juego.component';
import { ListarJuegoComponent } from './componentes/listar-juego/listar-juego.component';
import { VerJuegoComponent } from './componentes/ver-juego/ver-juego.component';
import { JuegosUsuarioComponent } from './componentes/juegos-usuario/juegos-usuario.component';
import { ListarJuegosUsuarioComponent } from './componentes/listar-juegos-usuario/listar-juegos-usuario.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'agregar-juego.component'},
  {path:'agregar-juego',component:AgregarJuegoComponent},
  {path:'editar-juego/:id',component:EditarJuegoComponent},
  {path:'listar-juego',component:ListarJuegoComponent},
  {path:'ver-juego/:id',component:VerJuegoComponent},
  {path:'juegos-usuario/:idUs',component:JuegosUsuarioComponent},
  {path:'listar-juegos-usuario/:idUsuario',component:ListarJuegosUsuarioComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
