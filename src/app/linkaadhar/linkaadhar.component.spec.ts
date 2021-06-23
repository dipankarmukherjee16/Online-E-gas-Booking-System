import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkaadharComponent } from './linkaadhar.component';

describe('LinkaadharComponent', () => {
  let component: LinkaadharComponent;
  let fixture: ComponentFixture<LinkaadharComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkaadharComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkaadharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
