import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarSancionIndividualComponent } from './agregar-sancion-individual.component';

describe('AgregarSancionIndividualComponent', () => {
  let component: AgregarSancionIndividualComponent;
  let fixture: ComponentFixture<AgregarSancionIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarSancionIndividualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarSancionIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
