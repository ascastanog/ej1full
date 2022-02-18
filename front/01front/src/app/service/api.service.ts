import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Cliente} from "../interfaces/cliente";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API = "http://localhost:8080/"

  constructor(private http: HttpClient)
  {

  }

  // Metodo encargado de llamar a la api con GET y introducir el link deseado
  getQuery(ruta:string):Observable<any>
  {
    return this.http.get(this.API+ruta)
  }

  // Metodo encargado de llamar a la api con POST y introducir el link deseado y el body de la creacion
  postQuery(ruta:string,body:Cliente):Observable<any>
  {
    return this.http.post(this.API+ruta,body)
  }

  // Metodo encargado de llamar a la api con PUT y introducir el link deseado y el body de la creacion
  putQuery(ruta:string,body:Cliente):Observable<any>
  {
    return this.http.put(this.API+ruta,body)
  }

  // Metodo encargado de llamar a la api con PUT y introducir el link deseado y el body de la creacion
  deleteQuery(ruta:string):Observable<any>
  {
    return this.http.delete(this.API+ruta)
  }

}
