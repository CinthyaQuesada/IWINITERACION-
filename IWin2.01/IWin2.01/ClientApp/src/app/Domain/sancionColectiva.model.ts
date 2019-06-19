import { Juego } from "./juego.model";
import { Equipo } from "./Equipo.model";

export class SancionColectiva {
  identificador: number;
  
  equipo: Equipo;
  juego: number;
  tipo: string;
  motivo: string;

  constructor(identificador?: number,
    identificadorEquipo?: Equipo, identificadorJuego?: number,
    tipo?: string,
    motivo?: string,
  ) {

    this.identificador = identificador;
    this.equipo = identificadorEquipo;
    this.juego = identificadorJuego;
    this.motivo = motivo;
    this.tipo = tipo;


  }
}
