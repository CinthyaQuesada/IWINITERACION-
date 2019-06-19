


    export class Jugador
    {

      identificacion: string;
      nombre: string;
      apellidos: string;
      fechaNacimiento: Date;
      idEquipo: number;
      constructor(identificacion?: string, nombre?: string, apellidos?: string, fechaNacimiento?: Date, idEquipo?: number) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.identificacion = identificacion;
        this.fechaNacimiento = fechaNacimiento;
        this.idEquipo = idEquipo;
      }

    }

