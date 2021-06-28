import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcylindertypesComponent } from './viewcylindertypes.component';

describe('ViewcylindertypesComponent', () => {
  let component: ViewcylindertypesComponent;
  let fixture: ComponentFixture<ViewcylindertypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcylindertypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcylindertypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
