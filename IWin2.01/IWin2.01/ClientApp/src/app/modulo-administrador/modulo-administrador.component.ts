import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modulo-administrador',
  templateUrl: './modulo-administrador.component.html',
  styleUrls: ['./modulo-administrador.component.css']
})
export class ModuloAdministradorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cerrar(): void {
    window.location.href = "home"
  }

}
