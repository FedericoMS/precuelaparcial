import { Component, Input } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.scss']
})
export class DetallePeliculaComponent {

  @Input() unaPelicula? : Pelicula; 
  estaSeleccionada : boolean = false;

  constructor(){};

  limpiar()
  {    
    this.unaPelicula = undefined;
    //NO ANDA BIEN
  }

}
