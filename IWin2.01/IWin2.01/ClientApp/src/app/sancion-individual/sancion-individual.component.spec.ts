import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SancionIndividualComponent } from './sancion-individual.component';

describe('SancionIndividualComponent', () => {
  let component: SancionIndividualComponent;
  let fixture: ComponentFixture<SancionIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SancionIndividualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SancionIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
