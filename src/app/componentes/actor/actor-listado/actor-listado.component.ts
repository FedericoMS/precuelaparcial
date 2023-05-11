import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.scss']
})
export class ActorListadoComponent {

  @Input() listadoActoresRecibido? : Actor[]; 
  //@Output() PasamosUnActor: EventEmitter<Actor> = new EventEmitter<Actor>;

  constructor(){}

  /*PasarActor(actor : Actor)
  {
    this.PasamosUnActor.emit(actor);
    console.info(actor);
  }*/


}
