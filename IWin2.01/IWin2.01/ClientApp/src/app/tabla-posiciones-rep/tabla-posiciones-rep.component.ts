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
    this.idEquipo = this.rutaActiva.snapshot.params.idC;

    this.http.get<Campeonato>(baseUrl + 'api/TablaPosiciones/equipo/' + this.idEquipo).subscribe(result => {
      this.c = result;
    }, error => console.error(error));
    console.log(this.idCampeonato);
    this.idCampeonato = this.c.identificador;

    this.http.get<TablaPosiciones[]>(baseUrl + 'api/TablaPosiciones/generar/' + this.idCampeonato).subscribe(result => {
      this.tablaPos = result;
    }, error => console.error(error));
    console.log(this.idCampeonato);

  }

  ngOnInit() {
    this.idEquipo = this.rutaActiva.snapshot.params.idC;

    this.http.get<Campeonato>(this.baseUrl + 'api/TablaPosiciones/equipo/' + this.idEquipo).subscribe(result => {
      this.c = result;
    }, error => console.error(error));
    console.log(this.idCampeonato);
    this.idCampeonato = this.c.identificador;

    this.http.get<TablaPosiciones[]>(this.baseUrl + 'api/TablaPosiciones/generar/' + this.idCampeonato).subscribe(result => {
      this.tablaPos = result;
    }, error => console.error(error));
    console.log(this.idCampeonato);
  }
  

}
