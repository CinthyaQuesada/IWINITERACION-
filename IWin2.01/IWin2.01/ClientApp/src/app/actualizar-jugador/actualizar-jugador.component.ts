import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Jugador } from '../Domain/Jugador.model';
import { jugadorservice } from '../Service/jugadorservice';
import { Console } from '@angular/core/src/console';

@Component({
  selector: 'app-actualizar-jugador',
  templateUrl: './actualizar-jugador.component.html',
  styleUrls: ['./actualizar-jugador.component.css']
})
export class ActualizarJugadorComponent implements OnInit {
  @Input() identificacion: string;

  public jugador: Jugador;
  constructor(private jugadorservice: jugadorservice) {


  }

  ngOnInit() {
    this.jugadorservice.validarExistencia(this.identificacion).subscribe(data => this.jugador = data);

  }

  public modificar(jugador: string) {

 
    this.jugadorservice.validarExistencia(jugador).subscribe(data => this.jugador = data);


  }

  public actualiza() {


    this.jugadorservice.actualizarJugador(this.jugador).subscribe(data => this.jugador = data);
    window.location.reload();


  }




}
