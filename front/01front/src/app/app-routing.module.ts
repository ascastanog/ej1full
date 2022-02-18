import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListadoComponent} from "./components/listado/listado.component";
import {FormularioComponent} from "./components/formulario/formulario.component";

const routes: Routes = [
  {path:"listado", component:ListadoComponent},
  {path:"formulario/:id", component:FormularioComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'listado' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
