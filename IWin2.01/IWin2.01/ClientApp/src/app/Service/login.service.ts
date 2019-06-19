import { Injectable, Inject } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { Headers, RequestOptions } from '@angular/http';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Login } from "../Domain/login.model";




@Injectable()
export class LoginService {
  private url = '';



  constructor(private http: Http, @Inject('BASE_URL') baseUrl: string) {
    this.url = baseUrl;
  }

  registrar(login: Login): Observable<Login> {

    let body = login;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url + 'api/login/', body, options).map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }
}
