import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.scss']
})
export class PeliculaListadoComponent {

  @Input() listadoRecibido? : Pelicula[]; 
  //el "?" es para que no sea necesario inicializar en el constructor
  @Output() PasamosUnaPelicula : EventEmitter <Pelicula> = new EventEmitter <Pelicula>;


  constructor(){}

  PasarPelicula(pelicula : Pelicula)
  {
    this.PasamosUnaPelicula.emit(pelicula);
    console.info(pelicula);
  }
  
  

}
