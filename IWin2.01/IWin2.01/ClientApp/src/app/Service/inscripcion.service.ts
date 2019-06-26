import { Injectable,Inject } from "@angular/core";
import { Http,Response} from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { Headers, RequestOptions } from '@angular/http';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Inscripcion } from "../Domain/inscripcion-model";
import { Equipo } from "../Domain/Equipo.model";





@Injectable()
export class InscripcionService {
  private url = '';

  private Inscripcion: Inscripcion;
  
  constructor(private http:Http, @Inject('BASE_URL') baseUrl: string) { 
    this.url = baseUrl;
  }


  /*---------------------- Inscripcion--------------------------*/
  insertarInscripcion(inscripcion: Inscripcion): Observable<Inscripcion> {
    //console.log("SERVICE " + inscripcion.idEquipo + "SERVICE " + inscripcion.fechaInscripcion +"   " +inscripcion.id);
        let body = inscripcion;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url+'api/inscripcion/' , body, options).map(this.extractData);
  }

/*----------------------Equipo --------------------------*/
  equipos(nombre: string): Observable<Equipo[]> {

    return this.http.get(this.url + "api/inscripcion/camp/" + nombre).map(response => response.json());

  }

/*----------------------Comprobar Inscripcion--------------------------*/
  infIns(idE: string): Observable<Inscripcion[]> {
    
    return this.http.get(this.url + "api/inscripcion/comprobar/" + idE).map(response => response.json());

  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }


 modificarInsc(insc: Inscripcion, id: number) {
  let body = insc;
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  return this.http.put(this.url + "api/inscripcion/" + id, JSON.stringify(body), { headers: headers }).map(this.extractData).catch(this.handleError);
}

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }


}
