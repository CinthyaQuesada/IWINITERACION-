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
    this.nombreEquipo = this.rutaActiva.snapshot.params.nombre;
    this.http.get<Equipo>(this.baseUrl + 'api/tablaposiciones/buscar/' + this.nombreEquipo).subscribe(result => {
      this.equipo = result;
    }, error => console.error(error));

  }

  ngOnInit() {

  }

  cerrar(): void {
    window.location.href = "home";
  }

  tabla() {
    this.idEquipo = this.equipo.identificador;
    this.http.get<Campeonato>(this.baseUrl + 'api/tablaposiciones/equipo/' + this.idEquipo).subscribe(result => {
      this.campeonato = result;
    }, error => console.error(error));
    this.idCampeonato = this.campeonato.identificador;
    window.location.href = "tabla-posciones-rep/" + this.idCampeonato;
  }

  jugadores() {
    this.idEquipo = this.equipo.identificador;
    window.location.href = "gestionarJuego/" + this.idEquipo;
  }

  equipoRep() {
    window.location.href = "gestionar-equipo-rep/" + this.nombreEquipo;
  }
}
