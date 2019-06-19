import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscribirEquipoComponent } from './inscribir-equipo.component';

describe('InscribirEquipoComponent', () => {
  let component: InscribirEquipoComponent;
  let fixture: ComponentFixture<InscribirEquipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscribirEquipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscribirEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
