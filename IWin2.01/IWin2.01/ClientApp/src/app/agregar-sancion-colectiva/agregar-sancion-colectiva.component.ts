import { Component, OnInit, Input, ViewChild, Inject } from '@angular/core';
import { jugadorservice } from '../Service/jugadorservice';
import { SancionColectivaService } from '../Service/sancion-colectiva.service';
import { Juego } from '../Domain/juego.model';
import { Campeonato } from '../Domain/Campeonato.model';
import { SancionEquipoComponent } from '../sancion-equipo/sancion-equipo.component';
import { SancionColectiva } from '../Domain/sancionColectiva.model';
import { Resultado } from '../Domain/resultado.model';
import { HttpClient } from '@angular/common/http';
import { Equipo } from '../Domain/Equipo.model';

@Component({
  selector: 'app-agregar-sancion-colectiva',
  templateUrl: './agregar-sancion-colectiva.component.html',
  styleUrls: ['./agregar-sancion-colectiva.component.css']
})
export class AgregarSancionColectivaComponent implements OnInit {
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
  @ViewChild('actualiza') actualizarCom: SancionEquipoComponent;
  @ViewChild('actualiza2') actualizarCom2: SancionEquipoComponent;

  constructor(private http: HttpClient, @Inject('BASE_URL') public baseUrl: string, private SancionColectivaService: SancionColectivaService) {

    this.SancionColectivaService.getCampeonatos().subscribe(data => this.campeonatos = data);

  }

  ngOnInit() {



  }



  seleccionar() {
    this.SancionColectivaService.getJuegos(this.campeonaatoSelecto).subscribe(data => this.juegos = data);;


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

  getsanciones() {
    for (var _i = 0; _i < this.resultadoA.sancionesColectivas; _i++) {

      this.sanciones.push(new SancionColectiva());
    }
    return this.sanciones;

  }


  guardarSanciones() {
    if (this.actualizarCom != null) {
      if (this.actualizarCom2 != null) {
        if (this.actualizarCom.validar() && this.actualizarCom2.validar()) {
          var ans = confirm("Los datos son correctos,¿Esta de acuerdo con proceder con el registro?");
          if (ans) {

            for (var _i = 0; _i < this.actualizarCom.sanciones.length; _i++) {
              this.SancionColectivaService.guardarSancion(this.actualizarCom.sanciones[_i]).subscribe(data => this.sancionC = data);

            }
            for (var _i = 0; _i < this.actualizarCom2.sanciones.length; _i++) {
              this.SancionColectivaService.guardarSancion(this.actualizarCom2.sanciones[_i]).subscribe(data => this.sancionC = data);

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


