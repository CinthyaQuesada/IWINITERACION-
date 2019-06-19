import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarArbitroComponent } from './gestionar-arbitro.component';

describe('GestionarArbitroComponent', () => {
  let component: GestionarArbitroComponent;
  let fixture: ComponentFixture<GestionarArbitroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionarArbitroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarArbitroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
