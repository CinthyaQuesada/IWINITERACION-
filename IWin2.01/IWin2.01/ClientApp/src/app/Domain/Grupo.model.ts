import { Equipo } from "./Equipo.model";

export class Grupo {

  grupo: string;
  equipo: Equipo;
  constructor(grupo?: string, equipo?: Equipo) {
    this.grupo = grupo;
    this.equipo = equipo;
  }
}

