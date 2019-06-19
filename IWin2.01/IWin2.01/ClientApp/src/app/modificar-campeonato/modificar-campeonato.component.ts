import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Campeonato } from '../Domain/Campeonato.model';
import { campeonatoService } from '../Service/campeonatoService';

@Component({
  selector: 'app-modificar-campeonato',
  templateUrl: './modificar-campeonato.component.html',
  styleUrls: ['./modificar-campeonato.component.css']
})
export class ModificarCampeonatoComponent  {
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
  tipos = [
    {
      "Opcion": "Futbol"
    },
    {
      "Opcion": "Futbol 5"
    },
    {
      "Opcion": "Baloncesto"
    }
  ]
  categorias = [
    {
      "Sexo": "Femenino"
    },
    {
      "Sexo": "Masculino"
    }
  ]
  

  constructor(public http: HttpClient, @Inject('BASE_URL') public baseUrl: string, public campeonatoService: campeonatoService) {
    http.get<Campeonato[]>(baseUrl + 'api/Campeonato').subscribe(result => {
      this.campeonatos = result;
    }, error => console.error(error));

  }
  
  buscar(campeonatoSeleccionado: Campeonato): void {
    this.campeonatoSelect = campeonatoSeleccionado;
    console.log("entra en buscar" + this.campeonatoSelect.fechaInicio);

   /* this.http.get<Campeonato[]>(this.baseUrl + 'api/Campeonato/' + this.campeonatoSelect.identificador).subscribe(result => {
      this.campeonatosSelect = result;
    }, error => console.error(error));
    */
    this.nombreCampeonato = this.campeonatoSelect.nombreCampeonato;
    this.tipo = this.campeonatoSelect.tipo;
    this.categoria = this.campeonatoSelect.categoria;
    this.fechaInicio = this.campeonatoSelect.fechaInicio;
    console.log(this.tipo);

  }
  modificar(): void {

    if (this.nombreCampeonato != null && this.nombreCampeonato != "" && this.tipo != null && this.tipo != "" && this.categoria != null && this.categoria != "" && this.fechaInicio != null) {
      console.log(this.categoria + "-" + this.tipo);
      /*
      this.campeonatoUpdate.nombreCampeonato = this.nombreCampeonato;
      this.campeonatoUpdate.tipo = this.tipo;
      this.campeonatoUpdate.categoria = this.categoria;
      this.campeonatoUpdate.fechaInicio = this.fechaInicio;*/
      this.campeonatoService.modificar(new Campeonato(this.campeonatoSelect.identificador, this.nombreCampeonato, this.tipo, this.categoria, this.cantidadGrupos,this.fechaInicio)).subscribe(data => this.campeonato = data);
       window.location.href = "modificarCampeonato"
    } else {
      alert("Datos incompletos. Por favor llene todos los espacios.");
    }
    
  }
  mostrar(): void {

  }


}


