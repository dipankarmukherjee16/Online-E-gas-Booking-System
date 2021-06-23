import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsurrenderedcustomerbyyearComponent } from './viewsurrenderedcustomerbyyear.component';

describe('ViewsurrenderedcustomerbyyearComponent', () => {
  let component: ViewsurrenderedcustomerbyyearComponent;
  let fixture: ComponentFixture<ViewsurrenderedcustomerbyyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsurrenderedcustomerbyyearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsurrenderedcustomerbyyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
