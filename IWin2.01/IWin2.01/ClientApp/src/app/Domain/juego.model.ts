import { Equipo } from "./Equipo.model";
import { Arbitro } from "./Arbitro";

export class Juego {
  identificador: number;
  identificadorCampeonato: String;
  equipoA: Equipo;
  equipoB: Equipo;
  fechaJuego: Date;
  estadoJuego: String;
  lugar: String;
  arbitroAsignado: Arbitro;

  constructor(identificador?: number,
    identificadorCampeonato?: String,
    equipoA?: Equipo,
    equipoB?: Equipo,
    fechaJuego?: Date,
    estadoJuego?: String,
    lugar?: String,
    arbitroAsignado?: Arbitro) {

    this.identificador = identificador;
    this.equipoA = equipoA;
    this.equipoB = equipoB;
    this.fechaJuego = fechaJuego;
    this.estadoJuego = estadoJuego;
    this.lugar = lugar;
    this.arbitroAsignado = arbitroAsignado;



  }


}
