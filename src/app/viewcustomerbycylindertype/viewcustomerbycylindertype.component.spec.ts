import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcustomerbycylindertypeComponent } from './viewcustomerbycylindertype.component';

describe('ViewcustomerbycylindertypeComponent', () => {
  let component: ViewcustomerbycylindertypeComponent;
  let fixture: ComponentFixture<ViewcustomerbycylindertypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcustomerbycylindertypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcustomerbycylindertypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
