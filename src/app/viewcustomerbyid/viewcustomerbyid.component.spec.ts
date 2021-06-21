import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcustomerbyidComponent } from './viewcustomerbyid.component';

describe('ViewcustomerbyidComponent', () => {
  let component: ViewcustomerbyidComponent;
  let fixture: ComponentFixture<ViewcustomerbyidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcustomerbyidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcustomerbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
