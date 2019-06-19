import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inscripcion } from '../Domain/inscripcion-model';

@Component({
  selector: 'app-listar-inscripciones',
  templateUrl: './listar-inscripciones.component.html',
  styleUrls: ['./listar-inscripciones.component.css']
})
export class ListarInscripcionesComponent implements OnInit {
  public insc: Inscripcion[]=new Array<Inscripcion>();

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    http.get<Inscripcion[]>(baseUrl + 'api/inscripcion/').subscribe(result => {
      this.insc = result;
    }, error => console.error(error));
  }


  listas() {
    console.log(this.insc[0].equipo.nombreEquipo);
    return this.insc;
  }


  ngOnInit() {
    this.http.get<Inscripcion[]>(this.baseUrl + 'api/inscripcion/').subscribe(result => {
      this.insc = result;
    }, error => console.error(error));
  }

}
