import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Headers, RequestOptions } from '@angular/http';
import { Http, Response } from '@angular/http'
import {jugadorservice} from '../Service/jugadorservice'
import { Jugador } from '../Domain/Jugador.model';
@Component({
  selector: 'app-eliminar-jugador',
  templateUrl: './eliminar-jugador.component.html',
  styleUrls: ['./eliminar-jugador.component.css']
})
export class EliminarJugadorComponent implements OnInit {

  public jugadores: Jugador[];
  public idEquipo: number ;
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private rutaActiva: ActivatedRoute, private jugadorservice: jugadorservice) {
    this.idEquipo = this.rutaActiva.snapshot.params.idEquipo;

    this.jugadorservice.getAllJugadores(this.idEquipo).subscribe(data => this.jugadores = data);
  
  }


  ngOnInit() {

    this.jugadorservice.getAllJugadores(this.idEquipo).subscribe(data => this.jugadores);





  }
  public nombre: string = '';
  filtrar() {
    this.jugadores = [];
    this.nombre.trim();
    if (this.nombre != '') {


      this.jugadorservice.filtrar(this.idEquipo, this.nombre).subscribe(data => this.jugadores);;

      this.http.get<Jugador[]>(this.baseUrl + 'api/jugador/buscar/' + this.idEquipo + "/" + this.nombre).subscribe(result => {
        this.jugadores = result;
      }, error => console.error(error));


    }
    else {

      this.http.get<Jugador[]>(this.baseUrl + 'api/jugador/' + this.idEquipo).subscribe(result => {
        this.jugadores = result;
      }, error => console.error(error));


    }




  }


  eliminar(identificacion: Jugador) {

    var ans = confirm("Los datos son correctos,¿Esta seguro de eliminar " + identificacion.nombre + "  " + identificacion.apellidos +" ? " );
    if (ans) {
      console.log(identificacion);
      this.jugadorservice.eliminarJugador(identificacion.identificacion).subscribe(data => this.jugadores);
      window.location.href = 'eliminarJugador/' + this.idEquipo;
    }
  }

  getjugadores() {
    return this.jugadores;

  }


}
