import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloEncargadoComponent } from './modulo-encargado.component';

describe('ModuloEncargadoComponent', () => {
  let component: ModuloEncargadoComponent;
  let fixture: ComponentFixture<ModuloEncargadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloEncargadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloEncargadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
