import { Component, OnInit, Input, Inject } from '@angular/core';
import { Resultado } from '../Domain/resultado.model';
import { SancionColectivaService } from '../Service/sancion-colectiva.service';
import { Juego } from '../Domain/juego.model';
import { HttpClient } from '@angular/common/http';
import { Equipo } from '../Domain/Equipo.model';
import { Alert } from 'selenium-webdriver';
import { Jugador } from '../Domain/Jugador.model';
import { SancionIndividual } from '../Domain/sancionIndividual.model';


@Component({
  selector: 'app-sancion-individual',
  templateUrl: './sancion-individual.component.html',
  styleUrls: ['./sancion-individual.component.css']
})
export class SancionIndividualComponent implements OnInit {

  @Input() idEquipo: number;
  @Input() idJuego: number;
  equipo: Equipo;
  total: number;
  conteo: number = 0;
  castigo: string;
  tarjeta: string;
  motivo: string;
  jugadores: Jugador[] = [];
  id: number = 0;
  public sanciones: SancionIndividual[] = [];
  public resultadoA: Resultado;
  public sancionesExistentes: boolean;
  jugadorSelecto: Jugador;
  jugadorS: string;
  juego: Juego;
  datos: boolean = false;
  constructor(private http: HttpClient, @Inject('BASE_URL') public baseUrl: string, private SancionColectivaService: SancionColectivaService) {

  }
  sancionI: SancionIndividual;
  agregar() {


    if (this.conteo != this.total) {

      if (this.motivo != '' && this.castigo != '' && this.tarjeta != '' && this.jugadorSelecto != null) {
        console.log(this.jugadorSelecto.nombre)
        this.sancionI = new SancionIndividual(this.id, this.equipo, this.idJuego, this.jugadorSelecto, this.tarjeta, this.motivo, this.castigo);
        this.castigo = "";
        this.tarjeta = "";
        this.motivo = "";
        this.jugadorSelecto = null;
        this.id++;
        this.jugadorSel = false;
        this.sanciones.push(this.sancionI);

        this.conteo++;
        alert("Se a ingresado correctamente")
      }
      else {
        alert("Los datos no son correctos")

      }
    }
    else {

      alert("Todas las sanciones de " + this.equipo.nombreEquipo + " ya han sido registradas ")

    }
  }

  delete(id: number) {

    let sancionesTemp: SancionIndividual[] = [];
    for (var _i = 0; _i < this.sanciones.length; _i++) {

      if (this.sanciones[_i].identificador != id) {
        sancionesTemp.push(this.sanciones[_i])


      } else {
        this.conteo--;

      }

    }
    this.sanciones = sancionesTemp;


  }

  ngOnInit() {
    this.castigo = "";
    this.motivo = "";
    this.jugadorSelecto = null;
    this.tarjeta = "";
    this.datos = false;
    this.http.get<Equipo>(this.baseUrl + "api/resultado/equipo/" + this.idEquipo).subscribe(result => {
      this.equipo = result;
    }, error => console.error(error));

    this.http.get<Jugador[]>(this.baseUrl + 'api/jugador/' + this.idEquipo).subscribe(result => {
      this.jugadores = result;
    }, error => console.error(error));

    this.http.get<Juego>(this.baseUrl + "api/juego/" + this.idJuego).subscribe(result => {
      this.juego = result;
    }, error => console.error(error));



    this.http.get<Resultado>(this.baseUrl + 'api/resultado/' + this.idJuego + "/" + this.idEquipo).subscribe(result => {
      this.resultadoA = result; this.total = this.resultadoA.sancionesIndividuales;
      if (this.total != 0) { this.datos = true; }
    }, error => console.error(error));


  }

  getTotal() {
    if (this.resultadoA != null)
      this.total = this.resultadoA.sancionesIndividuales;

  }
  getNombre() {



    if (this.equipo != undefined) {
      return this.equipo.nombreEquipo;
    }
    else return "";
  }
  getsanciones() {

    return this.sanciones;


  }
  setidEquipo(idEquipo: number) {
    this.idEquipo = idEquipo;

  }
  datoscorrectos: boolean;
  guardar() {
    this.datoscorrectos = true;
    for (var _i = 0; _i < this.sanciones.length; _i++) {

      if (this.sanciones[_i].castigo == "" || this.sanciones[_i].motivo == "" || this.jugadorSelecto != null || this.tarjeta != "") {
        this.datoscorrectos = false;

      }

    }
    if (this.datoscorrectos) {



    }


  }
  editar(id: number) {

    let sancionesTemp: SancionIndividual[] = [];
    for (var _i = 0; _i < this.sanciones.length; _i++) {

      if (this.sanciones[_i].identificador != id) {
        sancionesTemp.push(this.sanciones[_i])


      } else {
        this.conteo--;
        this.tarjeta = this.sanciones[_i].tarjeta;
        this.jugadorSel = true;
        this.jugadorSelecto = this.sanciones[_i].jugador;
        this.castigo = this.sanciones[_i].castigo;
        this.motivo = this.sanciones[_i].motivo;
      }

    }
    this.sanciones = sancionesTemp;
  }

  validar() {
    if (this.conteo == this.total) {
      return true;


    }
    else return false;

  }
  jugadorSel: boolean = false;
  seleccionar() {

    for (var _i = 0; _i < this.jugadores.length; _i++) {

      if (this.jugadores[_i].identificacion == this.jugadorS) {
        this.jugadorSel = true;
        this.jugadorSelecto = this.jugadores[_i];

      }
    }

  }


  ajustarFechas() {


  }

}
