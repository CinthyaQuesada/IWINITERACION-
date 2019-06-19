import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarJuegoComponent } from './gestionar-juego.component';

describe('GestionarJuegoComponent', () => {
  let component: GestionarJuegoComponent;
  let fixture: ComponentFixture<GestionarJuegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionarJuegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
