import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Arbitro } from '../Domain/Arbitro';
import { ArbitroService } from '../Service/arbitro.service';
@Component({
  selector: 'app-registrar-arbitro',
  templateUrl: './registrar-arbitro.component.html',
  styleUrls: ['./registrar-arbitro.component.css']
})
export class RegistrarArbitroComponent implements OnInit {
  identificacion: string;
  nombre: string;
  apellidos: string;
  categoria: string;
  telefono: string;
  arbitro: Arbitro;
  arbitro3: Arbitro;
  arbitros: Arbitro[] = new Array<Arbitro>();


  constructor(private arbitroS: ArbitroService, private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.http.get<Arbitro[]>(baseUrl + 'api/Arbitro/').subscribe(result => {
      this.arbitros = result;
    }, error => console.error(error));
  }
  ngOnInit(): void {
    this.http.get<Arbitro[]>(this.baseUrl + 'api/Arbitro/').subscribe(result => {
      this.arbitros = result;
    }, error => console.error(error));
  }


  insertar() {
    console.log(this.arbitros.length);

    this.arbitroS.arbitroRep(this.identificacion).subscribe(data => this.arbitro3 = data);
    if (this.identificacion != null && this.nombre != null && this.apellidos != null && this.categoria != null && this.telefono != null) {
      if (this.verificar() == 0) {
        alert("El arbitro " + this.nombre + " con cedula " + this.identificacion + " ya está inscrito ");
      }
      else {
        this.arbitro = new Arbitro(this.identificacion, this.nombre, this.apellidos, this.categoria, this.telefono);
        this.arbitroS.insertararbitro(this.arbitro).subscribe(data => this.arbitro = data);
        alert('Se inserto correctamente el arbitro ' + this.nombre);
        window.location.href = 'registrar-arbitro';
      }

    }
    else {
      alert("Debe rellenar todo los datos del formulario");

    }
  }


  verificar() {
    var cont = 0;
    var valido = 0;
    while (cont < this.arbitros.length) {
      console.log(cont);
      console.log(this.identificacion == this.arbitros[cont].identificacion + "BASE");
      if (this.identificacion == this.arbitros[cont].identificacion) {
        valido = 0;
        cont = this.arbitros.length;
      }
      else {
        valido = 1;
      }
      cont++;
    }
    return valido;
  }

}
