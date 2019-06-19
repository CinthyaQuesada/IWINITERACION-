import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPosicionesRepComponent } from './tabla-posiciones-rep.component';

describe('TablaPosicionesRepComponent', () => {
  let component: TablaPosicionesRepComponent;
  let fixture: ComponentFixture<TablaPosicionesRepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaPosicionesRepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaPosicionesRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
