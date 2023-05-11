import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Actor } from 'src/app/clases/actor';
import { FirestoreService } from 'src/app/services/firestore.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-actor',
  templateUrl: './alta-actor.component.html',
  styleUrls: ['./alta-actor.component.scss']
})
export class AltaActorComponent {

  actor : Actor = new Actor(0, '', '', '', '', '', '');
  forma! : FormGroup;
  mostrar : boolean = false;
  titulo : string = "Mostrar listado";
  actores : any;

  constructor(private fb : FormBuilder, private fs : FirestoreService){

    this.forma = this.fb.group({
      'nombre': ['', [Validators.required, this.spacesValidator]],
      'apellido': ['', Validators.required],
      'nombrePais': ['', Validators.required],
      'edad': ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      'sexo': ['', Validators.required]
    });

    this.fs.traerListaActores().subscribe((actores) => {
      if (actores != null) {
        this.actores = actores;
      }
    }); 
  }


  private spacesValidator(control: AbstractControl): null | object {
    const nombre = <string>control.value;
    const spaces = nombre.includes(' ');

    return spaces
      ? { containsSpaces: true }
      : null;
  }

  obtenerPaisSeleccionado($events : any)
  {
    this.actor.nombrePais = $events.name.common;
    this.actor.banderaPais = $events.flags.png;
  }

   aceptar(): void {
    if(this.forma)
    console.log(this.forma.getRawValue());
  }

  guardarActor($event:any)
  {
    $event.preventDefault();
    if (this.validar()) {
      this.fs.guardarActor(this.actor);
      console.log(this.actores);
      this.actor = new Actor(0, '', '', '', '', '', '');
      Swal.fire(
        {
        title: "Registro",
        text:"Actor registrado!",
        icon : "success",
        confirmButtonText : 'Ok'
        }
      )
     }
  }

  validar()
  {
    let resultado : boolean = true;
    if (this.actor.apellido === ''||
        this.actor.nombre === ''||
        this.actor.edad === ''||
        this.actor.banderaPais === ''||
        this.actor.nombrePais === ''||
        this.actor.sexo === ''
    )
    { 
      resultado = false;
      Swal.fire(
        {
        title: "Error",
        text:"Complete todos los campos para registrar",
        icon : "error",
        confirmButtonText : 'Ok'
        }
      )
    }
    console.log(this.actor);
    return resultado;
  }

  MostrarListado()
  {
    if (this.mostrar) {
      this.titulo = "Mostrar listado";
      this.mostrar = false;
    }
    else
    {
      
      this.titulo = "Cerrar listado";
      this.mostrar = true;
     }
   }
  

}
