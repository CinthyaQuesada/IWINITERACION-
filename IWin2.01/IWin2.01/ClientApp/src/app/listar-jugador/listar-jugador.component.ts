import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { jugadorservice } from '../Service/jugadorservice';
@Component({
  selector: 'app-listar-jugador',
  templateUrl: './listar-jugador.component.html',
  styleUrls: ['./listar-jugador.component.css']
})
export class ListarJugadorComponent {
  public jugadores: Jugador[];
  public idEquipo: number = 1;
  public nombre: string='';
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private rutaActiva: ActivatedRoute, private jugadorService: jugadorservice) {


    this.idEquipo = this.rutaActiva.snapshot.params.idEquipo;


    http.get<Jugador[]>(baseUrl + 'api/jugador/' + this.idEquipo).subscribe(result => {
      this.jugadores = result;
    }, error => console.error(error));

  }


  ngOnInit() {

    this.idEquipo = this.rutaActiva.snapshot.params.idEquipo;
 
   


  }




  filtrar() {
    this.jugadores = [];
    this.nombre.trim();
    if (this.nombre != '') {
     

      this.jugadorService.filtrar(this.idEquipo, this.nombre).subscribe(data => this.jugadores);;

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



  getjugadores() {
    return this.jugadores;

  }





}



interface Jugador {
  identificacion: string;
  nombre: string;
  apellidos: string;
  fechaNacimiento: DatePipe;
  idEquipo: number;

}

