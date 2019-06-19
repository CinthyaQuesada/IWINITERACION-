import { Component, OnInit, Inject } from '@angular/core';

import { EquipoService } from '../Service/equipo.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Equipo } from '../Domain/Equipo.model';

@Component({
  selector: 'app-modificar-equipo',
  templateUrl: './modificar-equipo.component.html',
  styleUrls: ['./modificar-equipo.component.css']
})
export class ModificarEquipoComponent implements OnInit {
  equipos: Equipo[] = new Array<Equipo>();
  equipo: Equipo = new Equipo();
  equipo2: Equipo = new Equipo();
  equipoMod: Equipo;

  identificador: number;
  nombreEquipo: string;
  nombreRepresentante: string;
  categoria: string;
  rama: string;
  logo: string;
  telefonoRepresentante: string;
  canchaSede: string;
  contraseniaEquipo: string;






  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private equipoS: EquipoService, private rutaActiva: ActivatedRoute) {

    this.nombreEquipo = this.rutaActiva.snapshot.params.nombre;
    this.equipoS.equipos(this.nombreEquipo).subscribe(data => this.equipos = data);
    this.http.get<Equipo>(this.baseUrl + 'api/equipo/equi/' + this.nombreEquipo).subscribe(result => {
      this.equipo = result;
    }, error => console.error(error));


  }

  modificar() {

    if (this.equipo.nombreRepresentante != null && this.equipo.canchaSede != null && this.equipo.telefonoRepresentante != null && this.equipo.contraseniaEquipo != null) {
      this.equipo2 = this.equipo;
      this.identificador = this.equipo2.identificador;
      console.log(this.equipo.telefonoRepresentante);
      this.equipoMod = this.equipo;
      this.equipoS.modificarEq(this.equipoMod, this.identificador).subscribe(data => (console.log(data)));
      alert("El equipo " + this.nombreEquipo + " fue modificado exitosamente");

    }
    else {
      alert("Todos los espacios deben ser completados en este formulario");
    }
  }

  verificarRep() {
    var cont = 0;
    var valido = 0;
    while (cont < this.equipos.length) {
      if (this.nombreRepresentante == this.equipos[cont].nombreRepresentante) {
        valido = 0;
        cont = this.equipos.length;
      }
      else {
        valido = 1;
      }
      cont++;
    }
    return valido;
  }

  infoEquipo() {
    this.equipo = this.equipos[0];
    this.identificador = this.equipo.identificador;
    this.nombreRepresentante = this.equipo.nombreRepresentante;
    this.telefonoRepresentante = this.equipo.telefonoRepresentante;
    this.rama = this.equipo.rama;
    this.categoria = this.equipo.categoria;
    this.canchaSede = this.equipo.canchaSede;
    this.contraseniaEquipo = this.equipo.contraseniaEquipo;
    return this.equipos;

  }

  asignar() {
    return this.equipos;
  }

  ngOnInit() {
    this.http.get<Equipo>(this.baseUrl + 'api/equipo/equi/' + this.nombreEquipo).subscribe(result => {
      this.equipo = result;
    }, error => console.error(error));
    this.nombreEquipo = this.rutaActiva.snapshot.params.nombre;
    this.equipoS.equipos(this.nombreEquipo).subscribe(data => this.equipos = data);
    this.http.get<Equipo[]>(this.baseUrl + 'api/Equipo').subscribe(result => {
      this.equipos = result;
    }, error => console.error(error));

  }



}
