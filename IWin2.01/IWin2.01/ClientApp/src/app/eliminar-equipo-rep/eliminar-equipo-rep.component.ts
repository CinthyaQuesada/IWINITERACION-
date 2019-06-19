import { Component, OnInit, Inject } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EquipoService } from '../Service/equipo.service';
import { Equipo } from '../Domain/Equipo.model';


@Component({
  selector: 'app-eliminar-equipo-rep',
  templateUrl: './eliminar-equipo-rep.component.html',
  styleUrls: ['./eliminar-equipo-rep.component.css']
})
export class EliminarEquipoRepComponent implements OnInit {
  public id: number;
  public equipos: Equipo[];
  public equipo: Equipo;
  public url2: string;
  public nombreUsurio: string
  public nombreEquipo: string;


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private rutaActiva: ActivatedRoute, private equipoS: EquipoService, private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

    this.nombreEquipo = this.rutaActiva.snapshot.params.nombre;

    this.http.get<Equipo[]>(baseUrl + 'api/Equipo/' + this.nombreEquipo).subscribe(result => {
      this.equipos = result;
    }, error => console.error(error));


  }

  ngOnInit() {
    this.nombreEquipo = this.rutaActiva.snapshot.params.nombre;

  }

  eliminar(id: number, nombre: string) {
    console.log(this.equipos.length);
    var ans = confirm("¿Está seguro que deseea eliminar el equipo " + nombre + "? ");
    if (ans) {
      this.equipoS.eliminarEquipo(id).subscribe(data => this.equipos);
      alert('Eliminación del Equipo ' + nombre + " exitosa");
      window.location.href = "home";
    }
  }

  deleteE(id: number) {
    id = 3;
    const url = `${this.url2}/${id}`; // DELETE api/heroes/42
    this.http.delete(url, this.httpOptions);
  }

}
