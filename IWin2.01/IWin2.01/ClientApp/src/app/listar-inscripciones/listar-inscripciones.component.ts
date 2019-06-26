import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inscripcion } from '../Domain/inscripcion-model';
import { Campeonato } from '../Domain/Campeonato.model';
import { InscripcionService } from '../Service/inscripcion.service';

@Component({
  selector: 'app-listar-inscripciones',
  templateUrl: './listar-inscripciones.component.html',
  styleUrls: ['./listar-inscripciones.component.css']
})
export class ListarInscripcionesComponent implements OnInit {
  public insc: Inscripcion[] = new Array<Inscripcion>();
  public campeonatos: Campeonato[] = new Array<Campeonato>();
  idC: number;
  nombre: string = "a";

  insc1: Inscripcion = new Inscripcion();

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private insS: InscripcionService) {

    this.http.get<Campeonato[]>(baseUrl + 'api/Inscripcion/' + this.nombre).subscribe(result => {
      this.campeonatos = result;
    }, error => console.error(error));
  }

  listas() {
    console.log(this.insc[0].equipo.nombreEquipo);
    return this.insc;
  }
  consultar() {
    console.log(this.idC);
    this.http.get<Inscripcion[]>(this.baseUrl + 'api/inscripcion/campid/' + this.idC).subscribe(result => {
      this.insc = result;
  }, error => console.error(error));
  }



  aprobar(identificador: number) {

    this.insS.modificarInsc(this.insc1, identificador).subscribe(data => (console.log(data)));
    alert("La inscripcion " + identificador + " ha sido aprobada exitosamente");
    window.location.href = 'listar-inscripciones';
  }

  ngOnInit() {
   
  }

}
