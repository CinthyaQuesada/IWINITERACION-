import { Injectable,Inject } from "@angular/core";

import { Http,Response} from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { Headers, RequestOptions } from '@angular/http';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Arbitro } from "../Domain/Arbitro";




@Injectable()
export class ArbitroService {
  private url = '';

  private arbitro: Arbitro;
  
  constructor(private http:Http, @Inject('BASE_URL') baseUrl: string) { 
    this.url = baseUrl;
  }

  


  /*----------------------ELIMINAR arbitro--------------------------*/
  eliminararbitro(id: string): Observable<Arbitro> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(this.url + 'api/arbitro/' + id, options).map(response => response.json());
  }
  

  /*----------------------INSERTAR arbitro--------------------------*/
  insertararbitro(arbitro: Arbitro): Observable<Arbitro> {
    console.log("SERVICE " + arbitro.nombre + " nombre " + arbitro.apellidos + " apellidos " + arbitro.categoria + "categoria");
        let body = arbitro;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url+'api/Arbitro/' , body, options).map(this.extractData);
  }


  /*----------------------MODIFICAR arbitro--------------------------*/
  modificararbitro(arbitro: Arbitro): Observable<Arbitro> {
    let body = arbitro;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.url + 'api/arbitro/', body, options).map(this.extractData);
  }


/*----------------------LISTAR arbitro REPRESENTANTE--------------------------*/

  /*
  listaarbitro(id: number): Observable<arbitro[]> {

    return this.http.get(this.url"+ api/jugador/", id+"").map(response => response.json());

  }*/

  modificar(arbitro: Arbitro): Observable<Arbitro> {
    let body = arbitro;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.url + "/Create", arbitro, options).map(this.extractData);
  }



  insertar(arbitro: Arbitro): Observable<Arbitro> {
    let body = arbitro;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url + "/Create", arbitro, options).map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }


  guardararbitro(arbitro: Arbitro) {

    return this.http.post(this.url + 'api/arbitro/Create', arbitro)
      .map((response: Response) => response.json())
      .catch(this.errorHandler)
  }

  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error);
  }


  listararbitroRep(nombre: string): Observable<Arbitro> {
    console.log(this.url + "api/arbitro/");
    return this.http.get(this.url+"api/arbitro", nombre).map(response => response.json());;
  }

  arbitroRep(ID: string): Observable<Arbitro> {
    return this.http.get(this.url+"api/arbitro/lista/"+ID).map(response => response.json());;
  }

  



}
