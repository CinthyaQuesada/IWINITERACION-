import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-gestionar-jugador',
  templateUrl: './gestionar-jugador.component.html',
  styleUrls: ['./gestionar-jugador.component.css']
})
export class GestionarJugadorComponent implements OnInit {

 

  public jugadores: Jugador[];
  public idEquipo: number;
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private rutaActiva: ActivatedRoute) {

    this.idEquipo = this.rutaActiva.snapshot.params.idEquipo;


    http.get<Jugador[]>(baseUrl + 'api/jugador/' + this.idEquipo).subscribe(result => {
      this.jugadores = result;
    }, error => console.error(error));

  }


  ngOnInit() {

    this.idEquipo = this.rutaActiva.snapshot.params.idEquipo;




  }


}
interface Jugador {
  identificacion: string;
  nombre: string;
  apellidos: string;
  fechaNacimiento: DatePipe;
  idEquipo: number;

}
