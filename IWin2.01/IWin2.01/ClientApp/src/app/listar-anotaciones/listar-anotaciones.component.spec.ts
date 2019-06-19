import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAnotacionesComponent } from './listar-anotaciones.component';

describe('ListarAnotacionesComponent', () => {
  let component: ListarAnotacionesComponent;
  let fixture: ComponentFixture<ListarAnotacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarAnotacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAnotacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
