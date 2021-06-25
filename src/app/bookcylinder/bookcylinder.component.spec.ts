import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookcylinderComponent } from './bookcylinder.component';

describe('BookcylinderComponent', () => {
  let component: BookcylinderComponent;
  let fixture: ComponentFixture<BookcylinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookcylinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookcylinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
