import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarCampeonatoComponent } from './eliminar-campeonato.component';

describe('EliminarCampeonatoComponent', () => {
  let component: EliminarCampeonatoComponent;
  let fixture: ComponentFixture<EliminarCampeonatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarCampeonatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarCampeonatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
