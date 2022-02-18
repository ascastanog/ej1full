import { Injectable } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  private datos: any;

  constructor() { }

  tomarDatos(form: FormGroup):boolean
  {
    if (form.status==="VALID")
    {
      console.log("entro:"+form.status);
      console.log(form.value);
      this.datos=form.value;
      console.log(this.datos);
      return true
    }
    console.log("no entro:"+form.status);
    return false
  }

  get Datos() {
    return this.datos;
  }
}
