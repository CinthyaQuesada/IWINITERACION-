import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarSancionColectivaComponent } from './agregar-sancion-colectiva.component';

describe('AgregarSancionColectivaComponent', () => {
  let component: AgregarSancionColectivaComponent;
  let fixture: ComponentFixture<AgregarSancionColectivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarSancionColectivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarSancionColectivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
