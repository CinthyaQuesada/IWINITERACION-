import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { DatePipe } from '@angular/common';
import { juegoService } from '../Service/juegoService';
import { Arbitro } from '../Domain/Arbitro';
import { Equipo } from '../Domain/Equipo.model';
import { Juego } from '../Domain/juego.model';
import { Campeonato } from '../Domain/Campeonato.model';
import { Fecha } from '../Domain/fecha.model';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent {

  public arbitroAsignados: Arbitro[] = [];
  public fechas: Fecha[] = [];

  constructor(public http: HttpClient, @Inject('BASE_URL') public baseUrl: string, public juegoService: juegoService) {
    http.get<Arbitro[]>(baseUrl + 'api/Arbitro/').subscribe(result => {
      this.arbitroAsignados = result;
    }, error => console.error(error));
    console.log(this.arbitroAsignados);

    http.get<Fecha[]>(baseUrl + 'api/Juego/3/2019-06-25').subscribe(result => {
      this.fechas = result;
    console.log(this.fechas);
    console.log(this.fechas.length);
    }, error => console.error(error));


  }

  actualizar(fechasT: Arbitro[]): void {
    console.log(fechasT);
  }
  hola(fechasT: Fecha[]): void {
    console.log(fechasT);
    this.fechas = fechasT;
    console.log(this.fechas);
   
  }
}
