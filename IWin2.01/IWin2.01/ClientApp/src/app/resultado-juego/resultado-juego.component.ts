import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { juegoService } from '../Service/juegoService';
import { Arbitro } from '../Domain/Arbitro';
import { Equipo } from '../Domain/Equipo.model';
import { Juego } from '../Domain/juego.model';
import { Campeonato } from '../Domain/Campeonato.model';

@Component({
  selector: 'app-resultado-juego',
  templateUrl: './resultado-juego.component.html',
  styleUrls: ['./resultado-juego.component.css']
})
export class ResultadoJuegoComponent {

  public juegos: Juego[] = [];
  public juego: Juego;
  public campeonatos: Campeonato[];
  public equipos: Equipo[] = [];
  public arbitroAsignados: Arbitro[] = [];

  identificador: number;
  equipoA: Equipo;
  equipoB: Equipo;
  fechaJuego: Date;
  estadoJuego: String;
  lugar: String;
  arbitroAsignado: Arbitro;
  juegoSeleccionado: Juego;
  identificadorEquipoA: number;
  identificadorEquipoB: number;
  identificacionArbitro: string;


  constructor(public http: HttpClient, @Inject('BASE_URL') public baseUrl: string, public juegoService: juegoService) {
    http.get<Juego[]>(baseUrl + 'api/Juego').subscribe(result => {
      this.juegos = result;
    }, error => console.error(error));

    console.log(this.juegos)
  }





}
