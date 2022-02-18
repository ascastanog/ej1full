import { Component, OnInit } from '@angular/core';
import {Cliente} from "../../interfaces/cliente";
import {ApiService} from "../../service/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-listado-usuario',
  templateUrl: './listado-usuario.component.html',
  styleUrls: ['./listado-usuario.component.css']
})
export class ListadoUsuarioComponent implements OnInit {
  private datos: Cliente[]=[];
  private alerta: boolean = false;

  constructor(private api:ApiService,private router:Router)
  {
    this.llamarApi()
  }

  ngOnInit(): void {
  }

  private llamarApi() {
    this.api.getQuery("apiExtra/usuarios")
      .subscribe(data =>
        {
          this.datos = data;
          // this.loading=false;
          console.log(this.datos)
        }
        , async (errorServicio) =>
        {
          console.log(errorServicio);
        });
  }

  get Datos()
  {
    return this.datos;
  }

  borrarId(id: number|undefined)
  {
    this.api.deleteQuery(`apiExtra/usuarios/${id}`)
      .subscribe(data =>
        {
          this.alerta = true;
          this.llamarApi();
          console.log(data);
        }
        , async (errorServicio) =>
        {
          console.log(errorServicio);
        });
  }

  modificarId(id: number|undefined)
  {
    this.router.navigate(['/formularioUsuario', id]);
  }

  crear(){
    this.router.navigate(['/formularioUsuario']);
  }

}
