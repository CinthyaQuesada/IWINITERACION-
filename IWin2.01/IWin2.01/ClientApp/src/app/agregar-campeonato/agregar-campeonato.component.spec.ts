import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCampeonatoComponent } from './agregar-campeonato.component';

describe('AgregarCampeonatoComponent', () => {
  let component: AgregarCampeonatoComponent;
  let fixture: ComponentFixture<AgregarCampeonatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarCampeonatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCampeonatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
