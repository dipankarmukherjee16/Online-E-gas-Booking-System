import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurrendercustomerComponent } from './surrendercustomer.component';

describe('SurrendercustomerComponent', () => {
  let component: SurrendercustomerComponent;
  let fixture: ComponentFixture<SurrendercustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurrendercustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurrendercustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
