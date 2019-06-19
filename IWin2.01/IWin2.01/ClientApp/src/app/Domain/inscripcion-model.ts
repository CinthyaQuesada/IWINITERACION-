import { Equipo } from "./equipo.model";
import { Campeonato } from "./Campeonato.model";

export class Inscripcion {

  identificador: number;
  equipo:Equipo;
  campeonato: Campeonato;
  fechaInscripcion: Date;

  constructor(identificador?: number, equipo?: Equipo, campeonato?: Campeonato, fechaInscripcion?: Date) {
    this.identificador= identificador;
    this.equipo = equipo;
    this.campeonato = campeonato;
    this.fechaInscripcion = fechaInscripcion;
  }

}
 
