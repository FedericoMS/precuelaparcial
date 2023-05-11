import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.scss']
})
export class TablaPeliculaComponent {
  @Input() listadoRecibido? : Pelicula[]; 
  //el "?" es para que no sea necesario inicializar en el constructor
  @Output() PasamosUnaPelicula : EventEmitter <Pelicula> = new EventEmitter <Pelicula>;


  constructor()
  {
    
  }

  PasarPelicula(pelicula : Pelicula)
  {
    this.PasamosUnaPelicula.emit(pelicula);
    console.info(pelicula);
  }

}
