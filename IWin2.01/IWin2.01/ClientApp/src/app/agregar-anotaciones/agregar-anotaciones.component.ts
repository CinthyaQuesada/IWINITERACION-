import { Component, OnInit, Input, ViewChild, Inject } from '@angular/core';
import { jugadorservice } from '../Service/jugadorservice';
import { Juego } from '../Domain/juego.model';
import { Campeonato } from '../Domain/Campeonato.model';
import { SancionColectiva } from '../Domain/sancionColectiva.model';
import { Resultado } from '../Domain/resultado.model';
import { HttpClient } from '@angular/common/http';
import { Equipo } from '../Domain/Equipo.model';
import { SancionIndividualService } from '../Service/sancionIndividual.service';
import { SancionIndividual } from '../Domain/sancionIndividual.model';
import { AnotacionesComponent } from '../anotaciones/anotaciones.component';
import { AnotacionService } from '../Service/anotacion.service';
import { Anotacion } from '../Domain/anotacion.model';
@Component({
  selector: 'app-agregar-anotaciones',
  templateUrl: './agregar-anotaciones.component.html',
  styleUrls: ['./agregar-anotaciones.component.css']
})
export class AgregarAnotacionesComponent implements OnInit {


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
    this.juegos = [];
    this.anotacionService.getJuegos(this.campeonaatoSelecto).subscribe(data => this.juegos = data);;


    this.juegosSelectos = false;


  }


  seleccionaJuego(juego: Juego) {
    this.juego = juego;
    this.juegosSelectos = true;
    this.actualizarCom.setidEquipo(juego.equipoA.identificador);
    this.actualizarCom2.setidEquipo(juego.equipoB.identificador);
    this.actualizarCom2.idJuego = juego.identificador;
    this.actualizarCom.idJuego = juego.identificador;
    this.actualizarCom.ngOnInit();
    this.actualizarCom2.ngOnInit();
    this.http.get<Resultado>(this.baseUrl + 'api/resultado/' + this.juego.identificador + "/" + this.idEquipo).subscribe(result => {
      this.resultadoA = result;
    }, error => console.error(error));










  }



  guardarAnotaciones() {
    if (this.actualizarCom != null) {
      if (this.actualizarCom2 != null) {
        if (this.actualizarCom.validar() && this.actualizarCom2.validar()) {
          var ans = confirm("Los datos son correctos,¿Esta de acuerdo con proceder con el registro?");
          if (ans) {

            for (var _i = 0; _i < this.actualizarCom.anotaciones.length; _i++) {
              this.anotacionService.guardarAnotacion(this.actualizarCom.anotaciones[_i]).subscribe(data => this.anotacionC = data);

            }
            for (var _i = 0; _i < this.actualizarCom2.anotaciones.length; _i++) {
              this.anotacionService.guardarAnotacion(this.actualizarCom2.anotaciones[_i]).subscribe(data => this.anotacionC = data);

            }

            window.location.reload();
          }
        }
        else {

          alert("Aun quedan sanciones por registrar");

        }
      }

    }


  }

}
