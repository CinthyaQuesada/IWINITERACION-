import { Component, OnInit, Inject } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Arbitro } from '../Domain/Arbitro';
import { ArbitroService } from '../Service/arbitro.service';


@Component({
  selector: 'app-eliminar-arbitro',
  templateUrl: './eliminar-arbitro.component.html',
  styleUrls: ['./eliminar-arbitro.component.css']
})
export class EliminarArbitroComponent implements OnInit {
  id: number;
  public arbitros: Arbitro[];
  public arbitro: Arbitro;
  public url2: string;
  public nombreUsurio: string
  public nombrearbitro: string;
  public arbitroB: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private rutaActiva: ActivatedRoute, private arbitroS: ArbitroService, private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

    this.http.get<Arbitro[]>(baseUrl + 'api/arbitro').subscribe(result => {
      this.arbitros = result;
    }, error => console.error(error));
    this.url2 = baseUrl;

  }

  ngOnInit() {
    //this.nombreUsurio = this.rutaActiva.snapshot.nombreUsuario;

  }



  eliminar(id: string, nombre: string) {

    var ans = confirm("¿Está seguro que deseea eliminar el arbitro " + nombre + "? ");
    if (ans) {
      this.arbitroS.eliminararbitro(id).subscribe(data => this.arbitros);
      alert('Eliminación del arbitro ' + nombre + " exitosamente");
      window.location.href = "eliminar-arbitro";
    }
  }

  deleteE(id: number) {
    id = 3;
    const url = `${this.url2}/${id}`; // DELETE api/heroes/42
    this.http.delete(url, this.httpOptions);
  }

  buscarArbitro() {
    this.http.get<Arbitro[]>(this.url2 + 'api/arbitro/' + this.arbitroB).subscribe(result => {
      this.arbitros = result;
    }, error => console.error(error));
    //console.log("A " + this.arbitros[0].nombre);
  }

}
