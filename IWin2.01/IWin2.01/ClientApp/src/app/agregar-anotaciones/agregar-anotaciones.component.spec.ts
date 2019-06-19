import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAnotacionesComponent } from './agregar-anotaciones.component';

describe('AgregarAnotacionesComponent', () => {
  let component: AgregarAnotacionesComponent;
  let fixture: ComponentFixture<AgregarAnotacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarAnotacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarAnotacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
