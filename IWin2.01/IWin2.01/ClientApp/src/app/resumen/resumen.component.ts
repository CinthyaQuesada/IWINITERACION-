import { Component, OnInit, Input, Inject } from '@angular/core';
import { Resultado } from '../Domain/resultado.model';
import { SancionColectivaService } from '../Service/sancion-colectiva.service';
import { Juego } from '../Domain/juego.model';
import { HttpClient } from '@angular/common/http';
import { Equipo } from '../Domain/Equipo.model';
import { Alert } from 'selenium-webdriver';
import { Jugador } from '../Domain/Jugador.model';
import { SancionIndividual } from '../Domain/sancionIndividual.model';
import { Anotacion } from '../Domain/anotacion.model';
import { NoopInterceptor } from '@angular/common/http/src/interceptor';
import { Resultado2 } from '../Domain/Resultado2';
@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

  @Input() idEquipo: number;
  @Input() idJuego: number;
  equipo: Equipo;
  total: number;
  conteo: number = 0;
  colectivas: number;
  individuales: number;
  anotaciones: number;
  id: number = 0;
  public resultadoA: Resultado2;
  public sancionesExistentes: boolean;
  jugadorSelecto: Jugador;
  jugadorS: string;
  juego: Juego;
  datos: boolean = false;
  constructor(private http: HttpClient, @Inject('BASE_URL') public baseUrl: string, private SancionColectivaService: SancionColectivaService) {

  }
  resumen: Resultado2;
 
  getNombre() {



    if (this.equipo != undefined) {
      return this.equipo.nombreEquipo;
    }
    else return "";
  }
  validar() {
    this.resumen = new Resultado2(1, new Juego(this.idJuego), new Equipo(this.idEquipo), this.anotaciones, this.colectivas, this.individuales);
      return true;


  


  }
  ngOnInit() {
    console.log("pasaaaaaaaaaa")
    this.anotaciones = 0;
    this.individuales = 0;
    this.colectivas = 0;
    

    this.http.get<Equipo>(this.baseUrl + "api/resultado/equipo/" + this.idEquipo).subscribe(result => {
      this.equipo = result;
    }, error => console.error(error));

   
    this.http.get<Juego>(this.baseUrl + "api/juego/" + this.idJuego).subscribe(result => {
      this.juego = result;
    }, error => console.error(error));

    

  }

  setidEquipo(idEquipo: number) {
    this.idEquipo = idEquipo;

  }
  
 
  getsanciones() {

    return this.anotaciones;


  }

  
  
 
}
