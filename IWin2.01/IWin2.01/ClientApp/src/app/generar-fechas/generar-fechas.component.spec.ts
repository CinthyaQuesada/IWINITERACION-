import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarFechasComponent } from './generar-fechas.component';

describe('GenerarFechasComponent', () => {
  let component: GenerarFechasComponent;
  let fixture: ComponentFixture<GenerarFechasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerarFechasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarFechasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
