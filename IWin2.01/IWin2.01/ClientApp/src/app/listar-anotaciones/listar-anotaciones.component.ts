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
  selector: 'app-listar-anotaciones',
  templateUrl: './listar-anotaciones.component.html',
  styleUrls: ['./listar-anotaciones.component.css']
})
export class ListarAnotacionesComponent implements OnInit {


  idEquipo: number = 1;
  campeonaatoSelecto: number;
  public campeonatos: Campeonato[];
  public juegos: Juego[];
  public juegosSelectos: boolean;
  anotacionC: Anotacion;
  public juego: Juego;
  resultadoA: Resultado;
  public sanciones: SancionIndividual[] = [];
  public sancionesExistentes: boolean;
  @ViewChild('actualiza') actualizarCom: AnotacionesComponent;
  @ViewChild('actualiza2') actualizarCom2: AnotacionesComponent;

  constructor(private http: HttpClient, @Inject('BASE_URL') public baseUrl: string, private anotacionService: AnotacionService) {

    this.anotacionService.getCampeonatos().subscribe(data => this.campeonatos = data);

  }

  ngOnInit() {



  }



  seleccionar() {
    this.anotacionService.getJuegos(this.campeonaatoSelecto).subscribe(data => this.juegos = data);;


    this.juegosSelectos = false;
    this.anotaciones = [];
    this.http.get<Anotacion[]>(this.baseUrl + 'api/Anotacion/campeonato/' + this.campeonaatoSelecto ).subscribe(result => {
      this.anotaciones = result;
    }, error => console.error(error));



  }


  
  
  anotaciones: Anotacion[];
  busca(entrada: string, juego: string) {
    this.anotaciones = [];


    this.http.get < Anotacion[]>(this.baseUrl + 'api/Anotacion/' + entrada + "/" + juego).subscribe(result => {
      this.anotaciones = result;
    }, error => console.error(error));



  }

}
