export class Resultado {
  id: number;
  idJuego: number;
  idEquipo: number;
  anotaciones: number;
  sancionesColectivas: number;
  sancionesIndividuales: number;
  constructor(id ?: number,
    idJuego?: number,
    idEquipo?: number,
    anotaciones?: number,
    sancionesColectivas?: number,
    sancionesIndividuales?: number) {

    this.id = id;
    this.idJuego = idJuego;
    this.idEquipo = idEquipo;
    this.anotaciones = anotaciones;
    this.sancionesColectivas = sancionesColectivas;
    this.sancionesIndividuales = sancionesIndividuales;


  }


}
