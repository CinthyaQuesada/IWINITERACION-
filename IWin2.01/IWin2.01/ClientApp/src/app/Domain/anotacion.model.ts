import { Equipo } from "./Equipo.model";
import { Jugador } from "./Jugador.model";

export class Anotacion {




   identificador: number;
   equipo: Equipo;
   jugador: Jugador;
   juego: number;
   cantidadGoles: number;

  constructor(identificador?: number,
    identificadorEquipo?: Equipo, identificadorJuego?: number, jugador?: Jugador,
    cantidad?: number) {
    this.cantidadGoles = cantidad;

    this.jugador = jugador;
    this.identificador = identificador;
    this.equipo = identificadorEquipo;
    this.juego = identificadorJuego;


  }

}
