import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Equipo } from '../Domain/Equipo.model';
import { Campeonato } from '../Domain/Campeonato.model';

@Component({
  selector: 'app-modulo-encargado',
  templateUrl: './modulo-encargado.component.html',
  styleUrls: ['./modulo-encargado.component.css']
})
export class ModuloEncargadoComponent implements OnInit {
  equipo: Equipo = new Equipo();
  nombreEquipo: string;
  idEquipo: number;
  campeonato: Campeonato = new Campeonato();
  idCampeonato: number;

 

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private rutaActiva: ActivatedRoute) {
    this.idEquipo = this.rutaActiva.snapshot.params.id;

    this.http.get<Equipo>(this.baseUrl + 'api/tablaposiciones/logineq/' + this.idEquipo).subscribe(result => {
      this.equipo = result;
    }, error => console.error(error));

    this.http.get<Campeonato>(this.baseUrl + 'api/tablaposiciones/equipo/' + this.idEquipo).subscribe(result => {
      this.campeonato = result;
    }, error => console.error(error));

  }

  ngOnInit() {
    this.idEquipo = this.rutaActiva.snapshot.params.id;

    this.http.get<Equipo>(this.baseUrl + 'api/tablaposiciones/logineq/' + this.idEquipo).subscribe(result => {
      this.equipo = result;
    }, error => console.error(error));

    this.http.get<Campeonato>(this.baseUrl + 'api/tablaposiciones/equipo/' + this.idEquipo).subscribe(result => {
      this.campeonato = result;
    }, error => console.error(error));
  }

  cerrar(): void {
    window.location.href = "home";
  }

  tabla() {
  
  

    this.idCampeonato = this.campeonato.identificador;
    window.location.href = "tabla-posiciones-rep/" + this.idEquipo;
  }

  jugadores() {
    this.idEquipo = this.equipo.identificador;
    window.location.href = "gestionarJugador/" + this.idEquipo;
  }

  equipoRep() {
    this.nombreEquipo = this.equipo.nombreEquipo;
    window.location.href = "gestionar-equipo-rep/" + this.nombreEquipo;
  }
}
