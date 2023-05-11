import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { ActorListadoComponent } from './componentes/actor/actor-listado/actor-listado.component';
import { AltaActorComponent } from './componentes/actor/alta-actor/alta-actor.component';
import { PeliculaListadoComponent } from './componentes/peliculas/pelicula-listado/pelicula-listado.component';
import { PeliculaAltaComponent } from './componentes/peliculas/pelicula-alta/pelicula-alta.component';
import { TablaPeliculaComponent } from './componentes/tabla-pelicula/tabla-pelicula.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { DetallePeliculaComponent } from './componentes/peliculas/detalle-pelicula/detalle-pelicula.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';

//Firestore y Angularfire
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FIREBASE_OPTIONS } from '@angular/fire/compat'; //muy importante para que no rompa
import { ReactiveFormsModule } from '@angular/forms';

//import { HttpService } from './services/http/http.service';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    BienvenidoComponent,
    ActorListadoComponent,
    AltaActorComponent,
    PeliculaListadoComponent,
    PeliculaAltaComponent,
    TablaPeliculaComponent,
    NavbarComponent,
    DetallePeliculaComponent,
    TablaPaisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AngularFireModule,
    AngularFireAuthModule,
    ReactiveFormsModule
    
  ],
  providers: [ { provide: FIREBASE_OPTIONS, useValue: environment.firebase } ],
  bootstrap: [AppComponent]
})
export class AppModule { }

