


export class Campeonato
    {
  

  identificador: number;
  nombreCampeonato: string;
  tipo: string;
  categoria: string;
  cantidadGrupos: number;
  fechaInicio: Date;

  constructor(identificador?: number, nombreCampeonato?: string, tipo?: string, categoria?: string, cantidadGrupos?: number, fechaInicio?: Date) {
        this.cantidadGrupos = cantidadGrupos;
        this.fechaInicio = fechaInicio;
        this.nombreCampeonato = nombreCampeonato;
    this.identificador = identificador;
    this.categoria = categoria;
    this.tipo = tipo;
      }

 



    }

