import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { campeonatoService } from '../Service/campeonatoService';
import { Campeonato } from '../Domain/Campeonato.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agregar-campeonato',
  templateUrl: './agregar-campeonato.component.html',
  styleUrls: ['./agregar-campeonato.component.css']
})
export class AgregarCampeonatoComponent implements OnInit {

  campeonatos: Campeonato[];
  identificador: number;
  nombreCampeonato: string;
  tipo: string;
  categoria: string;
  cantidadGrupos: number;
  fechaInicio: Date;
  campeonato: Campeonato;
  tipos = [
    {
      "Opcion": "Futbal"
    },
    {
      "Opcion": "Futbal 5"
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
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private campeonatoservice: campeonatoService) {
   
  }



  ngOnInit() {


  }

  agregar() {
    if (this.nombreCampeonato != "" && this.tipo != "" && this.categoria != ""  && this.fechaInicio != null) {

      console.log(this.tipo + " " + this.categoria);


      this.campeonatoservice.agregarCampeonato(new Campeonato(this.identificador, this.nombreCampeonato, this.tipo, this.categoria, this.cantidadGrupos, this.fechaInicio)).subscribe(data => this.campeonato = data);
      alert("El campeonato " + this.nombreCampeonato + " ha sido agregado exitosamente")
      window.location.href = "agregarCampeonato"



    }
    else {
      alert("Hay espacios en blanco,por favor complete la información");

    }

  }


  cerrar(): void {
    window.location.href = "home"
  }

}

