import { Component, OnInit, Input, Inject } from '@angular/core';
import { SancionColectiva } from '../Domain/sancionColectiva.model';
import { Resultado } from '../Domain/resultado.model';
import { SancionColectivaService } from '../Service/sancion-colectiva.service';
import { Juego } from '../Domain/juego.model';
import { HttpClient } from '@angular/common/http';
import { Equipo } from '../Domain/Equipo.model';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-sancion-equipo',
  templateUrl: './sancion-equipo.component.html',
  styleUrls: ['./sancion-equipo.component.css']
})
export class SancionEquipoComponent implements OnInit {
  @Input() idEquipo: number;
  @Input() idJuego: number;
  equipo: Equipo;
  total: number;
  conteo: number = 0;
  tipo: string;
  motivo: string;
  id: number = 0;
  public sanciones: SancionColectiva[] = [];
  public resultadoA: Resultado;
  public sancionesExistentes: boolean;
  juego: Juego;
  datos: boolean;
  constructor(private http: HttpClient, @Inject('BASE_URL') public baseUrl: string,private SancionColectivaService: SancionColectivaService) {




  }
  sancionC: SancionColectiva;
  agregar() {


    if (this.conteo != this.total) {

      if (this.motivo != '' && this.tipo != '') {
        this.sancionC = new SancionColectiva(this.id,  this.equipo,this.idJuego, this.tipo, this.motivo);
        this.tipo = "";
        this.id++;
        this.motivo = "";
        this.sanciones.push(this.sancionC);

        this.conteo++;
        alert("Se a ingresado correctamente")
      }
      else {
        alert("Los datos no son correctos")

      }
    }
    else {

      alert("Todas las sanciones de " + this.equipo.nombreEquipo+" ya han sido registradas ")

    }
  }

  delete(id: number) {

    let sancionesTemp: SancionColectiva[] = [];
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
    this.tipo = "";
    this.motivo = "";
    this.datos = false;
    this.http.get<Equipo>(this.baseUrl + "api/resultado/equipo/" + this.idEquipo).subscribe(result => {
      this.equipo = result;
    }, error => console.error(error));

   

    this.http.get<Juego>(this.baseUrl + "api/juego/" + this.idJuego).subscribe(result => {
      this.juego = result;
    }, error => console.error(error));



    this.http.get<Resultado>(this.baseUrl + 'api/resultado/' + this.idJuego +"/"+ this.idEquipo).subscribe(result => {
      this.resultadoA = result; this.total = this.resultadoA.sancionesColectivas;
      if (this.total != 0) { this.datos = true;}
    }, error => console.error(error));
  

  }

  getTotal() {
    if (this.resultadoA != null)
    this.total = this.resultadoA.sancionesColectivas;

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
    this.datoscorrectos=true;
    for (var _i = 0; _i < this.sanciones.length; _i++) {

      if (this.sanciones[_i].tipo == "" || this.sanciones[_i].motivo == "" ) {
        this.datoscorrectos = false;

      }
      
    }
    if (this.datoscorrectos) {



    }


  }
  editar(id: number) {
    
     let sancionesTemp: SancionColectiva[] = [];
    for (var _i = 0; _i < this.sanciones.length; _i++) {

      if (this.sanciones[_i].identificador != id) {
        sancionesTemp.push(this.sanciones[_i])


      } else {
        this.conteo--;
        this.tipo = this.sanciones[_i].tipo;
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
}
