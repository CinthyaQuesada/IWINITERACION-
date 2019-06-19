import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarSancionesIndividualesComponent } from './gestionar-sanciones-individuales.component';

describe('GestionarSancionesIndividualesComponent', () => {
  let component: GestionarSancionesIndividualesComponent;
  let fixture: ComponentFixture<GestionarSancionesIndividualesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionarSancionesIndividualesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarSancionesIndividualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
