import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Cliente} from "../../interfaces/cliente";
import {Toast} from "../../interfaces/toast";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../service/api.service";
import {FormularioService} from "../../service/formulario.service";

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent implements OnInit {
  forma!: FormGroup;
  private datos!: Cliente;
  infoToast: Toast=
    {
      titulo:"Error",
      mensaje:"Fallo en el envio de datos, revise el formulario"
    }
  toast: boolean=false;
  modificar: boolean = false;
  private datosCambiados!: Cliente;
  private id!: number;

  constructor(private activatedRoute: ActivatedRoute,private router:Router,private api:ApiService,private formBuilder: FormBuilder,private serviceForm:FormularioService)
  {

    this.activatedRoute.params.subscribe(parametros =>
    {
      this.id=parametros['id'];
      if(parametros['id']!=undefined){

        this.api.getQuery(`apiExtra/usuarios/${this.id}`)
          .subscribe(data =>
            {
              this.datos = data;
              // this.loading=false;
              console.log(data)
              this.crearFormulario();
              this.cargarDatosFormulario();
              console.log(data)
            }
            , async (errorServicio) =>
            {
              console.log(errorServicio);
            });
      }else {
        this.crearFormulario();
        this.modificar=!this.modificar;
      }
    })
  }

  ngOnInit(): void {
  }

  private crearFormulario()
  {
    this.forma = this.formBuilder.group
    ({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]]}
    )
  }

  private cargarDatosFormulario() {
    this.forma.reset
    (
      {
        nombre: this.datos.nombre,
        apellido:  this.datos.apellido,
        email:  this.datos.email
      }
    )

  }

  valido(titulo: string)
  {
    let input: any = this.forma.get(titulo);
    return !(input.invalid && input.touched);
  }

  guardar(formGrupo: FormGroup)
  {
    console.log(formGrupo)
    if (!formGrupo.parent) {
      if (this.serviceForm.tomarDatos(formGrupo)) {

        this.datosCambiados = this.serviceForm.Datos;

        if (this.id != undefined) {

          //asi traemos los datos del formulario si es todo valido
          this.api.putQuery(`apiExtra/usuarios/${this.id}`, this.datosCambiados)
            .subscribe(data => {

                this.router.navigate(['/listadoUsuario']);

              }
              , async (errorServicio) => {
                console.log(errorServicio);
              });
        }else {
          this.api.postQuery('apiExtra/usuarios/',this.datosCambiados)
            .subscribe(data => {
                this.router.navigate(['/listadoUsuario']);
              }
              , async (errorServicio) => {
                console.log(errorServicio);
              });


        }

      } else {
        this.cambiarToast(false);
      }
    }
    //lee todo los valores
    if (formGrupo.invalid) {
      Object.values(formGrupo.controls).forEach(control => {
        if (control instanceof FormGroup)
          this.guardar(control);
        control.markAsTouched();
      })
      return;
    }
  }

  get Datos() {
    return this.datos;
  }

  modificarInput() {
    if (this.forma.status==="VALID")
    {
      this.modificar =! this.modificar;
    }
  }

  resetear() {
    this.cargarDatosFormulario();
  }

  cambiarToast(opcion:boolean)
  {
    console.log("cambio info")
    if (opcion)
    {
      this.infoToast =
        {
          titulo:"Exito",
          mensaje:"Modificacion exitosa"
        }
    }
    else
    {
      this.infoToast =
        {
          titulo:"Error",
          mensaje:"Fallo en el envio de datos, revise el formulario"
        }
    }
    console.log("Mostrar")
    this.toast=true;
  }

}
