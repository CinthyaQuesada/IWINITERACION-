import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSancionesColectivasComponent } from './listar-sanciones-colectivas.component';

describe('ListarSancionesColectivasComponent', () => {
  let component: ListarSancionesColectivasComponent;
  let fixture: ComponentFixture<ListarSancionesColectivasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarSancionesColectivasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSancionesColectivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
