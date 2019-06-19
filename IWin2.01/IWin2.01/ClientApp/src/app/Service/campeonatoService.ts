import { Injectable, Inject } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http'
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { DatePipe } from '@angular/common';
import { Campeonato } from '../Domain/Campeonato.model';

@Injectable()
export class campeonatoService {
  private url = 'https://localhost:44396/';
  constructor(private http: Http, public htp: HttpClient, @Inject('BASE_URL') public baseUrl: string) {

  }


  agregarCampeonato(campeonato: Campeonato): Observable<Campeonato> {
    console.log(campeonato.categoria+"  --1");
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.baseUrl + 'api/campeonato/', campeonato, options).map(this.extractData);

  }

  private extractData(res: Response) {
    let body = res.json();
    return body.fields || {};
  }
  modificar(campeonato: Campeonato): Observable<Campeonato> {
    console.log(campeonato.tipo + "--" + campeonato.categoria)
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.baseUrl + 'api/campeonato/', campeonato, options).map(this.extractData);

  }

  eliminarCampeonato(identificador: number): Observable<Campeonato> {


    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.delete(this.baseUrl + 'api/campeonato/' + identificador, options).map(response => response.json());
  }

}
