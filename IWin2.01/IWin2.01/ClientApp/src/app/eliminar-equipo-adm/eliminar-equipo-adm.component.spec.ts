import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarEquipoAdmComponent } from './eliminar-equipo-adm.component';

describe('EliminarEquipoAdmComponent', () => {
  let component: EliminarEquipoAdmComponent;
  let fixture: ComponentFixture<EliminarEquipoAdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarEquipoAdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarEquipoAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
