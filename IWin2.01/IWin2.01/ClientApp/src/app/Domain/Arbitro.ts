export class Arbitro {
  identificacion: string;
  nombre: string;
  apellidos: string;
  categoria: string;
  telefono: string;


  constructor(identificacion?: string, nombre?: string, apellidos?: string, categoria?: string, telefono?: string) {
    this.identificacion = identificacion;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.categoria = categoria;
    this.telefono = telefono;
  }
}
