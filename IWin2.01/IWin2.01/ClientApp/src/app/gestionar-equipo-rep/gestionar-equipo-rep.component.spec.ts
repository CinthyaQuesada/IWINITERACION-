import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarEquipoRepComponent } from './gestionar-equipo-rep.component';

describe('GestionarEquipoRepComponent', () => {
  let component: GestionarEquipoRepComponent;
  let fixture: ComponentFixture<GestionarEquipoRepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionarEquipoRepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarEquipoRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
