import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarJugadorComponent } from './registrar-jugador.component';

describe('RegistrarJugadorComponent', () => {
  let component: RegistrarJugadorComponent;
  let fixture: ComponentFixture<RegistrarJugadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarJugadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
