import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarEquipoRepComponent } from './eliminar-equipo-rep.component';

describe('EliminarEquipoRepComponent', () => {
  let component: EliminarEquipoRepComponent;
  let fixture: ComponentFixture<EliminarEquipoRepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarEquipoRepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarEquipoRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
