import { Component, OnInit, Input, ViewChild, Inject } from '@angular/core';
import { jugadorservice } from '../Service/jugadorservice';
import { Juego } from '../Domain/juego.model';
import { Campeonato } from '../Domain/Campeonato.model';
import { SancionEquipoComponent } from '../sancion-equipo/sancion-equipo.component';
import { SancionColectiva } from '../Domain/sancionColectiva.model';
import { Resultado } from '../Domain/resultado.model';
import { HttpClient } from '@angular/common/http';
import { Equipo } from '../Domain/Equipo.model';
import { SancionIndividualService } from '../Service/sancionIndividual.service';
import { SancionIndividual } from '../Domain/sancionIndividual.model';
import { SancionIndividualComponent } from '../sancion-individual/sancion-individual.component';
import { AnotacionesComponent } from '../anotaciones/anotaciones.component';
import { AnotacionService } from '../Service/anotacion.service';
import { Anotacion } from '../Domain/anotacion.model';
@Component({
  selector: 'app-listar-sanciones-colectivas',
  templateUrl: './listar-sanciones-colectivas.component.html',
  styleUrls: ['./listar-sanciones-colectivas.component.css']
})
export class ListarSancionesColectivasComponent implements OnInit {


  idEquipo: number = 1;
  campeonaatoSelecto: number;
  public campeonatos: Campeonato[];
  public juegos: Juego[];
  public juegosSelectos: boolean;
  sancionC: SancionColectiva;
  public juego: Juego;
  resultadoA: Resultado;
  public sanciones: SancionColectiva[] = [];
  public sancionesExistentes: boolean;


  constructor(private http: HttpClient, @Inject('BASE_URL') public baseUrl: string, private anotacionService: AnotacionService) {

    this.anotacionService.getCampeonatos().subscribe(data => this.campeonatos = data);
    this.juegosSelectos = false;
    this.sanciones = [];
    this.sancionesB = false;

    this.juego = new Juego();
  }

  ngOnInit() {
    this.juego = new Juego();
    this.juegosSelectos = false;
    this.sanciones = [];
    this.sancionesB = false;

  }



  seleccionar() {
    this.anotacionService.getJuegos(this.campeonaatoSelecto).subscribe(data => this.juegos = data);;
    this.juego = new Juego();
    this.juegoB = false;
    this.juegosSelectos = false;
    this.sanciones = [];
    this.http.get<SancionColectiva[]>(this.baseUrl + 'api/sancion/campeonato/' + this.campeonaatoSelecto).subscribe(result => {
      this.sanciones = result;
      this.sancionesB = true;
    }, error => console.error(error));



  }

  sancionesB: boolean;
  juegoB: boolean;


  busca(juego: Juego) {
    this.sanciones = [];
    this.juego = juego;
    this.juegoB=true;
    this.http.get<SancionColectiva[]>(this.baseUrl + 'api/sancion/' + juego.identificador).subscribe(result => {
      this.sanciones = result;
      this.sancionesB = true;

    }, error => console.error(error));



  }
  getSanciones() {

    return this.sanciones;
  }

}
