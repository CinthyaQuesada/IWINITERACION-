import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarJugadorComponent } from './actualizar-jugador.component';

describe('ActualizarJugadorComponent', () => {
  let component: ActualizarJugadorComponent;
  let fixture: ComponentFixture<ActualizarJugadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarJugadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
