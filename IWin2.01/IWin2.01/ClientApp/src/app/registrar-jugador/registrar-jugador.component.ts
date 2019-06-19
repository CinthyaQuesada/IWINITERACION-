import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { jugadorservice } from '../Service/jugadorservice';
import { Jugador } from '../Domain/Jugador.model';
import { isNullOrUndefined } from 'util';
import { Console } from '@angular/core/src/console';
@Component({
  selector: 'app-registrar-jugador',
  templateUrl: './registrar-jugador.component.html',
  styleUrls: ['./registrar-jugador.component.css']
})
export class RegistrarJugadorComponent implements OnInit {

  jugadores: Jugador[];
  idEquipo: number = 1;
  nombre: string = "";
  apellidos: string = "";
  identificacion: string;
  fechaNacimiento: Date = null;
  existente: boolean = false;
  imagen: Object;
  jugador: Jugador;
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private rutaActiva: ActivatedRoute, private jugadorservice: jugadorservice) {

  }


  ngOnInit() {

    this.idEquipo = this.rutaActiva.snapshot.params.idEquipo;



  }

  registrar() {


    this.jugadorservice.validarExistencia(this.identificacion).subscribe(data => this.jugador = data);
    if (this.jugador != null) {
      console.log("No existe")
      this.jugador = new Jugador(this.identificacion, this.nombre, this.apellidos, this.fechaNacimiento, this.idEquipo);


      this.jugadorservice.guardarJugador(this.jugador).subscribe(data => this.jugador = data);;
      window.location.href = 'registrarJugador/' + this.idEquipo;
    }
    else {

      console.log("Existe");

    }








  }

}

