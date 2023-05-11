import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaListadoComponent } from './componentes/peliculas/pelicula-listado/pelicula-listado.component';
import { ActorListadoComponent } from './componentes/actor/actor-listado/actor-listado.component';
import { PeliculaAltaComponent } from './componentes/peliculas/pelicula-alta/pelicula-alta.component';
import { AltaActorComponent } from './componentes/actor/alta-actor/alta-actor.component';

const routes: Routes = [
  {path : '', component:BusquedaComponent}, //para el home
  {path : "bienvenido", component: BienvenidoComponent}, //path - componente
  {path : "peliculaListado", component:PeliculaListadoComponent},
  {path : "peliculaAlta", component:PeliculaAltaComponent},
  {path : "actorListado", component:ActorListadoComponent},
  {path : "actor/alta", component:AltaActorComponent}
  //{path : '**', component: ErrorComponent} //este ** siempre va al final porque angular lee de arriba a abajo
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
