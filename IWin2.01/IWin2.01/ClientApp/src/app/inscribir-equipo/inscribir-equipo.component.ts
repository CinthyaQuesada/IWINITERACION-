import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';
import { InscripcionService } from '../Service/inscripcion.service';

import { Equipo } from '../Domain/Equipo.model';
import { Inscripcion } from '../Domain/inscripcion-model';
import { Campeonato } from '../Domain/Campeonato.model';


@Component({
  selector: 'app-inscribir-equipo',
  templateUrl: './inscribir-equipo.component.html',
  styleUrls: ['./inscribir-equipo.component.css']
})
export class InscribirEquipoComponent implements OnInit {
  public nombreEquipo: string;
  public nombre: string;
  public identificadorEquipo: number;
  public identificadorCampeonato: number;
  public fechaInscripcion: Date;
  public campeonatos: Campeonato[];
  public equipos: Equipo[] = new Array<Equipo>();

  public inscripcion: Inscripcion = new Inscripcion();
  public inscripcion2: Inscripcion = new Inscripcion();
  public inscripcionV: Inscripcion[] = new Array<Inscripcion>();
  public campeonato: Campeonato = new Campeonato();
  public equipo: Equipo = new Equipo();


  constructor(private rutaActiva: ActivatedRoute, private service: InscripcionService, @Inject('BASE_URL') private baseUrl: string, private http: HttpClient) {
    this.nombre = this.rutaActiva.snapshot.params.idEquipo;
    this.nombreEquipo = this.nombre;

    this.http.get<Campeonato[]>(baseUrl + 'api/inscripcion/' + this.nombre).subscribe(result => {
      this.campeonatos = result;
    }, error => console.error(error));
  }

  inscribirEquipo() {
 
    this.campeonato.identificador = this.identificadorCampeonato;
    this.equipo = this.equipos[0];
    this.identificadorEquipo = this.equipo.identificador;
    this.inscripcion2 = this.inscripcionV[0];
    if (this.campeonato.identificador != null && this.equipo.identificador != null && this.fechaInscripcion) {
      if (this.inscripcion2 != null) {
        alert("No puede inscribir el equipo " + this.nombre + ", este equipo ya se encuentra inscrito");
      }
      else {
        this.inscripcion = new Inscripcion(1, this.equipo, this.campeonato, this.fechaInscripcion);
        this.service.insertarInscripcion(this.inscripcion).subscribe(data => this.equipos);
        alert("El equipo " + this.nombre + " fue inscrito exitosamente");
      }
    } else {
      alert("Debe rellenar y selccionar todos los espacios del formulario" );
    }
    
   

  }

  listaCampeonatos() {
    this.nombreEquipo = this.nombre;
    return this.campeonatos;
  }

  comprobarInscripcion() {

  }


  ngOnInit() {
    this.nombre = this.rutaActiva.snapshot.params.nombre;
    this.service.equipos(this.nombre).subscribe(data => this.equipos = data);
    this.service.infIns(this.nombre).subscribe(data => this.inscripcionV = data);
    this.nombreEquipo = this.nombre;
    

  }
   
  regresar() {
    this.equipo = this.equipos[0];
    this.identificadorEquipo = this.equipo.identificador;
    window.location.href = "moduloEncargado/" + this.identificadorEquipo;
  }

}
