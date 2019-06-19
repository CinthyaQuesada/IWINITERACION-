import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { DatePipe } from '@angular/common';
import { Juego } from '../Domain/juego.model';
import { Campeonato } from '../Domain/Campeonato.model';

@Component({
  selector: 'app-gestionar-juego',
  templateUrl: './gestionar-juego.component.html',
  styleUrls: ['./gestionar-juego.component.css']
})
export class GestionarJuegoComponent {
  public campeonatos: Campeonato[];
  public juegos: Juego[];



  constructor(public http: HttpClient, @Inject('BASE_URL') public baseUrl: string) {
    http.get<Campeonato[]>(baseUrl + 'api/Campeonato').subscribe(result => {
      this.campeonatos = result;
    }, error => console.error(error));

    /*    http.get<Juego[]>(baseUrl + 'api/Juego').subscribe(result => {
      this.juegos = result;
    }, error => console.error(error));*/
  }

  buscar(identificador: number): void {
    console.log("entra en buscar" + identificador)
    this.http.get<Juego[]>(this.baseUrl + 'api/Juego/' + identificador).subscribe(result => {
      this.juegos = result;
    }, error => console.error(error));

    console.log(this.juegos[1].identificador);
  }
  cerrar(): void {
    window.location.href = "home"
  }
}


/*
interface Campeonato {
  identificador: number;
  nombreCampeonato: String;
  imagenCampeonato: ByteString;
  cantidadGrupos: number;
  fechaInicio: Date;

}

interface Juego {
  identificador: number;
  identificadorCampeonato: String;
  equipoA: String;
  equipoB: String;
  fechaJuego: Date;
  estadoJuego: boolean;
  lugar: String;
  arbitroAsignado: String;

}
interface Equipo {
  identificador: number;
  nombreEquipo: string;
  nombreRepresentante: string;
  categoria: string;
  rama: string;
  logo: string;
  canchaSede: string;
  telefonoRepresentante: string;
  constraseniaEquipo: string;
}*/
