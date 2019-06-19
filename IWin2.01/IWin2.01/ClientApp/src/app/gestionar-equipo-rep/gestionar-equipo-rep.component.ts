import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Equipo } from '../Domain/Equipo.model';
import { EquipoService } from '../Service/equipo.service';

@Component({
  selector: 'app-gestionar-equipo-rep',
  templateUrl: './gestionar-equipo-rep.component.html',
  styleUrls: ['./gestionar-equipo-rep.component.css']
})
export class GestionarEquipoRepComponent implements OnInit {
  public equipos: Equipo[] = new Array();
  public equipo: Equipo = new Equipo();
  public nombreEquipo: string;
  public url: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string, private equipoS: EquipoService, private rutaActiva: ActivatedRoute) {
    this.nombreEquipo = this.rutaActiva.snapshot.params.nombre;

    this.http.get<Equipo[]>(baseUrl + 'api/Equipo/' + this.nombreEquipo).subscribe(result => {
      this.equipos = result;
    }, error => console.error(error));

  }

  ngOnInit() {
    this.nombreEquipo = this.rutaActiva.snapshot.params.nombre;
  }
}
