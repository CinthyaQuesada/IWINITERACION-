import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Campeonato } from '../Domain/Campeonato.model';
import { campeonatoService } from '../Service/campeonatoService';

@Component({
  selector: 'app-eliminar-campeonato',
  templateUrl: './eliminar-campeonato.component.html',
  styleUrls: ['./eliminar-campeonato.component.css']
})
export class EliminarCampeonatoComponent {

  public campeonatos: Campeonato[];
  //public campeonatosSelect: Campeonato[];
  public campeonato: Campeonato;
  campeonatoSelect: Campeonato;
  campeonatoUpdate: Campeonato;
  identificador: number;
  nombreCampeonato: string;
  tipo: string;
  categoria: string;
  cantidadGrupos: number;
  fechaInicio: Date;



  constructor(public http: HttpClient, @Inject('BASE_URL') public baseUrl: string, public campeonatoService: campeonatoService) {
    http.get<Campeonato[]>(baseUrl + 'api/Campeonato').subscribe(result => {
      this.campeonatos = result;
    }, error => console.error(error));
    console.log(this.campeonatos);
  }

  eliminar(identificador: number): void {
    console.log(identificador);
    this.campeonatoService.eliminarCampeonato(identificador).subscribe(data => this.campeonatos);
    alert("Eliminacion exitosa");
    window.location.href = 'eliminarCampeonato';

  }


}


