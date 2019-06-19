import { Juego } from "./juego.model";
import { Equipo } from "./Equipo.model";
import { Jugador } from "./Jugador.model";
export class SancionIndividual {
  identificador: number;
  equipo: Equipo;
  juego: number;
  jugador: Jugador;
  tarjeta: string;
  motivo: string;
  castigo: string;

  constructor(identificador?: number,
    identificadorEquipo?: Equipo, identificadorJuego?: number, jugador?: Jugador,
    tipo?: string,
    motivo?: string, castigo?: string) {
    this.castigo = castigo;

    this.jugador = jugador;
    this.identificador = identificador;
    this.equipo = identificadorEquipo;
    this.juego = identificadorJuego;
    this.motivo = motivo;
    this.tarjeta = tipo;


  }
}
