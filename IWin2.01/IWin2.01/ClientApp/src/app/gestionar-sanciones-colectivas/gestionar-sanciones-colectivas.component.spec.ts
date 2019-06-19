import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarSancionesColectivasComponent } from './gestionar-sanciones-colectivas.component';

describe('GestionarSancionesColectivasComponent', () => {
  let component: GestionarSancionesColectivasComponent;
  let fixture: ComponentFixture<GestionarSancionesColectivasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionarSancionesColectivasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarSancionesColectivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
