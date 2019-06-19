import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Equipo } from '../Domain/Equipo.model';

@Component({
  selector: 'app-gestionar-equipo-adm',
  templateUrl: './gestionar-equipo-adm.component.html',
  styleUrls: ['./gestionar-equipo-adm.component.css']
})
export class GestionarEquipoAdmComponent implements OnInit {
  public equipos: Equipo[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Equipo[]>(baseUrl + 'api/equipo/').subscribe(result => {
      this.equipos = result;
    }, error => console.error(error));
  }

  ngOnInit() {
  }

}
