import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarCampeonatoComponent } from './modificar-campeonato.component';

describe('ModificarCampeonatoComponent', () => {
  let component: ModificarCampeonatoComponent;
  let fixture: ComponentFixture<ModificarCampeonatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarCampeonatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarCampeonatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
