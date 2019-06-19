export class Equipo
{
  identificador: number;
  nombreEquipo: string;
  nombreRepresentante: string;
  categoria: string;
  rama: string;
  logo: number;
  canchaSede: string;
  telefonoRepresentante: string;
  contraseniaEquipo: string;

  constructor(identificador?: number,
    nombreEquipo?: string,
    nombreRepresentante ?: string,
    categoria ?: string,
    rama ?: string,
    logo ?: number,
    canchaSede ?: string,
    telefonoRepresentante ?: string,
    contraseniaEquipo?: string, ) {
    this.identificador = identificador;
    this.nombreEquipo = nombreEquipo;
    this.nombreRepresentante = nombreRepresentante;
    this.categoria = categoria;
    this.rama = rama;
    this.logo = logo;
    this.canchaSede = canchaSede;
    this.telefonoRepresentante = telefonoRepresentante;
    this.contraseniaEquipo = contraseniaEquipo;





  }


    }

