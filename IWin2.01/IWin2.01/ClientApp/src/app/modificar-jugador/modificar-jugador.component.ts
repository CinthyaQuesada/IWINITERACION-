import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ActualizarJugadorComponent } from '../actualizar-jugador/actualizar-jugador.component';
import { Jugador } from '../Domain/Jugador.model';
import { jugadorservice } from '../Service/jugadorservice';
import { Http } from '@angular/http';



@Component({
  selector: 'app-modificar-jugador',
  templateUrl: './modificar-jugador.component.html',
  styleUrls: ['./modificar-jugador.component.css']
})
export class ModificarJugadorComponent implements OnInit {

  public jugadores: Jugador[];
  public idEquipo: number = 1;
  public seleccionado: boolean;
  public jugador: string;
  public nombre: string;
  @ViewChild('actualiza') actualizarCom: ActualizarJugadorComponent;


  constructor(private http: HttpClient, @Inject('BASE_URL') public baseUrl: string, private rutaActiva: ActivatedRoute, private jugadorservice: jugadorservice) {


    this.idEquipo = this.rutaActiva.snapshot.params.idEquipo;

    this.http.get<Jugador[]>(this.baseUrl + 'api/jugador/' + this.idEquipo).subscribe(result => {
      this.jugadores = result;
    }, error => console.error(error));

  }

  ngOnInit() {

    this.idEquipo = this.rutaActiva.snapshot.params.idEquipo;




  }


  public actualizar(jugadorA: string) {
    console.log(jugadorA)
    this.seleccionado = true;
    this.jugador = jugadorA;
    if (this.actualizarCom != null) {


      this.actualizarCom.modificar(jugadorA);
    }
  }

  filtrar() {
    this.jugadores =[];
   
    this.jugadorservice.filtrar(this.idEquipo,this.nombre).subscribe(data => this.jugadores);;

    this.http.get<Jugador[]>(this.baseUrl + 'api/jugador/buscar/' + this.idEquipo + "/" + this.nombre).subscribe(result => {
      this.jugadores = result;
    }, error => console.error(error));




  }

  getjugadores() {
    return this.jugadores;

  }



}



