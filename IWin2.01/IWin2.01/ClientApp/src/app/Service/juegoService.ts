import { Injectable, Inject } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http'
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { DatePipe } from '@angular/common';
import { Campeonato } from '../Domain/Campeonato.model';
import { Juego } from '../Domain/juego.model';
import { Fecha } from '../Domain/fecha.model';

@Injectable()
export class juegoService {
  private url = 'https://localhost:44396/';
  private juegos: Juego[] = new Array<Juego>();
  private fechas: Fecha[] = new Array<Fecha>();
  public juego: Juego = new Juego();


  constructor(private http: Http, public htp: HttpClient, @Inject('BASE_URL') public baseUrl: string) {

  }

  public getFechas(cantidad: number, fecha: Date): Observable<Fecha[]> {
    console.log(this.baseUrl + 'api/juego/' + cantidad + '/2019-06-19');
    return this.http.get(this.baseUrl + 'api/juego/' + cantidad + '/2019-06-19').map(response => response.json());

  }

  buscarJuego(identificador: number): Observable<Juego> {

    return this.http.get(this.baseUrl + "api/juego/" + identificador).map(response => response.json());

  }

  actualizarJuego(juego: Juego): Observable<Juego> {
    return this.http.put(this.baseUrl + 'api/jugador/' + juego.identificador, juego).map(response => response.json());

  }

  actualizar(juego: Juego): Observable<Juego> {
    console.log(this.baseUrl + 'api/Juego/');
    /*let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.url + 'api/Juego/', juego, options).map(this.extractData);*/
    return this.http.put(this.baseUrl + 'api/Juego/' + juego.identificador, juego).map(response => response.json());

  }

  agregarCampeonato(campeonato: Campeonato): Observable<Campeonato> {
    console.log(campeonato.categoria + "  --1");
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.baseUrl + 'api/campeonato/', campeonato, options).map(this.extractData);

  }

  agregarJuego(campeonato: Juego): Observable<Juego> {
    //console.log(campeonato.categoria + "  --1");
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.baseUrl + 'api/campeonato/', campeonato, options).map(this.extractData);

  }

  agregarJuegos(juego: Juego): Observable<Juego> {
  
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    console.log();
    //return this.http.post(this.baseUrl + 'api/juego/', juego, options).map(this.extractData);
    return this.http.post(this.baseUrl + 'api/Juego/' + juego, juego).map(response => response.json());
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.fields || {};
  }


}
