import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallinvoicesComponent } from './viewallinvoices.component';

describe('ViewallinvoicesComponent', () => {
  let component: ViewallinvoicesComponent;
  let fixture: ComponentFixture<ViewallinvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewallinvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallinvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
