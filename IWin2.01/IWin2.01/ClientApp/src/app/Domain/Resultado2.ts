import { Juego } from "./juego.model";
import { Equipo } from "./Equipo.model";

export class Resultado2 {
  id: number;
  juego: Juego;
  equipo: Equipo;
  anotaciones: number;
  sancionesColectivas: number;
  sancionesIndividuales: number;
  constructor(id?: number,
    idJuego?: Juego,
    idEquipo?: Equipo,
    anotaciones?: number,
    sancionesColectivas?: number,
    sancionesIndividuales?: number) {

    this.id = id;
    this.juego = idJuego;
    this.equipo = idEquipo;
    this.anotaciones = anotaciones;
    this.sancionesColectivas = sancionesColectivas;
    this.sancionesIndividuales = sancionesIndividuales;


  }


}
