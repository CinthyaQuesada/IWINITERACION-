import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SancionEquipoComponent } from './sancion-equipo.component';

describe('SancionEquipoComponent', () => {
  let component: SancionEquipoComponent;
  let fixture: ComponentFixture<SancionEquipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SancionEquipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SancionEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
