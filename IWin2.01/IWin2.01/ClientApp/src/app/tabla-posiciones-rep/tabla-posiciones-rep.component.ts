import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { TablaPosiciones } from '../Domain/tablaPosiciones.model';
import { Campeonato } from '../Domain/Campeonato.model';
import { Equipo } from '../Domain/Equipo.model';

@Component({
  selector: 'app-tabla-posiciones-rep',
  templateUrl: './tabla-posiciones-rep.component.html',
  styleUrls: ['./tabla-posiciones-rep.component.css']
})

export class TablaPosicionesRepComponent implements OnInit {
  public tablaPos: TablaPosiciones[] = new Array();
  public campeonatos: Campeonato[] = new Array();
  public tabla: TablaPosiciones = new TablaPosiciones();
  public idEquipo: number;
  public idCampeonato: number;
  public url: string;
  public eq: Equipo = new Equipo();
  public c: Campeonato = new Campeonato();

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private rutaActiva: ActivatedRoute) {
    this.idEquipo = this.rutaActiva.snapshot.params.id
    this.http.get<Campeonato[]>(this.baseUrl + 'api/TablaPosiciones/camp/' + this.idEquipo).subscribe(result => {
      this.campeonatos = result;
    }, error => console.error(error));

    this.http.get<Equipo>(this.baseUrl + 'api/TablaPosiciones/logineq/' + this.idEquipo).subscribe(result => {
      this.eq = result;
    }, error => console.error(error));


  }

  ngOnInit() {
    this.idEquipo = this.rutaActiva.snapshot.params.id;
    this.http.get<Campeonato[]>(this.baseUrl + 'api/TablaPosiciones/camp/' + this.idEquipo).subscribe(result => {
      this.campeonatos = result;
    }, error => console.error(error));
  }
  
  generar() {
    this.idCampeonato = this.campeonatos[0].identificador;
    this.http.get<TablaPosiciones[]>(this.baseUrl + 'api/TablaPosiciones/generar/' + this.idCampeonato).subscribe(result => {
      this.tablaPos = result;
    }, error => console.error(error));
  }
  

}
