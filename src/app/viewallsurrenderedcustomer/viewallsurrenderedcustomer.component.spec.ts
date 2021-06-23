import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallsurrenderedcustomerComponent } from './viewallsurrenderedcustomer.component';

describe('ViewallsurrenderedcustomerComponent', () => {
  let component: ViewallsurrenderedcustomerComponent;
  let fixture: ComponentFixture<ViewallsurrenderedcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallsurrenderedcustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallsurrenderedcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
