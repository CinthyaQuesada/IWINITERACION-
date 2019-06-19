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
import { equal } from 'assert';
@Component({
  selector: 'app-listar-sanciones-individuales',
  templateUrl: './listar-sanciones-individuales.component.html',
  styleUrls: ['./listar-sanciones-individuales.component.css']
})
export class ListarSancionesIndividualesComponent implements OnInit {


  idEquipo: number = 1;
  campeonaatoSelecto: number;
  public campeonatos: Campeonato[];
  public juegos: Juego[];
  public juegosSelectos: boolean;
  sancionC: SancionIndividual;
  public juego: Juego;
  resultadoA: Resultado;
  public sanciones: SancionIndividual[] = [];
  public sancionesExistentes: boolean;
  equipoSelecto: number;

  constructor(private http: HttpClient, @Inject('BASE_URL') public baseUrl: string, private anotacionService: AnotacionService) {

    this.anotacionService.getCampeonatos().subscribe(data => this.campeonatos = data);

  }

  ngOnInit() {



  }



  seleccionar() {
    this.anotacionService.getJuegos(this.campeonaatoSelecto).subscribe(data => this.juegos = data);;
    this.juegoB = false;

    this.juegosSelectos = false;
    this.sanciones = [];
    this.http.get<SancionIndividual[]>(this.baseUrl + 'api/sancionIndividual/campeonato/' + this.campeonaatoSelecto).subscribe(result => {
      this.sanciones = result;
    }, error => console.error(error));



  }




  juegoSe: string = "";
  juegoB: boolean = false;
  equipo: Equipo[];
  busca(juego: Juego) {
    this.sanciones = [];

    this.juego = juego;

    console.log(this.baseUrl + 'api/sancionIndividual/juego/' + juego.identificador)
    this.juegoB = true;
    this.http.get<SancionIndividual[]>(this.baseUrl + 'api/sancionIndividual/juego/' + juego.identificador).subscribe(result => {
      this.sanciones = result;
  
    }, error => console.error(error));
    this.http.get<Juego>(this.baseUrl + 'api/juego/hola/' + juego.identificador).subscribe(result => {
      this.juego = result;

    }, error => console.error(error));


  }

  buscaByEquipo( ) {
    this.sanciones = [];


    this.http.get<SancionIndividual[]>(this.baseUrl + 'api/sancionIndividual/equipo/' + this.equipoSelecto + "/" + this.juego.identificador).subscribe(result => {
      this.sanciones = result;
    }, error => console.error(error));



  }
  getEquipos() {

    return this.equipo;
  }
}
