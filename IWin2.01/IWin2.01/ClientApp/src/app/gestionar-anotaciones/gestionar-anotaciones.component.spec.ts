import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarAnotacionesComponent } from './gestionar-anotaciones.component';

describe('GestionarAnotacionesComponent', () => {
  let component: GestionarAnotacionesComponent;
  let fixture: ComponentFixture<GestionarAnotacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionarAnotacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarAnotacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
