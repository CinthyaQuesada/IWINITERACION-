import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Headers, RequestOptions } from '@angular/http';
import { Http, Response } from '@angular/http'
import {jugadorservice} from '../Service/jugadorservice'
@Component({
  selector: 'app-eliminar-jugador',
  templateUrl: './eliminar-jugador.component.html',
  styleUrls: ['./eliminar-jugador.component.css']
})
export class EliminarJugadorComponent implements OnInit {

  public jugadores: Jugador[];
  public idEquipo: number ;
  constructor(private rutaActiva: ActivatedRoute, private jugadorservice: jugadorservice) {
    this.idEquipo = this.rutaActiva.snapshot.params.idEquipo;

    this.jugadorservice.getAllJugadores(this.idEquipo).subscribe(data => this.jugadores = data);
  
  }


  ngOnInit() {

    this.jugadorservice.getAllJugadores(this.idEquipo).subscribe(data => this.jugadores);





  }


  eliminar(identificacion: string) {
    console.log(identificacion);
    this.jugadorservice.eliminarJugador(identificacion).subscribe(data => this.jugadores);
    window.location.href = 'eliminarJugador/' + this.idEquipo;

  }

}
interface Jugador {
  identificacion: string;
  nombre: string;
  apellidos: string;
  fechaNacimiento: Date;
  idEquipo: number;

}
