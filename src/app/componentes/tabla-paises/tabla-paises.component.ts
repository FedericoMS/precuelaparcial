import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})
export class TablaPaisesComponent {
  
  @Output() PasamosUnPais: EventEmitter<any> = new EventEmitter<any>();
  listadoPaises: any;

  constructor(private httpCountries: HttpService) {
    this.listadoPaises = [];
  }

  ngOnInit(): void {
    this.traerPaises();
  }

   traerPaises() {
    this.httpCountries.obtenerPaises().subscribe((val: any) => { 
      for(let item of val)
      {
        this.listadoPaises.push(item);
      }
      this.listadoPaises.sort((a: any, b: any) => {
        return a.name.common.localeCompare(b.name.common);
      });
    })
    console.log(this.listadoPaises);
  }

  pasarPais(pais: any) {
    this.PasamosUnPais.emit(pais);
  }

}
