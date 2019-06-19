import { Component, OnInit, Inject } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { EquipoService } from '../Service/equipo.service';
import { HttpClient } from '@angular/common/http';
import { Equipo } from '../Domain/Equipo.model';

@Component({
  selector: 'app-eliminar-equipo-adm',
  templateUrl: './eliminar-equipo-adm.component.html',
  styleUrls: ['./eliminar-equipo-adm.component.css']
})
export class EliminarEquipoAdmComponent implements OnInit {

  id: number;
  public equipos: Equipo[];
  public equipo: Equipo;
  public url2: string;
  public nombreUsurio: string
  public nombreEquipo: string;
  public nombreB: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private rutaActiva: ActivatedRoute, private equipoS: EquipoService, private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

    this.http.get<Equipo[]>(baseUrl + 'api/Equipo').subscribe(result => {
      this.equipos = result;
    }, error => console.error(error));
    this.url2 = baseUrl;

  }

  ngOnInit() {
    //this.nombreUsurio = this.rutaActiva.snapshot.nombreUsuario;

  }



  eliminar(id: number, nombre: string) {

    var ans = confirm("¿Está seguro que deseea eliminar el equipo " + nombre + "? ");
    if (ans) {
      this.equipoS.eliminarEquipo(id).subscribe(data => this.equipos);
      alert('Eliminación del Equipo ' + nombre + " exitosa");
      window.location.href = "eliminar-equipo-adm";
    }
  }

  deleteE(id: number) {
    id = 3;
    const url = `${this.url2}/${id}`; // DELETE api/heroes/42
    this.http.delete(url, this.httpOptions);
  }

  //HACER METODO EN DATA CON LIKE
  buscarEquipo() {
    this.http.get<Equipo[]>(this.url2 + 'api/arbitro/' + this.nombreB).subscribe(result => {
      this.equipos = result;
    }, error => console.error(error));
  }

}
