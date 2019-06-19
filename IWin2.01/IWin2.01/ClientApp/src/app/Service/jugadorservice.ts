import { Injectable, Inject } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http'
import {  Response } from '@angular/http';

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { DatePipe } from '@angular/common';


@Injectable()
export class jugadorservice {
 
  constructor(private http: Http, @Inject('BASE_URL') public url: string) {

  }


  guardarJugador(jugador: Jugador): Observable<Jugador> {
    let body = jugador;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url + 'api/jugador/', body, options).map(this.extractData);




  }




  validarExistencia(id: string): Observable<Jugador> {

    return this.http.get(this.url + "api/jugador/existe/" + id).map(response => response.json());

  }


  buscarJugadorByNombre(nombre: string): Observable<Jugador[]> {

    return this.http.get(this.url + "api/jugador/buscar/" + nombre).map(response => response.json());

  }



  getAllJugadores(idEquipo: number): Observable<Jugador[]> {

    return this.http.get( this.url, idEquipo+"").map(response => response.json());

  }

   filtrar(idEquipo: number, nombre: string): Observable<Jugador[]> {
    console.log(this.url + "api/jugador/buscar/" + idEquipo + "/" + nombre)
    return this.http.get(this.url+"api/jugador/buscar/"+ idEquipo + "/"+nombre).map(response => response.json());

  }
 

  actualizarJugador(jugador: Jugador): Observable<Jugador> {
    return this.http.put(this.url + 'api/jugador/' + jugador.identificacion, jugador).map(response => response.json());

  }

  eliminarJugador(identificacion: string): Observable<Jugador> {


    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.delete(this.url + 'api/jugador/' + identificacion, options).map(response => response.json());
  }
    private extractData(res: Response) {
        let body = res.json();
        return body.fields || {};
    }

}
interface Jugador {
  identificacion: string;
  nombre: string;
  apellidos: string;
  fechaNacimiento: Date;
  idEquipo: number;

}
