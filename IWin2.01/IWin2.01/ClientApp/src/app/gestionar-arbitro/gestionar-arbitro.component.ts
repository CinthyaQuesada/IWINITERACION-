import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Arbitro } from '../Domain/Arbitro';

@Component({
  selector: 'app-gestionar-arbitro',
  templateUrl: './gestionar-arbitro.component.html',
  styleUrls: ['./gestionar-arbitro.component.css']
})
export class GestionarArbitroComponent implements OnInit {
    ngOnInit(): void {
        
    }
  public arbitros: Arbitro[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Arbitro[]>(baseUrl + 'api/Arbitro/').subscribe(result => {
      this.arbitros = result;
    }, error => console.error(error));
  }

}
