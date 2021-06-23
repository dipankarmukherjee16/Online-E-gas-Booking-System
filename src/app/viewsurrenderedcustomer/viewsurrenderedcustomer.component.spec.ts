import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsurrenderedcustomerComponent } from './viewsurrenderedcustomer.component';

describe('ViewsurrenderedcustomerComponent', () => {
  let component: ViewsurrenderedcustomerComponent;
  let fixture: ComponentFixture<ViewsurrenderedcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsurrenderedcustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsurrenderedcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
