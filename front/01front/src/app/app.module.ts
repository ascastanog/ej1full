import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './components/listado/listado.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { ModalComponent } from './components/shared/modal/modal.component';
import { ListadoUsuarioComponent } from './components/listado-usuario/listado-usuario.component';
import { FormularioUsuarioComponent } from './components/formulario-usuario/formulario-usuario.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    FormularioComponent,
    ModalComponent,
    ListadoUsuarioComponent,
    FormularioUsuarioComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
