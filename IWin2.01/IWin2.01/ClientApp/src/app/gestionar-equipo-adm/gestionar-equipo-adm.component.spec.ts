import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarEquipoAdmComponent } from './gestionar-equipo-adm.component';

describe('GestionarEquipoAdmComponent', () => {
  let component: GestionarEquipoAdmComponent;
  let fixture: ComponentFixture<GestionarEquipoAdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionarEquipoAdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarEquipoAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
