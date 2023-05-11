import { Component, Input, Output } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent {

  listaDePelis? : Pelicula[] = [new Pelicula(0 , "Cars", "Otros", "29/06/2006", 10000, "../../../assets/cars.jpg", new Actor(0, "Rayo", "McQueen", "22", "M", "USA", "USA")),
                                new Pelicula(1 , "Shrek 2", "Comedia", "17/06/2004", 90000, "../../../assets/shrek-2.jpg", new Actor(1, "Shrek", "Shrek", "39", "M", "Inglaterra", "Inglaterra"))
                                ];
  peliculaActual? : Pelicula;
  visualizacion : string = "Tabla";

  constructor()
  {
    // this.listaPeliculasHardcodeada = [
    //   { 
    //     id : 0,
    //     nombre : "Cars",
    //     tipo : "otros",
    //     fechaDeEstreno : "29/06/2006",
    //     cantidadPublico : 10000,
    //     fotoPelicula : "../../../assets/cars.jpg"         
    //   }
    // ]
  }
  

  ObtenerPeliculaSeleccionada($event : Pelicula)
  { 
    this.peliculaActual = $event;
  }

  CambiarVista()
  {
    if (this.visualizacion == 'Tabla') 
    {
      this.visualizacion = 'Listado';
    }
    else 
    {
      this.visualizacion = 'Tabla';
    }
  }

}
