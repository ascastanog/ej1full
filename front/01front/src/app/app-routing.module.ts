import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListadoComponent} from "./components/listado/listado.component";
import {FormularioComponent} from "./components/formulario/formulario.component";
import {ListadoUsuarioComponent} from "./components/listado-usuario/listado-usuario.component";
import {FormularioUsuarioComponent} from "./components/formulario-usuario/formulario-usuario.component";

const routes: Routes = [
  {path:"listado", component:ListadoComponent},
  {path:"formulario/:id", component:FormularioComponent},
  {path:"formulario", component:FormularioComponent},
  {path:"listadoUsuario", component:ListadoUsuarioComponent},
  {path:"formularioUsuario/:id", component:FormularioUsuarioComponent},
  {path:"formularioUsuario", component:FormularioUsuarioComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'listado' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
