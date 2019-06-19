import { Campeonato } from "./Campeonato.model";

export class TablaPosiciones {
  golesFavor: number;
  golesContra: number;
  golDif: number;
  partidosJugados: number;
  partidosGanados: number;
  partidosPerdidos: number;
  partidosEmpatados: number;
  cantidadPuntos: number;
  campeonato: Campeonato;

  constructor(golesFavor?: number, golesContra?: number, golDif?: number, partidosJugados?: number, partidosGanados?: number, partidosPerdidos?: number, partidosEmpatados?: number, cantidadPuntos?: number, campeonato?: Campeonato) {
    this.golesFavor = golesFavor;
    this.golesContra = golesContra;
    this.golDif = golDif;
    this.partidosJugados = partidosJugados;
    this.partidosGanados = partidosGanados;
    this.partidosEmpatados = partidosEmpatados;
    this.cantidadPuntos = cantidadPuntos;
    this.campeonato = campeonato;
  }
}
