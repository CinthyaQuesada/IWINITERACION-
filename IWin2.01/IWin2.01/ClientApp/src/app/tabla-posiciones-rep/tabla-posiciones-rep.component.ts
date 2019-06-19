import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { TablaPosiciones } from '../Domain/tablaPosiciones.model';
import { Campeonato } from '../Domain/Campeonato.model';

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

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private rutaActiva: ActivatedRoute) {
    this.idCampeonato = this.rutaActiva.snapshot.params.idC;

    this.http.get<TablaPosiciones[]>(baseUrl + 'api/TablaPosiciones/generar/' + this.idCampeonato).subscribe(result => {
      this.tablaPos = result;
    }, error => console.error(error));
    console.log(this.idCampeonato);

  }

  ngOnInit() {
    this.idCampeonato = this.rutaActiva.snapshot.params.idC;
    this.http.get<TablaPosiciones[]>(this.baseUrl + 'api/TablaPosiciones/generar/' + this.idCampeonato).subscribe(result => {
      this.tablaPos = result;
    }, error => console.error(error));
    console.log(this.idCampeonato);
  }
  

}
