import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcylindersbookedComponent } from './viewcylindersbooked.component';

describe('ViewcylindersbookedComponent', () => {
  let component: ViewcylindersbookedComponent;
  let fixture: ComponentFixture<ViewcylindersbookedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcylindersbookedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcylindersbookedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
