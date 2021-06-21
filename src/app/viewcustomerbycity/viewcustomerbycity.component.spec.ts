import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcustomerbycityComponent } from './viewcustomerbycity.component';

describe('ViewcustomerbycityComponent', () => {
  let component: ViewcustomerbycityComponent;
  let fixture: ComponentFixture<ViewcustomerbycityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcustomerbycityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcustomerbycityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
