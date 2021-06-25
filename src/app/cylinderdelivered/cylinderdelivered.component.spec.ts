import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CylinderdeliveredComponent } from './cylinderdelivered.component';

describe('CylinderdeliveredComponent', () => {
  let component: CylinderdeliveredComponent;
  let fixture: ComponentFixture<CylinderdeliveredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CylinderdeliveredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CylinderdeliveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
