import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloAdministradorComponent } from './modulo-administrador.component';

describe('ModuloAdministradorComponent', () => {
  let component: ModuloAdministradorComponent;
  let fixture: ComponentFixture<ModuloAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
