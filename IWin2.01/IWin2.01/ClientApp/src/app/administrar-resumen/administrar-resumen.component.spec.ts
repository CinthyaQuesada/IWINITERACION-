import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarResumenComponent } from './administrar-resumen.component';

describe('AdministrarResumenComponent', () => {
  let component: AdministrarResumenComponent;
  let fixture: ComponentFixture<AdministrarResumenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrarResumenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
