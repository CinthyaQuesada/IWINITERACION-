import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarArbitroComponent } from './eliminar-arbitro.component';

describe('EliminarArbitroComponent', () => {
  let component: EliminarArbitroComponent;
  let fixture: ComponentFixture<EliminarArbitroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarArbitroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarArbitroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
