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
@Component({
  selector: 'app-anotaciones',
  templateUrl: './anotaciones.component.html',
  styleUrls: ['./anotaciones.component.css']
})
export class AnotacionesComponent implements OnInit {

  @Input() idEquipo: number;
  @Input() idJuego: number;
  equipo: Equipo;
  total: number;
  conteo: number = 0;
  cantidad: number;
 
  jugadores: Jugador[] = [];
  id: number = 0;
  public anotaciones: Anotacion[] = [];
  public resultadoA: Resultado;
  public sancionesExistentes: boolean;
  jugadorSelecto: Jugador;
  jugadorS: string;
  juego: Juego;
  datos: boolean = false;
  constructor(private http: HttpClient, @Inject('BASE_URL') public baseUrl: string, private SancionColectivaService: SancionColectivaService) {

  }
  anotacion: Anotacion;
  agregar() {

    this.conteo = this.conteo + this.cantidad;

    if (this.conteo <= this.total) {

      if (this.cantidad > 0 && this.jugadorSelecto != null) {

        if (this.ValidaJugador()) {
          this.anotacion = new Anotacion(this.id, this.equipo, this.idJuego, this.jugadorSelecto, this.cantidad);
          this.cantidad = 0;

          this.jugadorSelecto = null;
          this.id++;
          this.jugadorSel = false;
          this.anotaciones.push(this.anotacion);
          this.jugadorS = "";
          this.conteo = this.conteo + this.cantidad;
          alert("Se a ingresado correctamente")
          this.salida = "Agregar";
          this.editarB = true;
        }  }
      else {
        alert("Los datos no son correctos")
        this.conteo = this.conteo - this.cantidad;
      }
    }
    else {
      this.conteo = this.conteo - this.cantidad;

      alert("Todas las sanciones de " + this.equipo.nombreEquipo + " ya han sido registradas ")

    }
  }

  eliminar(id: number) {

    let anotacionesTemp: Anotacion[] = [];
    for (var _i = 0; _i < this.anotaciones.length; _i++) {

      if (this.anotaciones[_i].identificador != id) {
        anotacionesTemp.push(this.anotaciones[_i])


      } else {
        this.conteo--;

      }

    }
    this.anotaciones = anotacionesTemp;


  }

  ngOnInit() {
    console.log("pasaaaaaaaaaa")
    this.cantidad = 0;
    this.jugadorSelecto = null;
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
      this.resultadoA = result; this.total = this.resultadoA.anotaciones;
      if (this.total != 0) {
        this.datos = true;

      }
    }, error => console.error(error));


  }
  setidEquipo(idEquipo: number) {
    this.idEquipo = idEquipo;

  }
  getTotal() {
    if (this.resultadoA != null)
      this.total = this.resultadoA.anotaciones;

  }
  getNombre() {



    if (this.equipo != undefined) {
      return this.equipo.nombreEquipo;
    }
    else return "";
  }
  getsanciones() {

    return this.anotaciones;


  }
  datoscorrectos: boolean;

  guardar() {
    this.datoscorrectos = true;
    for (var _i = 0; _i < this.anotaciones.length; _i++) {

      if (this.anotaciones[_i].cantidadGoles == 0 || this.jugadorSelecto != null ) {
        this.datoscorrectos = false;

      }

    }
    if (this.datoscorrectos) {



    }


  }

  ValidaJugador(): boolean{
    for (var _i = 0; _i < this.anotaciones.length; _i++) {

      if (this.anotaciones[_i].jugador.identificacion == this.jugadorSelecto.identificacion) {
        alert("Ya se han registrado los goles del jugador, si desea puede editarlos");
        return false;
      }

    }


    return true;

  }

  salida: string = "Agregar";
  editarB: boolean = true;
  editar(id: number) {

    let sancionesTemp: Anotacion[] = [];
    for (var _i = 0; _i < this.anotaciones.length; _i++) {

      if (this.anotaciones[_i].identificador != id) {
        sancionesTemp.push(this.anotaciones[_i]);


      } else {
        this.salida = "Editar";
        this.editarB = false;
        this.conteo = this.conteo - this.anotaciones[_i].cantidadGoles;
        this.jugadorSel = true;
        this.jugadorSelecto = this.anotaciones[_i].jugador;
        this.cantidad = this.anotaciones[_i].cantidadGoles;
      }

    }
    this.anotaciones = sancionesTemp;
  }

  validar() {
    if (this.conteo >= this.total) {
      return true;


    }
    else return false;

  }
  jugadorSel: boolean = false;
  seleccionar() {
    if (this.jugadorS == "autogol") {
      this.jugadorSelecto = new Jugador("", "Auto Gol", "", null, null);

    }
    for (var _i = 0; _i < this.jugadores.length; _i++) {

      if (this.jugadores[_i].identificacion == this.jugadorS) {
        this.jugadorSel = true;
        this.jugadorSelecto = this.jugadores[_i];

      }
    }

  }
}
