import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarJugadorComponent } from './gestionar-jugador.component';

describe('GestionarJugadorComponent', () => {
  let component: GestionarJugadorComponent;
  let fixture: ComponentFixture<GestionarJugadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionarJugadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
