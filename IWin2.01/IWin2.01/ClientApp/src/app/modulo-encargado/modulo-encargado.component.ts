import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modulo-encargado',
  templateUrl: './modulo-encargado.component.html',
  styleUrls: ['./modulo-encargado.component.css']
})
export class ModuloEncargadoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  cerrar(): void {
    window.location.href = "home";
  }
}
