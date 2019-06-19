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
import { ResumenComponent } from '../resumen/resumen.component';
import { Resultado2 } from '../Domain/Resultado2';
@Component({
  selector: 'app-administrar-resumen',
  templateUrl: './administrar-resumen.component.html',
  styleUrls: ['./administrar-resumen.component.css']
})
export class AdministrarResumenComponent implements OnInit {


  idEquipo: number = 1;
  campeonaatoSelecto: number;
  public campeonatos: Campeonato[];
  public juegos: Juego[];
  public juegosSelectos: boolean;
  anotacionC: Resultado2;
  public juego: Juego;
 
  @ViewChild('actualiza') actualizarCom: ResumenComponent;
  @ViewChild('actualiza2') actualizarCom2: ResumenComponent;

  constructor(private http: HttpClient, @Inject('BASE_URL') public baseUrl: string, private anotacionService: AnotacionService) {

    this.anotacionService.getCampeonatos().subscribe(data => this.campeonatos = data);

  }

  ngOnInit() {



  }



  seleccionar() {
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










  }



  guardarAnotaciones() {
    if (this.actualizarCom != null) {
      if (this.actualizarCom2 != null) {
        if (this.actualizarCom.validar() && this.actualizarCom2.validar()) {
          var ans = confirm("Los datos son correctos,¿Esta de acuerdo con proceder con el registro?");
          if (ans) {

    
              this.anotacionService.guardarResultado(this.actualizarCom.resumen).subscribe(data => this.anotacionC = data);
            
            

              this.anotacionService.guardarResultado(this.actualizarCom2.resumen).subscribe(data => this.anotacionC = data);

            

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
