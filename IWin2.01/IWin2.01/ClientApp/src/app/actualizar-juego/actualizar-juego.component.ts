import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { DatePipe } from '@angular/common';
import { juegoService } from '../Service/juegoService';
import { Arbitro } from '../Domain/Arbitro';
import { Equipo } from '../Domain/Equipo.model';
import { Juego } from '../Domain/juego.model';
import { Campeonato } from '../Domain/Campeonato.model';


@Component({
  selector: 'app-actualizar-juego',
  templateUrl: './actualizar-juego.component.html',
  styleUrls: ['./actualizar-juego.component.css']
})
export class ActualizarJuegoComponent {

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
    http.get<Campeonato[]>(baseUrl + 'api/Campeonato').subscribe(result => {
      this.campeonatos = result;
    }, error => console.error(error));


  }

  buscar(identificador: number): void {
    console.log("entra en buscar" + identificador)
    this.http.get<Juego[]>(this.baseUrl + 'api/Juego/' + identificador).subscribe(result => {
      this.juegos = result;
    }, error => console.error(error));

  }

  buscarJuego(juegoSelect: Juego): void {


    this.http.get<Arbitro[]>(this.baseUrl + 'api/Arbitro/').subscribe(result => {
      this.arbitroAsignados = result;
    }, error => console.error(error));

    this.fechaJuego = juegoSelect.fechaJuego;
    this.estadoJuego = juegoSelect.estadoJuego;
    this.lugar = juegoSelect.lugar;
    this.arbitroAsignado = juegoSelect.arbitroAsignado;
    this.juegoSeleccionado = juegoSelect;

  }

  actualizar(): void {
    console.log("entra en boton actualizar");
    this.juegoSeleccionado.fechaJuego = this.fechaJuego;
    this.juegoSeleccionado.estadoJuego = this.estadoJuego;
    this.juegoSeleccionado.lugar = this.lugar;
    this.juegoSeleccionado.arbitroAsignado.identificacion = this.identificacionArbitro;


    if (this.juegoSeleccionado.fechaJuego != null && this.juegoSeleccionado.estadoJuego != null && this.juegoSeleccionado.estadoJuego != "" && this.juegoSeleccionado.lugar != null && this.juegoSeleccionado.lugar != "" && this.juegoSeleccionado.arbitroAsignado.identificacion != null && this.juegoSeleccionado.arbitroAsignado.identificacion != "" && this.juegoSeleccionado.estadoJuego != null && this.juegoSeleccionado.estadoJuego != "") {
      console.log(this.juegoSeleccionado.lugar);
      this.juegoService.actualizar(this.juegoSeleccionado).subscribe(data => this.juego = data);
      //window.location.href = "actualizarJuego"
    } else {
      alert("Datos incompletos. Por favor llene todos los espacios.");
    }
  }


}

/*
interface Campeonato {
  identificador: number;
  nombreCampeonato: String;
  imagenCampeonato: ByteString;
  cantidadGrupos: number;
  fechaInicio: Date;

}

interface Juego {
  identificador: number;
  identificadorCampeonato: number;
  equipoA: number;
  equipoB: number;
  fechaJuego: Date;
  estadoJuego: boolean;
  lugar: String;
  arbitroAsignado: String;

} 
*/
