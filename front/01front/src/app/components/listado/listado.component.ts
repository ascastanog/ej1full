import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../service/api.service";
import {Cliente} from "../../interfaces/cliente";
import {Router} from "@angular/router";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  private datos: Cliente[]=[];
  private alerta: boolean = false;

  constructor(private api:ApiService,private router:Router)
  {
    this.llamarApi()
  }

  ngOnInit(): void {
  }

  private llamarApi() {
    this.api.getQuery("api/clientes")
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
    this.api.deleteQuery(`api/clientes/${id}`)
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
    this.router.navigate(['/formulario', id]);
  }

  crear(){
    this.router.navigate(['/formulario']);
  }

}
