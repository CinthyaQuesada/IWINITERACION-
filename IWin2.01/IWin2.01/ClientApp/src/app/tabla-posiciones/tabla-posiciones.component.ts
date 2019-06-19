import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { TablaPosiciones } from '../Domain/tablaPosiciones.model';
import { Campeonato } from '../Domain/Campeonato.model';

@Component({
  selector: 'app-tabla-posiciones',
  templateUrl: './tabla-posiciones.component.html',
  styleUrls: ['./tabla-posiciones.component.css']
})
export class TablaPosicionesComponent implements OnInit {
  public tablaPos: TablaPosiciones[] = new Array();
  public campeonatos: Campeonato[] = new Array();
  public tabla: TablaPosiciones = new TablaPosiciones();
  public idEquipo: number;
  public idCampeonato: number;
  public url: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private rutaActiva: ActivatedRoute) {
   
    this.http.get<Campeonato[]>(baseUrl + 'api/TablaPosiciones/').subscribe(result => {
      this.campeonatos = result;
    }, error => console.error(error));
    console.log(this.idCampeonato);

  }

  ngOnInit() {
    this.idCampeonato = this.rutaActiva.snapshot.params.idCamp;
  }
  generar() {
    this.http.get<TablaPosiciones[]>(this.baseUrl + 'api/TablaPosiciones/generar/' + this.idCampeonato).subscribe(result => {
      this.tablaPos = result;
    }, error => console.error(error));
    

  }
}
