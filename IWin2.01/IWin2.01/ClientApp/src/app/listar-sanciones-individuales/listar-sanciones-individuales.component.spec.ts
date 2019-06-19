import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSancionesIndividualesComponent } from './listar-sanciones-individuales.component';

describe('ListarSancionesIndividualesComponent', () => {
  let component: ListarSancionesIndividualesComponent;
  let fixture: ComponentFixture<ListarSancionesIndividualesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarSancionesIndividualesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSancionesIndividualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
