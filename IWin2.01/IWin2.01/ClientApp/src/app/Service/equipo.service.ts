import { Injectable,Inject } from "@angular/core";

import { Http,Response} from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { Headers, RequestOptions } from '@angular/http';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Equipo } from "../Domain/Equipo.model";




@Injectable()
export class EquipoService {
  private url = '';

  private equipo: Equipo;
  
  constructor(private http:Http, @Inject('BASE_URL') baseUrl: string) { 
    this.url = baseUrl;
  }

  


  /*----------------------ELIMINAR EQUIPO--------------------------*/
  eliminarEquipo(id: number): Observable<Equipo> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(this.url + 'api/equipo/' + id, options).map(response => response.json());
  }
  

  /*----------------------INSERTAR EQUIPO--------------------------*/
  insertarEquipo(equipo: Equipo): Observable<Equipo> {
    
        let body = equipo;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url+'api/equipo/' , body, options).map(this.extractData);
  }


  /*----------------------MODIFICAR EQUIPO--------------------------*/
  modificarEquipo(equipo: Equipo): Observable<Equipo> {
    console.log("MOD SERVICE" + equipo.identificador)
    let body = equipo;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url + 'api/equipo/modificar/', body, options).map(this.extractData);
  }

  updateHuman(human: Equipo) {
    const url = `${this.url + "api/equipo"}/${human.identificador}`;
    const data = JSON.stringify(human);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.url + "api/equipo/", data,options).subscribe(
      response => response.json().data as Equipo,
      error => console.log(error)
    );
  }


/*----------------------LISTAR EQUIPO REPRESENTANTE--------------------------*/

  /*
  listaEquipo(id: number): Observable<Equipo[]> {

    return this.http.get(this.url"+ api/jugador/", id+"").map(response => response.json());

  }*/

  modificar(equipo: Equipo): Observable<Equipo> {
    let body = equipo;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.url + "/Create", equipo, options).map(this.extractData);
  }



  insertar(equipo: Equipo): Observable<Equipo> {
    let body = equipo;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url + "/Create", body, options).map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }


  guardarEquipo(equipo: Equipo) {

    return this.http.post(this.url + 'api/Equipo/Create', equipo)
      .map((response: Response) => response.json())
      .catch(this.errorHandler)
  }

  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error);
  }


  listarEquipoRep(nombre: string): Observable<Equipo> {
    console.log(this.url + "api/equipo/");
    return this.http.get(this.url+"api/equipo", nombre).map(response => response.json());;
  }

  EquipoRep(nombre: string): Observable<Equipo> {
    console.log(this.url + "api/equipo/");
    return this.http.get(this.url+"api/equipo/", nombre).map(response => response.json());;
  }
 

  equipos(nombre: string): Observable<Equipo[]> {
    console.log(nombre);
    return this.http.get(this.url + "api/equipo/mod/" + nombre).map(response => response.json());

  }

  representatntes(rep: string): Observable<Equipo[]> {
    return this.http.get(this.url + "api/equipo/rep/" +rep).map(response => response.json());
  }

  modificarEq(equipo: Equipo, id: number) {
    let body = equipo;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.url + "api/equipo/"+id, JSON.stringify(body), { headers: headers }).map(this.extractData).catch(this.handleError);
  }


  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }



/***EQUIPO INFO REGISTRAR**/
 rep(nombre: string): Observable<Equipo[]> {
    return this.http.get(this.url + "api/equipo/repre/" + nombre).map(response => response.json());

  }
}
