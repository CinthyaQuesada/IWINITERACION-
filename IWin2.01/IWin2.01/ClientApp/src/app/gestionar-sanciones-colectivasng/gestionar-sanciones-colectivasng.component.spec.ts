import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarSancionesColectivasngComponent } from './gestionar-sanciones-colectivasng.component';

describe('GestionarSancionesColectivasngComponent', () => {
  let component: GestionarSancionesColectivasngComponent;
  let fixture: ComponentFixture<GestionarSancionesColectivasngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionarSancionesColectivasngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarSancionesColectivasngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
